import "./Experience.css";

export default function Experience() {
  return (
    <main className="experience">
      <header className="experience__header">
        <h1>Experience</h1>
        <p>
          My work and academic journey have helped me build strong engineering habits:
          writing maintainable code, collaborating in Agile environments, and focusing on
          user-centric software with solid fundamentals in algorithms and AI.
        </p>
      </header>

      <section className="experience__grid">
        {/* Left column: Work */}
        <div className="experience__section">
          <h2>Relevant Work</h2>

          <article className="experience__card">
            <div className="experience__cardTop">
              <div>
                <h3>Software Engineer Intern</h3>
                <p className="muted">Grant Thornton • Remote (Quito, Ecuador)</p>
              </div>
              <span className="chip">May 2025 – Dec 2025</span>
            </div>

            <p className="experience__summary">
              In this role I strengthened my frontend engineering skills by improving UI
              components and navigation flows. Working with real users and production code
              taught me how to ship clean, reliable features and iterate quickly based on feedback.
            </p>

            <ul className="experience__list">
              <li>Enhanced UI components using Angular and HTML to improve usability and consistency.</li>
              <li>Improved navigation and interface efficiency through practical UI/UX refinements.</li>
              <li>Participated in code reviews and UI testing to maintain quality and reduce regressions.</li>
            </ul>

            <div className="experience__tags">
              <span className="tag">Angular</span>
              <span className="tag">HTML/CSS</span>
              <span className="tag">UI Testing</span>
              <span className="tag">Code Reviews</span>
              <span className="tag">Agile</span>
            </div>
          </article>

          <article className="experience__card">
            <div className="experience__cardTop">
              <div>
                <h3>Portuguese Teacher</h3>
                <p className="muted">Organization of Latin American Students • Toronto, ON</p>
              </div>
              <span className="chip">Jan 2025 – Present</span>
            </div>

            <p className="experience__summary">
              Teaching sharpened my communication skills—an essential part of software engineering.
              It helped me explain complex ideas clearly, stay organized, and lead in a collaborative environment.
            </p>

            <ul className="experience__list">
              <li>Led Portuguese instruction for university students in a student-led organization.</li>
              <li>Built structured learning plans and adapted explanations to different skill levels.</li>
            </ul>

            <div className="experience__tags">
              <span className="tag">Communication</span>
              <span className="tag">Leadership</span>
              <span className="tag">Mentorship</span>
            </div>
          </article>

          <article className="experience__card">
            <div className="experience__cardTop">
              <div>
                <h3>English Tutor</h3>
                <p className="muted">Casa de la Misericordia • Quito, Ecuador</p>
              </div>
              <span className="chip">Jan 2019 – Apr 2020</span>
            </div>

            <p className="experience__summary">
              Tutoring reinforced patience and problem-solving—skills I bring to debugging and teamwork.
              It also strengthened my ability to break down challenging topics into small, actionable steps.
            </p>

            <ul className="experience__list">
              <li>Tutored children in English fundamentals and conversational skills.</li>
            </ul>

            <div className="experience__tags">
              <span className="tag">Problem Solving</span>
              <span className="tag">Empathy</span>
              <span className="tag">Structure</span>
            </div>
          </article>
        </div>

        {/* Right column: Education */}
        <aside className="experience__section">
          <h2>Education</h2>

          <article className="experience__card">
            <div className="experience__cardTop">
              <div>
                <h3>York University</h3>
                <p className="muted">B.A. Computer Science • Toronto, ON</p>
              </div>
              <span className="chip">Expected May 2027</span>
            </div>

            <p className="experience__summary">
              I’m building a strong foundation in core computer science—especially{" "}
              <strong>design & analysis of algorithms</strong> and{" "}
              <strong>artificial intelligence</strong>. This background shapes how I approach
              problems: reasoning first, then implementing clean solutions.
            </p>

            <ul className="experience__list">
              <li><strong>GPA:</strong> 7.0 / 9.0</li>
              <li><strong>Focus areas:</strong> AI, Design & Analysis of Algorithms, Computer Security</li>
            </ul>

            <div className="experience__tags">
              <span className="tag">Algorithms</span>
              <span className="tag">AI</span>
              <span className="tag">Computer Security</span>
              <span className="tag">Software Engineering</span>
            </div>
          </article>

          <article className="experience__card">
            <h3>What I’m Growing Into</h3>
            <p className="experience__summary">
              I’m aiming for roles where I can combine strong fundamentals with practical delivery—building
              reliable systems, learning fast, and contributing to products that feel great to use.
            </p>

            <div className="experience__tags">
              <span className="tag">AI</span>
              <span className="tag">Cybersecurity</span>
              <span className="tag">UI/UX</span>
              <span className="tag">Full-Stack</span>
            </div>
          </article>
        </aside>
      </section>
    </main>
  );
}
