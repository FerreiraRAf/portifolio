// Css
import './Skills.css'

//Assets
import html from "./assets/html.png"
import React from "./assets/React.png"
import Css from "./assets/css-3.png"
import Javascript from "./assets/JS.png"
import Java from "./assets/Java.png"
import SpringBoot from "./assets/spring-boot.png"
import MySql from "./assets/mysql.png"


function Skills() {

  return (
    <div className="skills-section">
      <h1>Skills</h1>

      <div className="skills-container">

        <div className="skill-card">
          <h2>Front-end</h2>
          <ul>
            <li><img src={React} alt="React" />React</li>
            <li><img src={html} alt="HTML" />HTML</li>
            <li><img src={Css} alt="CSS" />CSS</li>
            <li><img src={Javascript} alt="JavaScript" />JavaScript</li>
          </ul>
        </div>

        <div className="skill-card">
          <h2>Back-end</h2>
          <ul>
            <li><img src={Java} alt="Java" />Java</li>
            <li><img src={SpringBoot} alt="Spring Boot" />Spring Boot</li>
            <li><img src={MySql} alt="MySQL" />MySQL</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Skills
