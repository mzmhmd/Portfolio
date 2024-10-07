import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Zakeer Muhammad </span>
            from <span className="purple"> Kalutara, Sri Lanka.</span>
            <br />
            I am a Third-year Computing and Information Systems undergraduate passionate about full-stack web development, DevOps, and cloud engineering. Committed to building innovative solutions through collaboration and continuous learning.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mentoring Peers
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stay hungry, stay foolish."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
