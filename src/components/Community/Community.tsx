// Community.tsx
import React, { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "./Community.module.css";

const Community: FC = () => {
  return (
      <section className={styles.community}>
        <Container>
          <div className={styles.content}>
            <div className={styles.gridSection}>
              <img src="/roman.jpg" alt="Roma Pikunov" />
              <div className={styles.text}>
                <h1 className={styles.title}>Roma Pikunov</h1>
                <h2 className={styles.desc}>Some information</h2>
                <div className={styles.btns}>
                  <button className="btn btn-follow">Contact</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.gridSection}>
              <div className={styles.text}>
                <h1 className={styles.title}>Julia Lavreka</h1>
                <h2 className={styles.desc}>Some information</h2>
                <div className={styles.btns}>
                  <button className="btn btn-follow">Contact</button>
                </div>
              </div>
              <img src="/julia.jpg" alt="Julia Lavreka" />
            </div>
          </div>
        </Container>
      </section>
  );
};

export default Community;
