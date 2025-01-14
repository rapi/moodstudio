import React from "react";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Origin from "../../components/Origin/Origin";
import Roadmap from "../../components/Roadmap/Roadmap";
import Traits from "../../components/Traits/Traits";
import "./Home.css";

export default function Home() {
  return (
    <>
      <main id="home">

       <Header />
        <Origin />
        <Roadmap />
        <Traits />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
