import React from "react";
import Header from "../../components/Header/Header";
import "./Projects.css";
import Footer from "../../components/Footer/Footer";
import Overview from "../../components/Overview/Overview";

export default function Projects() {
  return (
    <>
      <main id="home">
        <Header minified/>
          <Overview />

        <Footer />

      </main>
    </>
  );
}