// Footer.tsx
import React from "react";
import styles from "./Footer.module.css";
import { Container } from "react-bootstrap";
import {BehanceOutlined, FacebookOutlined, InstagramOutlined} from "@ant-design/icons";

const Footer: React.FC = () => {
  return (
      <footer className={styles.footer}>
        <Container>
          <div className={styles.content}>
            <div className="logo">
              <img src="/logo.svg" alt="mood logo" height={100} />
            </div>
            <p className={styles.footerText}>
                <a target="_blank" href="https://www.behance.net/mood_design"><BehanceOutlined  /></a>
               <a target="_blank" href="https://www.facebook.com/mood.garden.md"> <FacebookOutlined  /></a>
               <a target="_blank" href="https://www.instagram.com/mood.dsgn.studio/"> <InstagramOutlined  /></a>
            </p>
          </div>
        </Container>
      </footer>
  );
};

export default Footer;
