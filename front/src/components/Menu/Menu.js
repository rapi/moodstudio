import React, { useEffect, useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
export default function Menu({ minified }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isMenuShown = isToggle || !minified;
  return (
    <>
      {minified && (
        <div
          className={"toggleBtn " + (isToggle ? "active" : "")}
          onClick={() => setIsToggle(!isToggle)}
        >
          Menu {isToggle ? <CloseOutlined /> : <MenuOutlined />}
        </div>
      )}

      <div
        id="menu"
        className={(isSticky ? "sticky" : "") + (minified ? "minified" : "")}
      >
        {isMenuShown && (
          <>
            <Link to="/landscape">
              <button className="btn btn-mint">Landscape portfolio</button>
            </Link>
            <Link to="/interior">
              <button className="btn btn-mint">Interior portfolio</button>
            </Link>
            <Link to="/projects">
              <button className="btn btn-mint">Price calculator</button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-mint">Contacts</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
