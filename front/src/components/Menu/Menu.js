import React, { useEffect, useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import useIsMobile from "../Mobile/isMobile";
export default function Menu({ minified }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const isMobile = useIsMobile();
  const isMinified = minified || isMobile;
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
  const isMenuShown = isToggle || !isMinified;
  return (
    <>
      {isMinified && (
        <div
          className={"toggleBtn " + (isToggle ? "active" : "")}
          onClick={() => setIsToggle(!isToggle)}
        >
          Menu {isToggle ? <CloseOutlined /> : <MenuOutlined />}
        </div>
      )}

      <div
        id="menu"
        className={(isSticky ? "sticky" : "") + (isMinified ? " minified" : "")}
      >
        {isMenuShown && (
          <>
            <Link to="/">
              <button className="btn btn-mint">Home</button>
            </Link>
            <Link to="/landscape">
              <button className="btn btn-mint">Landscape portfolio</button>
            </Link>
            <Link to="/interior">
              <button className="btn btn-mint">Interior portfolio</button>
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
