import { Container } from "./styles";
import { Card } from "../Card/Card";
import { projects } from "./projects";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Selected Work</h2>

      <div className="projects">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            icon={project.icon}
            achievements={project.achievements}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </Container>
  );
}
