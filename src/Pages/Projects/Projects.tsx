import React, { FC } from "react";
import "./Projects.css";
import Footer from "../../components/Footer/Footer";
import Overview from "../../components/Overview/Overview";
import Menu from "../../components/Menu/Menu";

interface ProjectsProps {
    filter: string;
}

const Projects: FC<ProjectsProps> = ({ filter }) => {
    return (
        <>
            <main id="home">
                <Menu minified />
                <Overview filter={filter} />
                <Footer />
            </main>
        </>
    );
};

export default Projects;
