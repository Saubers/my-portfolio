import { Container } from "./styles";
import { Card } from "../Card/Card";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Works</h2>

      <div className="projects">
        <Card
          title="The Flock"
          description='I work as a Front End Developer on the "TOWER TRAVEL" project, a large-scale travel sales application.'
          technologies={["React", "Next", "Node", "Typescript"]}
        />
        <Card
          title="OpenDev Pro"
          description='I worked as Technical Leader in "MEDIFE MOBILE" project, a health insurance application.'
          technologies={["React Native", "Expo", "Node", "Javascript", "Typescript"]}
        />
        <Card
          title="Workout App"
          description="A mobile application created as part of a personal project. It
                is used to create training routines."
          technologies={[
            "React Native",
            "Typescript",
            "Node",
            "Express",
            "MongoDB",
          ]}
        />
        <Card
          title="REST-API for a Freelance race project"
          description="I developed a REST-API for a running race project."
          technologies={["JavaScript", "Node", "Express", "MongoDB"]}
        />
      </div>
    </Container>
  );
}
