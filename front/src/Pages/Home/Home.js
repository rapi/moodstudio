import React from "react";
import Community from "../../components/Community/Community";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Origin from "../../components/Origin/Origin";
import Overview from "../../components/Overview/Overview";
import Roadmap from "../../components/Roadmap/Roadmap";
import Traits from "../../components/Traits/Traits";
import "./Home.css";
import HomeHeader from "./HomeHeader";

export default function Home() {
  return (
    <>
      <main id="home">

        <HomeHeader><Header /></HomeHeader>
        <Origin />
        <Overview />
        <Roadmap />
        <Traits />
        <Faq />
        <Community />
        <Footer />
      </main>
    </>
  );
}
