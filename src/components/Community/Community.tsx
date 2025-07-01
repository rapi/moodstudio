import React, { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "./Community.module.css";



const Community: FC = () => (
    <section className={styles.community}>
      <Container className={styles.content}>
            <div
                className={
                    `${styles.gridSection} `
                }
            >
              <img src='/contact.jpg' width={600} alt="Mood team" />
              <div className={styles.text}>
                  <h1>About MOOD STUDIO</h1>
                    <br/>
                  <p>At the core of our work is collaboration.</p>
                  <p>We approach each project as a unified team — combining technical precision with artistic vision.</p>
                  <p>From the first idea to the final detail, we closely coordinate every stage of the process.</p>
                  <p>Our workflow is built on open communication, careful planning, and a shared dedication to quality.</p>
                  <p>This synergy allows us to create harmonious, functional, and aesthetically refined spaces</p>
                  <p>that reflect our clients’ values and lifestyles.</p>

<br></br>
<br></br>
                  <p><b>Roman Picunov</b> — Interior & Landscape Designer</p>
                  <p>Project Manager & Lead Designer</p>
                  <p>Responsible for technical solutions and project coordination from the first sketch to final hand-over.</p>
                  <br></br>

                  <p><b>Iulia Picunova</b> — Interior & Landscape Designer</p>
                  <p>Art Director & Lead Designer</p>
                  <p>Responsible for the visual style, accents, and creative direction of each project.</p>
              </div>
            </div>
      </Container>
    </section>
);

export default Community;
