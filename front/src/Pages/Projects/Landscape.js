import React from "react";
import "./Projects.css";
import Footer from "../../components/Footer/Footer";
import Overview from "../../components/Overview/Overview";
import Menu from "../../components/Menu/Menu";

export default function Landscape() {
  return (
    <>
      <main id="home">
        <Menu minified />
        <Overview filter="Landscape" />
        <Footer />
      </main>
    </>
  );
}
