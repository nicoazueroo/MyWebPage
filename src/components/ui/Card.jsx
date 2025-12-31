import "./Card.css";

export default function Card({ title, subtitle, period, description, bullets, tags }) {
  return (
    <article className="card">
      <div className="card__top">
        <div>
          <h3>{title}</h3>
          <p className="muted">{subtitle}</p>
        </div>
        {period && <span className="chip">{period}</span>}
      </div>

      <p className="card__summary">{description}</p>

      {bullets && (
        <ul className="card__list">
          {bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {tags && (
        <div className="card__tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </article>
  );
}
