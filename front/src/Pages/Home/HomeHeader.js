import React from "react";
import "./HomeHeader.css";
import {  Container } from "react-bootstrap";

export default function HomeHeader({children}) {


  return (
    <div id="header">
      <Container>
        <div className="content">
          {children}
          <div className="centerText">
            <h1 className="title">
              We are
              <br /> more than art
            </h1>
            <h3 className="desc">MOOD Studio</h3>
            <hr className="vertical-line" />
          </div>
        </div>
      </Container>
    </div>
  );
}
