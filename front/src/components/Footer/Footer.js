import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer id="footer">
      <Container>
        <div className="content">
          <div className="logo">
            <img src="/logo.svg" alt="mood logo" height={100} />
          </div>
          <p className="footer-text">All Rights Reserved 2025.</p>
        </div>
      </Container>
    </footer>
  );
}
