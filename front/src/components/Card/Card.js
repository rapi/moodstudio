import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
export default function Card({ image, title, link }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={{ pathname: link }}
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,${isHovered ? "0" : "0.2"}), rgba(0,0,0,${isHovered ? "0" : "0.2"})), url(${image})`,
      }}
      target={link.startsWith("http") ? "_blank" : "_self"}
    >
      <div className="card-title">{title}</div>
    </Link>
  );
}
