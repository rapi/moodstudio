// Projects.tsx
import React, { FC } from "react";
import styles from "./Projects.module.css";
import Footer from "../../components/Footer/Footer";
import Overview from "../../components/Overview/Overview";
import Menu from "../../components/Menu/Menu";

interface ProjectsProps {
    filter: string;
}

const Projects: FC<ProjectsProps> = ({ filter }) => {
    return (
        <main className={styles.home}>
            <Menu minified />
            <Overview filter={filter} />
            <Footer />
        </main>
    );
};

export default Projects;
