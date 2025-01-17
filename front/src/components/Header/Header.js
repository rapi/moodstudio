import React from "react";
import "./Header.css";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";

export default function Header({ minified }) {
  const headerClass = minified ? "header-minified" : "";
  return (
    <div className={headerClass} id="header">
      <Container>
        <div className="content">
          <Nav className="nav">
            <Link to="/">
              <div className="logo">
                <img width={100} src="/logo.svg" alt="ROGUE SHARKS" />
              </div>
            </Link>

            {/*<Sidebar setToggle={setToggle} toggleChange={toggleChange}/>*/}
          </Nav>
        </div>
      </Container>
      <Menu minified={false} />
    </div>
  );
}
