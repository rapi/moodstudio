import React, { FC } from "react";
import "./Header.css";
import { Container, Nav } from "react-bootstrap";
import Menu from "../Menu/Menu";
import Link from "next/link";

interface HeaderProps {
  minified: boolean;
}

const Header: FC<HeaderProps> = ({ minified }) => {
  const headerClass = minified ? "header-minified" : "";

  return (
      <div className={headerClass} id="header">
        <Container>
          <div className="content">
            <Nav className="nav">
              <Link href="/" className="nav-link">
                <div className="logo">
                  <img width={100} src="/logo.svg" alt="ROGUE SHARKS" />
                </div>
              </Link>
              {/*<Sidebar setToggle={setToggle} toggleChange={toggleChange}/>*/}
            </Nav>
          </div>
        </Container>
        <Menu minified={minified} />
      </div>
  );
};

export default Header;
