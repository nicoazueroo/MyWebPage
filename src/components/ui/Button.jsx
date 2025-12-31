import "./Button.css";

export default function Button({ label, onClick, href }) {
  if (href) {
    return (
      <a
        className="btn"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
}
