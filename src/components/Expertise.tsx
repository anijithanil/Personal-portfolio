import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJava
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React Native",
  "TypeScript",
  "JavaScript",
  "Redux Toolkit",
  "Redux Saga",
  "SQL",
  "PostgreSQL",
  "Postman",
];

const labelsSecond = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Axios / Fetch",
  "Git",
  "GitHub",
  "Redux / Context API",
];

const labelsThird = [
  "Java",
  "Spring Boot",
  "JDBC",
  "REST APIs",
  "MySQL / SQL",
  "Object-Oriented Programming (OOP)",
  "Postman",
  "Git",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>React Native App Development</h3>
            <p>
              I have built and maintained mobile applications from scratch using
              modern technologies such as React Native and TypeScript. I have
              strong proficiency in the SDLC process, state management, REST API
              integration, and developing scalable, high-performance mobile
              applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>React Web Development</h3>
            <p>
              I design and develop responsive web applications using React.js,
              focusing on reusable components, state management, and seamless
              API integration. I ensure clean architecture, performance
              optimization, and maintainable code to deliver scalable and
              user-friendly web solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faJava} size="3x" />
            <h3>Java Backend Development</h3>
            <p>
              I develop backend applications using Java and Spring Boot,
              focusing on building secure, scalable, and maintainable RESTful
              APIs. I have hands-on experience with JDBC for database
              connectivity, implementing business logic, and following clean
              architecture principles to ensure efficient and reliable
              server-side solutions.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
