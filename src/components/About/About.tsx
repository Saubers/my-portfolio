import { Container } from "./styles";

import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import nextIcon from "../../assets/nextjs.svg";
import ScrollAnimation from "react-animate-on-scroll";
import myImage from "../../assets/my-photo.jpeg"

export function About(){
  return(
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>I help businesses ship reliable web and mobile products. Over the past 5+ years, I've built fintech platforms processing real-time payments, fleet tracking systems, healthcare apps, and travel booking engines — always focused on performance, scalability, and clean user experiences.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>
          <p>My approach is end-to-end: I own the full lifecycle from system architecture and API design to frontend implementation and deployment. TypeScript across the stack, battle-tested patterns, and a product mindset that prioritizes business outcomes over technical vanity.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>Currently at Coderio, building fintech and logistics solutions for international clients. Previously led mobile projects and scaled web applications across multiple industries.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Core stack:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React / React Native" />
            </ScrollAnimation>
          </div>

          <div  className="hability">
          <ScrollAnimation animateIn="fadeInUp"  delay={0.2 * 1000}>
            <img src={nextIcon}  alt="Next.js" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
            <img src={typescriptIcon} alt="TypeScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <img src={nodeIcon} alt="Node.js" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={myImage} alt="Profile" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
