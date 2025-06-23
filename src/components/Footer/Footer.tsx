// Footer.tsx
import React from "react";
import styles from "./Footer.module.css";
import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
      <footer className={styles.footer}>
        <Container>
          <div className={styles.content}>
            <div className="logo">
              <img src="/logo.svg" alt="mood logo" height={100} />
            </div>
            <p className={styles.footerText}>
              All Rights Reserved {new Date().getFullYear()}.
            </p>
          </div>
        </Container>
      </footer>
  );
};

export default Footer;
