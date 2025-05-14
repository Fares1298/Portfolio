import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an aspiring <b className="purple">Product Manager</b> with a passion for building impactful digital experiences.
              <br />
              <br />
              I enjoy working at the intersection of
              <i>
                <b className="purple"> user needs, technology, and business goals</b>
              </i>, especially in areas like
              <i>
                <b className="purple"> sports tech, fintech, and AI-enabled tools</b>.
              </i>
              <br />
              <br />
              My tech stack includes:
              <i>
                <b className="purple"> React.js, Node.js, Express.js, PostgreSQL</b>
              </i> and I've also worked with platforms like
              <i>
                <b className="purple"> Webflow, Bubble.io, Firebase, and Airtable</b>.
              </i>
              <br />
              <br />
              I've built a <b className="purple">turf booking platform</b> and led UI/UX for an e-commerce redesign. I love solving real problems, running experiments, and making data-driven product decisions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Fares1298"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* Twitter icon commented out
              <li className="social-icons">
                <a
                  href="https://twitter.com/" // optional
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fares-shaikh-a6180a208/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.fares____" // optional
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
