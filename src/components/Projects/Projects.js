import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import grilli from "../../Assets/Projects/grilli.png";
import bmicalculator from "../../Assets/Projects/bmi-calculator.png";
import CineScout from "../../Assets/Projects/CineScout.png";
import awsproject from "../../Assets/Projects/aws.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grilli}
              isBlog={false}
              title="Grilli"
              description="I designed and implemented a responsive website that provides a seamless user experience across all devices and screen sizes. By utilizing HTML, CSS, and JavaScript, I focused on creating an adaptable and intuitive interface, ensuring usability and performance were maintained across devices for an optimal user experience."
              ghLink="https://github.com/mzmhmd/grilli"
              demoLink="https://mzmhmd.github.io/grilli/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CineScout}
              isBlog={false}
              title="CineScout"
              description="I developed a responsive React application that allows users to search for movies, view detailed information, and switch between dark and light modes. With React, I ensured a smooth, user-friendly interface with optimized performance and usability across devices, enhancing the overall experience for movie enthusiasts."
              ghLink="https://github.com/mzmhmd/CineScout"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={awsproject}
              isBlog={false}
              title="Jenkins EC2 Setup"
              description="I configured and deployed Jenkins on an EC2 instance, customizing its port to facilitate continuous integration and automation. By leveraging AWS, I established a reliable and scalable environment, ensuring efficient build processes and deployment pipelines for smoother operations and faster development cycles."
              ghLink="https://github.com/mzmhmd/devops-projects/tree/main/Installing%20Jenkins%20on%20EC2%20with%20custom%20port"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmicalculator}
              isBlog={false}
              title="BMI Calculator"
              description="
I developed a user-friendly BMI Calculator application that provides accurate health metrics and personalized insights based on user inputs for weight and height. Using Flutter, I ensured the app delivers a smooth and responsive experience across various platforms, offering valuable health information to users."
              ghLink="https://github.com/mzmhmd/flutter-bmi-calculator"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
