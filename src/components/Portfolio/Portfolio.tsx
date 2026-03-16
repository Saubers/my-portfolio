import { Container } from "./styles";
import { Card } from "../Card/Card";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Selected Work</h2>

      <div className="projects">
        <Card
          title="dLocal — Pix Payments"
          description="Built the mobile banking interface for dLocal's Pix payment system at Coderio. Engineered real-time transaction flows handling instant payments across Latin American markets, focusing on reliability and seamless UX under high-throughput conditions."
          technologies={["React Native", "TypeScript", "Node.js"]}
        />
        <Card
          title="Trakion — Fleet Tracking"
          description="Developed a web-based vehicle tracking platform for cargo fleet management at Coderio. Designed real-time GPS visualization, route optimization dashboards, and reporting modules that give logistics operators full visibility over their fleet."
          technologies={["React", "TypeScript", "Next.js", "Node.js"]}
        />
        <Card
          title="Canna Doctor — Grow App"
          description="Architecting a comprehensive mobile application for cannabis cultivation management. Building plant lifecycle tracking, environment monitoring, and guided grow schedules — delivering a complex domain into an intuitive mobile experience."
          technologies={["React Native", "TypeScript", "Node.js", "Expo"]}
        />
        <Card
          title="Tower Travel — Booking Engine"
          description="Worked at The Flock building a large-scale travel booking platform. Implemented search, filtering, and reservation flows handling thousands of daily transactions with optimized performance and conversion-focused UI."
          technologies={["React", "Next.js", "TypeScript", "Node.js"]}
        />
        <Card
          title="Medife Mobile — Health Insurance"
          description="Led the mobile development team at OpenDev Pro for Medife's health insurance app. Directed architecture decisions, code reviews, and sprint planning while shipping features that simplified policy management for thousands of users."
          technologies={["React Native", "Expo", "TypeScript", "Node.js"]}
        />
      </div>
    </Container>
  );
}
