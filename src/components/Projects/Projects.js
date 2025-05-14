import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const experiences = [
    {
      position: "Business Operations Associate",
      company: "Hi‑Tech Engineering, Aurangabad",
      duration: "Oct 2024 – Feb 2025",
      achievements: [
        "Led market research and synthesized customer feedback to uncover two major product gaps, driving a roadmap that boosted potential addressable market by 15%.",
        "Partnered with engineering, design, and marketing teams to orchestrate three product launches—coordinating cross‑functional sprints, user acceptance testing, and go‑to‑market checklists.",
        "Authored comprehensive product documentation (user guides, feature briefs, sales decks), equipping the sales force to accelerate demos and shorten the sales cycle by 10%."
      ]
    },
    {
      position: "Product Intern",
      company: "ipshopy.com",
      duration: "Feb 2025 – Present",
      achievements: [
        "Designed and executed customer behavior surveys and usability tests, pinpointing three critical UX gaps in the checkout flow and recommending fixes that elevated conversion potential by 20%.",
        "Contributed to the MVP build of a mono‑product offering for a niche segment—drafting requirements, wireframes, and acceptance criteria that enabled a 20% pilot conversion rate.",
        "Compiled and presented weekly stakeholder reports on retention, engagement, and feature adoption, informing prioritization in the product backlog and guiding executive decision‑making."
      ]
    },
    {
      position: "Design & Marketing Intern",
      company: "Moksha Solutions",
      duration: "May 2025 – Present",
      achievements: [
        "Created on‑brand marketing collateral (brochures, social media assets) in Figma, standardizing visual language across channels and reducing asset turnaround time by 30%.",
        "Assisted in end‑to‑end social media campaign planning and execution on LinkedIn and Instagram, driving a 25% uplift in engagement and growing followership by 1,200 users in three months.",
        "Conducted in‑depth market segmentation research to refine content strategy—collaborating with marketing and design teams to craft messaging that improved MQL (Marketing Qualified Lead) rates by 18%."
      ]
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "left" }}>
           <strong className="purple">My Experience </strong>
        </h1>
        <p style={{ color: "grey", textAlign: "left" }}>
          Here's an overview of my professional journey and key achievements.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {experiences.map((exp, index) => (
            <Col md={12} className="experience-card" key={index}>
              <div className="experience-card-inner">
                <div className="experience-header">
                  <h3 className="position-title purple">{exp.position}</h3>
                  <div className="company-info">
                    <h4 className="company-name">{exp.company}</h4>
                    <p className="duration purple">— {exp.duration}</p>
                  </div>
                </div>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
