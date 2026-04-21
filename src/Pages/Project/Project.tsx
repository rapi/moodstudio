// Project.tsx
import React, { useEffect, useState, useMemo } from 'react'
import styles from './Project.module.css'
import Footer from '@/components/Footer/Footer'
import Menu from '@/components/Menu/Menu'
import { Loading } from '@/components/Loading/Loading'
import { Carousel, ConfigProvider } from 'antd'
import Link from 'next/link'
import { useParams } from 'next/navigation'


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
    const [isLoading, setLoading] = useState(true)
    const [project, setProject] = useState<ProjectType | null>(null)
    const [projects, setProjects] = useState<ProjectType[]>([])

    useEffect(() => {
        setLoading(true)
        fetch('/api/behance/projects')
            .then((res) => res.json() as Promise<ProjectType[]>)
            .then((data) => {
                const found = data.find((p) => p.slug === slug)
                if (found) {
                    setProject(found)
                    setProjects(data.filter((p) => p.slug !== slug).slice(0, 4))
                }
            })
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [slug])

    const textList = useMemo(() => project?.allModules?.filter((m) => m.text) ?? [], [project])
    
    const images = useMemo(() => {
        if (!project?.allModules) return []
        return project.allModules
            .map((m) => m.imageSizes ? { components: [{ imageSizes: m.imageSizes }], ...m } : m)
            .filter((m) => m.components)
            .flatMap((m) =>
                m.components!.map((c) => {
                    const available = c.imageSizes.allAvailable;
                    const match = available.find((img) => img.height > 1200) || available[available.length - 1];
                    return match.url;
                })
            )
    }, [project])

    const isometric = useMemo(() => {
        if (!project?.allModules) return []
        return project.allModules
            .filter((m) => m.tags?.includes('isometric'))
            .flatMap((m) => {
                const available = m.imageSizes?.allAvailable;
                if (!available) return []
                const sorted = [...available].sort((a, b) => a.height - b.height)
                return sorted[Math.min(10, sorted.length - 1)].url
            })
    }, [project])

    if (isLoading || !project) return <Loading />

    return (
        <ConfigProvider
            theme={{ components: { Carousel: { arrowSize: 50 } } }}
        >
            <main>
                <Menu minified />
                <div className={styles.projectContainer}>

                    <div className={styles.projectLeft}>

                    <div className={styles.projectDescription}>
                        {textList.map((mod, i) => (
                            <div key={i} dangerouslySetInnerHTML={{ __html: mod.text || '' }} />
                        ))}

                        {isometric.length > 0 && (
                            <div >
                                <Carousel arrows autoplay={true} autoplaySpeed={4000}  dots={false} infinite={true} draggable>
                                    {isometric.map((url) => (
                                        <div key={url} className={styles.isometricContainer}>
                                            <img 
                                                alt="MOOD studio project" 
                                                src={url}
                                                style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain' }}
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        )}
                    </div>
                    <div className={styles.projectsContainer}>
                        <div>
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
                    <div className={styles.projectImages}>
                        <Carousel dots={false} draggable infinite={true} arrows>
                            {images.map((url) => (
                              <div className={styles.imageContainer} key={url}>
                                  <img 
                                      alt="MOOD studio project" 
                                      src={url} 
                                      style={{ maxWidth: '100%', maxHeight: '100vh', objectFit: 'contain' }}
                                  />
                              </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <Footer />
            </main>
        </ConfigProvider>
    )
}

export default Project
