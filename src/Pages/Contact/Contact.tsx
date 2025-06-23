import React from "react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import Community from "../../components/Community/Community";
import Menu from "../../components/Menu/Menu";

export default function Contact() {
  return (
    <>
      <main id="home">
        <Menu minified />
        <Community />

        <Footer />
      </main>
    </>
  );
}
