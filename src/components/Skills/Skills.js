import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiPostgresql,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiPostman,
  SiAuth0,
  SiWebflow,
  SiZapier,
  SiStrapi,
  SiAirtable,
  SiVisualstudiocode,
  SiReplit,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { HiTemplate, HiHeart } from "react-icons/hi";

function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        {
          name: "React.js",
          icon: <DiReact />,
          level: 90,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          level: 85,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          level: 88,
        },
        {
          name: "HTML5",
          icon: <DiHtml5 />,
          level: 95,
        },
        {
          name: "CSS3",
          icon: <DiCss3 />,
          level: 90,
        },
        {
          name: "JavaScript",
          icon: <DiJavascript1 />,
          level: 92,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          level: 85,
        },
      ],
    },
    {
      name: "Backend & APIs",
      skills: [
        {
          name: "Node.js",
          icon: <DiNodejs />,
          level: 88,
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
          level: 85,
        },
        {
          name: "REST APIs",
          icon: <TbApi />,
          level: 90,
        },
      ],
    },
    {
      name: "Database",
      skills: [
        {
          name: "MongoDB",
          icon: <DiMongodb />,
          level: 85,
        },
        {
          name: "PostgreSQL",
          icon: <DiPostgresql />,
          level: 82,
        },
        {
          name: "Airtable",
          icon: <SiAirtable />,
          level: 88,
        },
      ],
    },
    {
      name: "Authentication",
      skills: [
        {
          name: "Firebase Auth",
          icon: <SiFirebase />,
          level: 85,
        },
        {
          name: "Auth0",
          icon: <SiAuth0 />,
          level: 80,
        },
      ],
    },
    {
      name: "Dev Tools",
      skills: [
        {
          name: "Git",
          icon: <DiGit />,
          level: 90,
        },
        {
          name: "VS Code",
          icon: <SiVisualstudiocode />,
          level: 95,
        },
        {
          name: "Postman",
          icon: <SiPostman />,
          level: 88,
        },
      ],
    },
    {
      name: "No-Code Tools",
      skills: [
        {
          name: "Webflow",
          icon: <SiWebflow />,
          level: 85,
        },
        {
          name: "Zapier",
          icon: <SiZapier />,
          level: 82,
        },
        {
          name: "Bubble.io",
          icon: <HiTemplate />,
          level: 80,
        },
        {
          name: "Replit",
          icon: <SiReplit />,
          level: 78,
        },
        {
          name: "Lovable",
          icon: <HiHeart />,
          level: 75,
        },
      ],
    },
    /* CMS & Admin section commented out
    {
      name: "CMS & Admin",
      skills: [
        {
          name: "Strapi",
          icon: <SiStrapi />,
          level: 75,
        },
      ],
    },
    */
  ];

  return (
    <Container fluid className="skills-section">
      <Container>
        <h1 className="section-heading">
          Technical <strong className="purple">Skills</strong>
        </h1>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h2 className="category-heading">{category.name}</h2>
            <Row className="skill-cards-wrapper">
              {category.skills.map((skill, index) => (
                <Col key={index} xs={6} md={4} lg={3} className="skill-card-col">
                  <div className="skill-card">
                    <div className="skill-card-icon">{skill.icon}</div>
                    <h3 className="skill-card-name">{skill.name}</h3>
                    <div className="skill-progress-bg">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default Skills; 