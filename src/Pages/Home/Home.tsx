import React from "react";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import CardContainer from "../../components/Card/CardContainer";
import Header from "@/components/Header/Header";
import styles from "./Home.module.css";

export default function Home() {
  return (
      <main className={styles.home}>
        <Header minified={false} />
        <div className={styles.customContainer}>
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
        </div>
        <Footer />
      </main>
  );
}