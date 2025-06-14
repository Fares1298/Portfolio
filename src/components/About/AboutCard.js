import React from "react";
import Card from "react-bootstrap/Card";
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaTools, FaRocket, FaSeedling } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view custom-about-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1 className="purple">
            Hello all—<span className="purple">Fares Shaikh</span> here.
          </h1>
          <p className="intro-text">
            I translate insights into action, turning user pain points into product wins.
          </p>

          <div className="about-section">
            <p className="section-title">
              <FaMapMarkerAlt className="section-icon" /> Location & Current Role:
            </p>
            <div className="content-item">
              <span className="item-title">Location:</span>
              <span className="item-text">Aurangabad, Maharashtra, India</span>
            </div>
            <div className="content-item">
              <span className="item-title">Current Role:</span>
              <span className="item-text">Design and Marketing Intern at Moksha Solutions, where I'm crafting engaging visuals and driving go‑to‑market campaigns.</span>
            </div>
          </div>

          <div className="about-section">
            <p className="section-title">
              <FaGraduationCap className="section-icon" /> Education:
            </p>
            <div className="content-item">
              <span className="item-title">Bachelor of Technology:</span>
              <span className="item-text">Computer Science and Engineering</span>
            </div>
            <div className="content-item">
              <span className="item-title">Diploma in Computer Engineering:</span>
              <span className="item-text">Polytechnic</span>
            </div>
          </div>

          <div className="about-section">
            <p className="section-title">
              <FaTools className="section-icon" /> What I'm Building:
            </p>
            <div className="content-item">
              <span className="item-title">SurfTheTurf:</span>
              <span className="item-text">A turf‑booking web app (Django + PostgreSQL) that lets casual and professional players find, book, and manage slots seamlessly.</span>
            </div>
            <div className="content-item">
              <span className="item-title">Part‑Time Freelancing:</span>
              <span className="item-text">Collaborating with startups on branding, UX/UI mockups, and marketing strategy.</span>
            </div>
          </div>

          <div className="about-section">
            <p className="section-title">
              <FaRocket className="section-icon" /> My Product Passion:
            </p>
            <div className="content-item">
              <span className="item-title">User Research & Roadmaps:</span>
              <span className="item-text">I love digging into user pain points, running A/B tests, and mapping out features that move the needle.</span>
            </div>
            <div className="content-item">
              <span className="item-title">Data‑Driven Decisions:</span>
              <span className="item-text">From analytics dashboards to competitive analyses, I use data to prioritize and iterate fast.</span>
            </div>
            <div className="content-item">
              <span className="item-title">Cross‑Functional Collaboration:</span>
              <span className="item-text">Whether it's syncing with designers, engineers, or stakeholders, I thrive on clear communication and shared vision.</span>
            </div>
          </div>

          <div className="about-section">
            <p className="section-title">
              <FaSeedling className="section-icon" /> Beyond the Desk:
            </p>
            <div className="content-item">
              <span className="item-title">Sports:</span>
              <span className="item-text">🏑 Playing and organizing local sports meetups</span>
            </div>
            <div className="content-item">
              <span className="item-title">Writing:</span>
              <span className="item-text">✍️ Product management tips and Gen‑AI trends</span>
            </div>
            <div className="content-item">
              <span className="item-title">Creative:</span>
              <span className="item-text">📖 Crafting and sharing my own poetry</span>
            </div>
          </div>

          <p style={{ color: "var(--primary-color)", marginTop: "1rem", textAlign: "left" }}>
            "Building the right thing is as important as building the thing right."
          </p>
          <footer className="blockquote-footer" style={{ textAlign: "left" }}>Fares</footer>

          <p style={{ marginTop: "1rem", textAlign: "left" }}>
            Feel free to connect—I'm always up for a chat about product challenges, turf‑booking quirks, or the best roadside chai spots in Aurangabad!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
