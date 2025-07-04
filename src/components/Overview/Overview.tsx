import React, { FC, useEffect, useState } from "react";
import CardContainer from "../Card/CardContainer";
import Card from "../Card/Card";
import { Loading } from "../Loading/Loading";

interface Field {
    label: string;
}

interface Tag {
    title: string;
}

interface Covers {
    size_original_webp: {
        url: string;
    };
}

interface Project {
    fields: Field[];
    tags: Tag[];
    covers: Covers;
    name: string;
    slug: string;
}

interface OverviewProps {
    filter?: string;
}

const Overview: FC<OverviewProps> = ({ filter }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    console.log(filter)
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        const fetchProjects = async () => {
            try {

                const res = await fetch("/api/behance/projects");
                const data: Project[] = await res.json();
                console.log(filter,data)

                const filtered = filter
                    ? data.filter(project =>
                        project.tags.some(field => field.title.toUpperCase().includes(filter.toUpperCase()))
                    )
                    : data;
                setProjects(filtered);
            } catch (error) {
                console.error("Failed to fetch projects", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, [filter]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="overview">
            <CardContainer>
                {projects.map(project => (
                    <Card
                        key={project.slug}
                        image={project.covers.size_original_webp.url}
                        title={project.name}
                        link={`/project/${project.slug}`}
                    />
                ))}
            </CardContainer>
        </div>
    );
};

export default Overview;
