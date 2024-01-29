import {Container} from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";

export function Footer(){
  return(
    <Container className="footer">
      <a href="/" className="logo">
        <span>S</span>
        <span>ebastián Laserna</span>
      </a>
      <div>
        <p>This website was made with <img src={reactIcon}/></p>
      </div>

      <div className="social-media">
        <a href="https://www.linkedin.com/in/sebal-fullstack/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/Saubers" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
      
    </Container>
  )
}