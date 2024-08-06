import { Container } from "./styles";
import { Card } from "../Card/Card";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">
        <Card
          title="TOWER TRAVEL"
          description='I work as a Front End developer in "TOWER TRAVEL", a travel seller application.'
          technologies={["React", "Next", "Node", "Typescript"]}
        />
        <Card
          title="MEDIFE MOBILE"
          description='I worked as Technical Leader in "MEDIFE MOBILE", a health insurance application.'
          technologies={["React Native", "Expo", "Node", "Javascript"]}
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
          title="REST-API for a race project"
          description="I developed a REST-API for a running race project."
          technologies={["JavaScript", "Node", "Express", "MongoDB"]}
        />
      </div>
    </Container>
  );
}
