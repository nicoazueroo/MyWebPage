import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <section className="home__hero">
        <img
          src="/profile.png"
          alt="Matthew Azuero"
          className="home__photo"
        />

        <h1>Matthew Azuero</h1>
        <h2>Computer Science Student</h2>

        <p>
         PENE PENE ME GSUTA EL PENEE
        </p>

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
