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
                image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/7bd92e147985525.62cd5c5777afa.jpg"
                title="Public Landscape"
                link="/public-landscape"
            />

              <Card
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/52e390203617333.669a20427093a.jpg"
                  title="Commercial Interior"
                  link="/commercial-interior"
              />
              <Card
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/4531b7187587799.66d223c004b6e.jpg"
                  title="Residential Landscape"
                  link="/residential-landscape"
              />
              <Card
                  image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/691ef5191421451.65cb657b0c0be.jpg"
                  title="Residential Interior"
                  link="/residential-interior"
              />
          </CardContainer>
        </div>
        <Footer />
      </main>
  );
}