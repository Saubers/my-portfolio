import ScrollAnimation from "react-animate-on-scroll";
import { GitBranch, ExternalLink, LucideIcon } from "lucide-react";

// Props for a single, text-centric project card.
interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  achievements: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  achievements,
  technologies,
  githubUrl,
  liveUrl,
}) => {
  return (
    <ScrollAnimation animateIn="flipInX">
      <div className="project">
        <header>
          <span className="icon-badge">
            <Icon size={22} aria-hidden="true" />
          </span>
          <h3>{title}</h3>
        </header>

        <p className="description">{description}</p>

        <ul className="achievements">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>

        <ul className="tech-list">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        {false && (
          <footer className="actions">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="action"
                aria-label={`View ${title} source code`}
              >
                <GitBranch size={16} aria-hidden="true" />
                View Code
              </a>
            ) : (
              <span className="action disabled" aria-disabled="true">
                <GitBranch size={16} aria-hidden="true" />
                View Code
              </span>
            )}

            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="action"
                aria-label={`Open ${title} live demo`}
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live Demo
              </a>
            ) : (
              <span className="action disabled" aria-disabled="true">
                <ExternalLink size={16} aria-hidden="true" />
                Live Demo
              </span>
            )}
          </footer>
        )}
      </div>
    </ScrollAnimation>
  );
};
