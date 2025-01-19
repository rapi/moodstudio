import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";
import Card from "../../components/Card/Card";
import CardContainer from "../../components/Card/CardContainer";

export default function Home() {
  return (
    <>
      <main id="home">
        <Header />
        <CardContainer>
          <Card
            image="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/4531b7187587799.66d223c004b6e.jpg"
            title="Landscape"
            link="/landscape"
          />
          <Card
            image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/691ef5191421451.65cb657b0c0be.jpg"
            title="Interior"
            link="/interior"
          />
        </CardContainer>

        <Footer />
      </main>
    </>
  );
}
