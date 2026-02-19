import { useNavigate } from "react-router-dom";
import profileImg from "../assets/images/profile.png";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <section className="home__hero">
        <img
          src={profileImg}
          alt="Matthew Azuero"
          className="home__photo"
        />

        <h1>Matthew Azuero</h1>
        <h2>3rd year Computer Science Student @ York University Toronto, ON</h2>

        <p>
          Experienced programmer in full stack applications, open for paid and unpaid
          opportunities where I can contribute to meaningful projects and grow alongside a team.
        </p>


        <a
            href="/CV Matthew Version Actualizada.pdf"
            download
            className="home__download"
          >
            Download CV
          </a>

        <div className="home__actions">
          <button onClick={() => navigate("/experience")}>Experience</button>
          <button onClick={() => navigate("/projects")}>Projects</button>
          <button onClick={() => navigate("/creative")}>Creative Work</button>
          <button onClick={() => navigate("/contact")}>Contact</button>


          
          
        </div>
      </section>
    </main>
  );
}
