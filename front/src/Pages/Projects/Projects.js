import React from "react";
import "./Projects.css";
import Footer from "../../components/Footer/Footer";
import Overview from "../../components/Overview/Overview";
import Menu from "../../components/Menu/Menu";

export default function Projects({ filter }) {
  return (
    <>
      <main id="home">
        <Menu minified />
        <Overview filter={filter} />
        <Footer />
      </main>
    </>
  );
}
