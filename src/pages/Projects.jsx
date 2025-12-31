import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import "./Projects.css";

export default function Projects() {
  return (
    <main className="projects">
      <header className="projects__header">
  <h1>Projects</h1>

  <div className="projects__cta">
    <span className="projects__text">
      Check out my amazing projects here!    
    </span>

    <Button
      label="GitHub"
      href="https://github.com/nicoazueroo"
    />
  </div>
</header>

      <section className="projects__grid">
        <Card
          title="Weight Insights"
          subtitle="Health & Fitness Web Application"
          description="A data visualization web application designed to track and analyze user weight progress with secure authentication and real-time updates."
          bullets={[
            "Implemented secure login with HTTP authentication and database integration.",
            "Used Redux for global state management and real-time data updates.",
            "Designed and integrated a MySQL relational database."
          ]}
          tags={["React", "Redux", "MySQL", "REST APIs"]}
        />

        <Card
          title="Search Algorithm Visualizer"
          subtitle="AI & Pathfinding Project"
          description="An educational tool to visualize classical search algorithms and understand AI fundamentals through step-by-step grid-based exploration."
          bullets={[
            "Implemented BFS, DFS, and heuristic search algorithms using Prolog.",
            "Built a custom HTML-based visualization for node expansion.",
            "Improved understanding of AI search and logic programming."
          ]}
          tags={["Prolog", "AI", "Algorithms", "HTML"]}
        />

        <Card
          title="Fridge Finder"
          subtitle="Mobile Application"
          description="A cross-platform mobile application developed collaboratively using Agile methodologies, focused on offline functionality and clean architecture."
          bullets={[
            "Implemented local persistence using SQLite.",
            "Applied MVC architecture in an agile sprint workflow."
          ]}
          tags={["Flutter", "SQLite", "MVC", "Agile"]}
        />

        <Card
          title="Othello Game"
          subtitle="Desktop Application"
          description="A complete desktop implementation of the Othello board game with a strict separation of game logic and user interface."
          bullets={[
            "Applied multiple design patterns for scalability.",
            "Separated UI and game logic using MVC principles."
          ]}
          tags={["Java", "JavaFX", "MVC", "Design Patterns"]}
        />
      </section>
    </main>
  );
}
