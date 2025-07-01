// Menu.tsx
import React, { FC, useEffect, useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import useIsMobile from "../Mobile/isMobile";
import Link from "next/link";
import styles from "./Menu.module.css";

interface MenuProps {
  minified: boolean;
}

const Menu: FC<MenuProps> = ({ minified }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const isMobile = useIsMobile();
  const isMinified = minified || isMobile;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight - 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMenuShown = isToggle || !isMinified;

  return (
      <>
        {isMinified && (
            <div
                className={`${styles.toggleBtn} ${isToggle ? styles.active : ""}`}
                onClick={() => setIsToggle(!isToggle)}
            >
              Menu{" "}
              <span>
            {isToggle ? <CloseOutlined /> : <MenuOutlined />}
          </span>
            </div>
        )}

        <div
            className={[
              styles.menu,
              isSticky ? styles.sticky : "",
              isMinified ? styles.minified : ""
            ].join(" ").trim()}
        >
          {isMenuShown && (
              <>
                <Link href="/">
                  <button className="btn btn-mint">Home</button>
                </Link>
                <Link href="/public-landscape">
                  <button className="btn btn-mint">Landscape Residential</button>
                </Link>
                <Link href="/public-landscape">
                  <button className="btn btn-mint">Landscape Public</button>
                </Link>
                <Link href="/commertial-interior">
                  <button className="btn btn-mint">Interior Commertial</button>
                </Link>
                <Link href="/residential-interior">
                  <button className="btn btn-mint">Interior Residential</button>
                </Link>
                <Link href="/contact">
                  <button className="btn btn-mint">Contacts</button>
                </Link>
              </>
          )}
        </div>
      </>
  );
};

export default Menu;
