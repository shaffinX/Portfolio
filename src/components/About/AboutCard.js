import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shaffin Imam </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br /> I am a student pursuing Bachelor's in Computer
            Science at FAST NUCES Islamabad.
            <br />
            Additionally I do FreeLancing on FIVERR and Upwork.
            <br />
            <br />
            Apart from Programming, some of my hobbies are!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing scteches and digital cartoons
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphics Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Theoratical Astro-Physics and Quantum Mechanics.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Imagination is more important than knowledge. knowledge is limited. Imagination encircles the world."{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
