import React, {FC, useEffect, useState} from "react";
import "./Menu.css";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import useIsMobile from "../Mobile/isMobile";
import Link from "next/link";
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
            <Link href="/">
              <button className="btn btn-mint">Home</button>
            </Link>
            <Link href="/landscape">
              <button className="btn btn-mint">Landscape</button>
            </Link>
            <Link href="/interior">
              <button className="btn btn-mint">Interior</button>
            </Link>
            <Link href="/contact">
              <button className="btn btn-mint">Contacts</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
export default Menu;