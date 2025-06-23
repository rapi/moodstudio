import React, { useEffect, useState } from 'react'
import './Project.css'
import Footer from '@/components/Footer/Footer'
import Menu from '@/components/Menu/Menu'
import { Loading } from '@/components/Loading/Loading'
import { Carousel, ConfigProvider } from 'antd'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

interface ImageSize {
    height: number
    url: string
}

interface ComponentItem {
    imageSizes: {
        allAvailable: ImageSize[]
    }
}

interface Module {
    text?: string
    components?: ComponentItem[]
}

interface Tag {
    title: string
}

interface ProjectType {
    slug: string
    name: string
    allModules?: Module[]
    tags?: Tag[]
    covers: {
        size_original_webp: {
            url: string
        }
    }
}

const Project: React.FC = () => {
    const params = useParams()
    const slug = params?.id
    const router = useRouter()
    const [isLoading, setLoading] = useState<boolean>(true)
    const [project, setProject] = useState<ProjectType | null>(null)
    const [projects, setProjects] = useState<ProjectType[]>([])

    // Whenever slug changes, start loading
    useEffect(() => {
        setLoading(true)
    }, [slug])

    // Fetch data
    useEffect(() => {
        fetch('/api/behance/projects')
            .then((res) => res.json() as Promise<ProjectType[]>)
            .then((data) => {
                const found = data.find((p) => p.slug === slug)
                if (!found) {
                    router.push('/')
                    return
                }
                setProject(found)
                setProjects(data.filter((p) => p.slug !== slug).slice(0, 4))
            })
            .catch(() => {
                router.push('/')
            })
            .finally(() => setLoading(false))
    }, [slug, router])

    if (isLoading || !project) return <Loading />

    // Extract text modules
    const textList = project.allModules?.filter((m) => m.text) as Module[]

    // Build array of image URLs
    const images =
        project.allModules
            ?.filter((m) => m.components)
            .flatMap((m) =>
                m.components!.flatMap((c) => {
                    // choose first image taller than viewport, or last one otherwise
                    const match = typeof window !== 'undefined'
                        ? c.imageSizes.allAvailable.find((img) => img.height > window.innerHeight)
                        : null
                    return match?.url ?? c.imageSizes.allAvailable.slice(-1)[0].url
                })
            ) ?? []

    // Extract tag titles
    const tagTitles = project.tags?.map((t) => t.title) ?? []

    return (
        <ConfigProvider
            theme={{
                components: {
                    Carousel: {
                        arrowSize: 50,
                    },
                },
            }}
        >
            <main id="home">
                <Menu minified />
                <div className="project-container">
                    <div className="project-images">
                        <Carousel arrows>
                            {images.map((url) => (
                                <div key={url}>
                                    <img alt="MOOD studio project" src={url} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="project-description">
                        {textList.map((mod, i) => (
                            <div
                                key={i}
                                dangerouslySetInnerHTML={{ __html: mod.text || '' }}
                            />
                        ))}
                        <div className="tag-container">
                            {tagTitles.map((tag, i) => (
                                <div key={i} className="tag">
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className="projects-container">
                            {projects.map((p) => (
                                <Link
                                    key={p.slug}
                                    href={`/project/${p.slug}`}
                                    className="project-overview"
                                    style={{
                                        backgroundImage: `url(${p.covers.size_original_webp.url})`,
                                    }}
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
