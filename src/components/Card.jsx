export default function Card({ title, content, backgroundColor }) {
  return (
    <div
      style={{
        backgroundColor,
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "300px",
      }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
