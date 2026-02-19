import "../components/ui/Card.css"; 
import "./Creative.css";

export default function Creative() {
  return (
    <main className="creative">
      <header className="creative__header">
        <h1>Creative</h1>
        <p>
          Beyond technology, two of my biggest passions are <strong>music</strong> and{" "}
          <strong>culture</strong>. The discipline and commitment I put into my hobbies reflect
          how I work as an individual—consistent practice, curiosity, and continuous improvement.
          I love learning from different cultures and languages.
        </p>
      </header>

      <section className="creative__grid">
        {/* Left: Languages + Certifications */}
        <div className="creative__left">
          <div className="card creative__card">
            <h2 className="creative__sectionTitle">Languages</h2>
            <div className="creative__divider" />

            <div className="languageGrid">
              <div className="langTile">
                <span className="langBadge">Native</span>
                <h3>Spanish</h3>
                <p>Native / Bilingual</p>
              </div>

              <div className="langTile">
                <span className="langBadge">C2</span>
                <h3>English</h3>
                <p>Native / Bilingual</p>
              </div>

              <div className="langTile">
                <span className="langBadge">B2</span>
                <h3>French</h3>
                <p>Professional • Diploma</p>
              </div>

              <div className="langTile">
                <span className="langBadge">Pro</span>
                <h3>Portuguese</h3>
                <p>Professional</p>
              </div>

              <div className="langTile">
                <span className="langBadge">Basic</span>
                <h3>Italian</h3>
                <p>Elementary</p>
              </div>

              <div className="langTile">
                <span className="langBadge">Basic</span>
                <h3>German</h3>
                <p>Elementary</p>
              </div>
            </div>

            <p className="creative__note">
              Languages have shaped the way I think: different structures, different perspectives,
              and a deeper appreciation for how people communicate and solve problems.
            </p>
          </div>

          <div className="card creative__card">
            <h2 className="creative__sectionTitle">Certifications</h2>
            <div className="creative__divider" />

            <ul className="creative__list">
              <li>
                <strong>French B2</strong> — Diploma
              </li>
              <li>
                <strong>English C2</strong> — Full professional proficiency
              </li>
              <li>
                <strong>Spanish</strong> — Native
              </li>
            </ul>

            <div className="creative__tags">
              <span className="tag">Communication</span>
              <span className="tag">Discipline</span>
              <span className="tag">Cultural Curiosity</span>
            </div>
          </div>
        </div>

        {/* Right: Music */}
        <aside className="creative__right">
          <div className="card creative__card">
            <h2 className="creative__sectionTitle">Music</h2>
            <div className="creative__divider" />

            <p className="creative__text">
              I’m currently curating a small collection of performances. This section will become
              a gallery showcasing different instruments and styles—each piece reflecting practice,
              patience, and attention to detail.
            </p>

            <div className="videoGrid">
              {/* Replace src with your actual video links later */}
              <div className="videoTile">
                <div className="videoPlaceholder">
                  <span>Video 1</span>
                  <small>Coming soon</small>
                </div>
              </div>

              <div className="videoTile">
                <div className="videoPlaceholder">
                  <span>Video 2</span>
                  <small>Coming soon</small>
                </div>
              </div>

              <div className="videoTile">
                <div className="videoPlaceholder">
                  <span>Video 3</span>
                  <small>Coming soon</small>
                </div>
              </div>

              <div className="videoTile">
                <div className="videoPlaceholder">
                  <span>Video 4</span>
                  <small>Coming soon</small>
                </div>
              </div>
            </div>

            <p className="creative__note">
              
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
