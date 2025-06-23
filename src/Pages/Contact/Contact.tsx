// Contact.tsx
import React from "react";
import styles from "./Contact.module.css";
import Footer from "../../components/Footer/Footer";
import Community from "../../components/Community/Community";
import Menu from "../../components/Menu/Menu";

export default function Contact() {
    return (
        <main className={styles.home}>
            <Menu minified />
            <Community />
            <Footer />
        </main>
    );
}
