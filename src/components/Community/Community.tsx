import React, { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "./Community.module.css";

const members = [
  { name: "Roma Pikunov", image: "/roman.jpg", info: "Some information" },
  { name: "Julia Lavreka", image: "/julia.jpg", info: "Some information" },
];

const Community: FC = () => (
    <section className={styles.community}>
      <Container className={styles.content}>
        {members.map((member, idx) => (
            <div
                key={member.name}
                className={
                    `${styles.gridSection} ` +
                    (idx % 2 === 1 ? styles.reverse : "")
                }
            >
              <img src={member.image} alt={member.name} />
              <div className={styles.text}>
                <h1 className={styles.title}>{member.name}</h1>
                <p className={styles.desc}>{member.info}</p>
                <div className={styles.btns}>
                  <button className={styles.btnFollow}>
                    Contact
                  </button>
                </div>
              </div>
            </div>
        ))}
      </Container>
    </section>
);

export default Community;
