import "../styles/ModeToggler.css";

export default function ModeToggler({ mode, onChange }) {
  return (
    <nav className="mode-toggler">
      <button
        key="content"
        className={mode === "content" ? "selected" : null}
        onClick={() => onChange("content")}
      >
        Content
      </button>
      <button
        key="customize"
        className={mode === "customize" ? "selected" : null}
        onClick={() => onChange("customize")}
      >
        Customize
      </button>
    </nav>
  );
}
