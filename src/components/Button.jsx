export default function Button({ label, size, variant, color }) {
  const style = {
    backgroundColor: variant === "Solid" ? color : "transparent",
    color: variant === "Solid" ? "#fff" : color,
    border: variant === "Outline" ? `2px solid ${color}` : "none",
    padding:
      size === "small"
        ? "6px 12px"
        : size === "large"
        ? "14px 28px"
        : "10px 20px",
    fontSize: size === "small" ? "14px" : size === "large" ? "18px" : "16px",
    borderRadius: "8px",
    cursor: "pointer",
  };
  return <button style={style}>{label}</button>;
}
