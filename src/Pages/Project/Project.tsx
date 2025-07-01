// Project.tsx
import React, { useEffect, useState } from 'react'
import styles from './Project.module.css'
import Footer from '@/components/Footer/Footer'
import Menu from '@/components/Menu/Menu'
import { Loading } from '@/components/Loading/Loading'
import { Carousel, ConfigProvider } from 'antd'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'


type Module={
    text?: string
    tags?: string[]
    imageSizes?: {
        allAvailable: { url: string; height: number }[]
    }
    components?: {
        imageSizes: {
            allAvailable: { url: string; height: number }[]
        }
    }[]
}
type ProjectType={
    slug: string
    name: string
    covers: {
        size_original_webp: { url: string }
    }
    allModules?: Module[]
    tags?: { title: string }[]
}
const Project: React.FC = () => {
    const params = useParams()
    const slug = params?.id
    const router = useRouter()
    const [isLoading, setLoading] = useState(true)
    const [project, setProject] = useState<ProjectType | null>(null)
    const [projects, setProjects] = useState<ProjectType[]>([])

    useEffect(() => { setLoading(true) }, [slug])

    useEffect(() => {
        fetch('/api/behance/projects')
            .then((res) => res.json() as Promise<ProjectType[]>)
            .then((data) => {
                const found = data.find((p) => p.slug === slug)
                if (found) {
                    setProject(found)
                    setProjects(data.filter((p) => p.slug !== slug).slice(0, 4))
                }

            })
            .catch(() => {
                // router.push('/')
            })
            .finally(() => setLoading(false))
    }, [slug, router])

    if (isLoading || !project) return <Loading />

    const textList = project.allModules?.filter((m) => m.text) as Module[]
    const images = project.allModules
        ?.filter((m) => m.components)
        .flatMap((m) =>
            m.components!.flatMap((c) => {
                const match = typeof window !== 'undefined'
                    ? c.imageSizes.allAvailable.find((img) => img.height > window.innerHeight)
                    : null
                return match?.url ?? c.imageSizes.allAvailable.slice(-1)[0].url
            })
        ) ?? []
    const isometric = project.allModules
        ?.filter((m) => m.tags?.includes('isometric'))
        .flatMap((m) => {
            const match = typeof window !== 'undefined'
                ? m.imageSizes?.allAvailable[m.imageSizes?.allAvailable.length - 1]
                : null
            return match?.url ?? m.imageSizes?.allAvailable.slice(-1)[0].url
        }) ?? []


    return (
        <ConfigProvider
            theme={{ components: { Carousel: { arrowSize: 50 } } }}
        >
            <main>
                <Menu minified />
                <div className={styles.projectContainer}>
                    <div className={styles.projectImages}>
                        <Carousel arrows>
                            {images.map((url) => (
                                <div key={url}>
                                    <img alt="MOOD studio project" src={url} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className={styles.projectDescription}>
                        {textList.map((mod, i) => (
                            <div key={i} dangerouslySetInnerHTML={{ __html: mod.text || '' }} />
                        ))}
                        {<div>
                            <Carousel arrows autoplay={true} autoplaySpeed={4000} >
                                {isometric.map((url) => (
                                    <div key={url} className={styles.isometricContainer}>
                                        <img width={700} alt="MOOD studio project" src={url}
                                             style={{
                                                 maxWidth: '100%', // so it never overflows its container
                                                 height: 'auto',
                                             }}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>}
                        {/*<div className={styles.tagContainer}>*/}
                        {/*    {tagTitles.map((tag, i) => (*/}
                        {/*        <div key={i} className={styles.tag}>*/}
                        {/*            {tag}*/}
                        {/*        </div>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                        <div className={styles.projectsContainer}>
                            {projects.map((p) => (
                                <Link
                                    key={p.slug}
                                    href={`/project/${p.slug}`}
                                    className={styles.projectOverview}
                                    style={{ backgroundImage: `url(${p.covers.size_original_webp.url})` }}
                                >
                                    <div>{p.name}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </ConfigProvider>
    )
}

export default Project
