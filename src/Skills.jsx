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
import Git from "./assets/git.png"
import Rest from "./assets/rest.png"
import Maven from "./assets/maven.png"
import Postman from "./assets/postman.png"
import GitHubIcon from '@mui/icons-material/GitHub';





function Skills() {

  return (
    <div className="skills-section">
      <h1>Habilidades</h1>

      <div className="skills-container">
        
        <div className="skill-card">
          <h2>Back-end</h2>
          <ul>
            <li><img src={Java} alt="Java" />Java</li>
            <li><img src={SpringBoot} alt="Spring Boot" />Spring Boot</li>
            <li><img src={MySql} alt="MySQL" />MySQL</li>
          </ul>
        </div>

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
          <h2>Ferramentas</h2>
          <ul>
            <li><img src={Git} alt="Git" />Git</li>
            <li><GitHubIcon sx={{ fontSize: 40 }} />GitHub</li>
            <li><img src={Maven} alt="Maven" />Maven</li>
            <li><img src={Postman} alt="Postman" />Postman</li>
            <li><img src={Rest} alt="Rest" />APIs REST</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Skills
