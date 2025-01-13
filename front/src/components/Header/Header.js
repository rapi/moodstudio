import React from "react";
import "./Header.css";
import {  hamburger, closeburger } from "../../assets";
import { Nav } from "react-bootstrap";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";

export default function Header() {
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

  return (

          <Nav className="nav">
            <Link to="/">
              <div className="logo">
                <img width={100} src='/logo.svg' alt="ROGUE SHARKS" />
              </div>
            </Link>

            <ToggleSwitch>
              <div className="toggleBtn">
                {!toggle ? (
                  <img src={hamburger} alt="toggle" onClick={toggleChange} />
                ) : (
                  <img src={closeburger} alt="toggle" onClick={toggleChange} />
                )}
              </div>
              <div className="btns">
                <button className="btn btn-mint">About MOOD Studio</button>
                <Link to="/projects"><button className="btn btn-mint">Landscape portfolio</button></Link>
                <button className="btn btn-mint">Interior portfolio</button>
                <button className="btn btn-mint">Price calculator</button>
                <button className="btn btn-mint">Contacts</button>
              </div>
            </ToggleSwitch>
            {toggle && (
              <Sidebar setToggle={setToggle} toggleChange={toggleChange} />
            )}
          </Nav>

  );
}
