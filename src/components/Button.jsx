export default function Button({ label, className, size, variant, color }) {
  if (variant === "Solid") {
    variant = "bg-[var(--btn-color)] text-white";
  } else if (variant === "Outline") {
    variant = "border border-[var(--btn-color)] text-[var(--btn-color)] bg-transparent";
  } else {
    variant = "text-[var(--btn-color)] bg-transparent hover:bg-blue-100";
  }

  return (
    <button
      className={`btn ${className} ${size} ${variant}`}
      style={{ "--btn-color": color }}
    >
      {label}
    </button>
  );
}
