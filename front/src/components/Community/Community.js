import React from "react";
import "./Community.css";
import { Container } from "react-bootstrap";
import { communityImg } from "../../assets";

export default function Community() {
  return (
    <section id="community">
      <Container>
        <div className="content">
          <div className="grid-section">
            <img src='/roman.jpg' alt="img grid" />
            <div className="text">
              <h1 className="title">Roma Pikunov</h1>
              <h2 className="desc">
                Some information
              </h2>
              <div className="btns">
                <button className="btn btn-follow">Contact</button>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="grid-section">
            <div className="text">
              <h1 className="title">Julia Lavreka</h1>
              <h2 className="desc">
                Some information
              </h2>
              <div className="btns">
                <button className="btn btn-follow">Contact</button>
              </div>
            </div>
            <img src='/julia.jpg' alt="img grid"/>

          </div>
        </div>
      </Container>
    </section>
  );
}
