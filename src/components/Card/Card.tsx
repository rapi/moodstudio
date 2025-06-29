// Card.tsx
import React, { useState, FC, CSSProperties } from "react";
import styles from "./Card.module.css";
import Link from "next/link";

interface CardProps {
    image: string;
    title: string;
    link: string;
}

const Card: FC<CardProps> = ({ image, title, link }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const overlayOpacity = isHovered ? "0" : "0.2";
    const style: CSSProperties = {
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, ${overlayOpacity}),
      rgba(0, 0, 0, ${overlayOpacity})
    ), url(${image})`,
    };

    return (
        <Link
            href={link}
            className={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={style}
            target={link.startsWith("http") ? "_blank" : "_self"}
        >
            <div className={styles.cardTitle}>{title}</div>
        </Link>
    );
};

export default Card;
