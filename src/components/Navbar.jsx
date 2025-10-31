export default function Navbar({ title, backgroundColor }) {
  return (
    <nav
      style={{
        backgroundColor,
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <h1>{title}</h1>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
