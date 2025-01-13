import React from "react";
import Header from "../../components/Header/Header";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import Community from "../../components/Community/Community";

export default function Contact() {
  return (
    <>
      <main id="home">
        <Header minified/>
          <Community />

        <Footer />

      </main>
    </>
  );
}
