import React from "react";
import "./Header.css";
import {  hamburger, closeburger } from "../../assets";
import {Container, Nav} from "react-bootstrap";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";

export default function Header({minified}) {
  const ToggleSwitch = styled.div`
    .toggleBtn {
      display: none;
    }   

    @media (max-width: 768px) {
      .toggleBtn {
        display: unset;
        padding-right: 1rem;
        transition: all 0.3s ease;
        z-index: 3;
      }
      .logo {
        z-index: -2;
      }
      .toggleBtn:hover {
        cursor: pointer;
      }
      .btns {
        display: none;
      }
    }
  `;

  const [toggle, setToggle] = React.useState(false);
  const toggleChange = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  const headerClass = minified ? "header-minified" : "";
  return (
      <div className={headerClass} id="header">
        <Container>
          <div className="content">
            <Nav className="nav">
              <Link to="/">
                <div className="logo">
                  <img width={100} src='/logo.svg' alt="ROGUE SHARKS"/>
                </div>
              </Link>

              <ToggleSwitch>
                <div className="toggleBtn">
                  {!toggle ? (
                      <img src={hamburger} alt="toggle" onClick={toggleChange}/>
                  ) : (
                      <img src={closeburger} alt="toggle" onClick={toggleChange}/>
                  )}
                </div>
                <div className="btns">
                  <button className="btn btn-mint">About MOOD Studio</button>
                  <Link to="/projects">
                    <button className="btn btn-mint">Landscape portfolio</button>
                  </Link>
                  <Link to="/projects"><button className="btn btn-mint">Interior portfolio</button></Link>
                  <Link to="/projects"><button className="btn btn-mint">Price calculator</button></Link>
                  <Link to="/contact"><button className="btn btn-mint">Contacts</button></Link>
                </div>
              </ToggleSwitch>
              {toggle && (
                  <Sidebar setToggle={setToggle} toggleChange={toggleChange}/>
              )}
            </Nav>
            <div className="centerText">
              <h1 className="title">
                We are
                <br/> more than art
              </h1>
              <h3 className="desc">MOOD Studio</h3>
              <hr className="vertical-line"/>
            </div>
          </div>
        </Container>
      </div>
  );
}
