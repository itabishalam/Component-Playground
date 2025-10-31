import { useState } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [component, setComponent] = useState("Button");
  const [copyText, setCopyText] = useState("Copy Code");

  // Button States
  const [label, setLabel] = useState("Click Me");
  const [size, setSize] = useState("medium");
  const [variant, setVariant] = useState("Solid");
  const [color, setColor] = useState("#3b82f6");

  // Navbar States
  const [navTitle, setNavTitle] = useState("My Website");
  const [navColor, setNavColor] = useState("#1e40af");

  // Card States
  const [cardTitle, setCardTitle] = useState("Card Title");
  const [cardContent, setCardContent] = useState("This is a sample card.");
  const [cardColor, setCardColor] = useState("#374151");

  // HTML Code Generator
  const getHTMLCode = () => {
    if (component === "Button") {
      return `<button style="
  background-color:${variant === "Outline" ? "transparent" : color};
  color:${variant === "Solid" ? "#fff" : color};
  border:${variant === "Outline" ? "2px solid " + color : "none"};
  padding:${size === "small" ? "6px 12px" : size === "large" ? "14px 28px" : "10px 20px"};
  font-size:${size === "small" ? "14px" : size === "large" ? "18px" : "16px"};
  border-radius:8px;
  cursor:pointer;">
  ${label}
</button>`;
    }

    if (component === "Navbar") {
      return `<nav style="
  background-color:${navColor};
  color:white;
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-radius:8px;">
  <h1>${navTitle}</h1>
  <ul style="display:flex;gap:20px;list-style:none;">
    <li><a href="#" style="color:white;text-decoration:none;">Home</a></li>
    <li><a href="#" style="color:white;text-decoration:none;">About</a></li>
    <li><a href="#" style="color:white;text-decoration:none;">Contact</a></li>
  </ul>
</nav>`;
    }

    if (component === "Card") {
      return `<div style="
  background-color:${cardColor};
  color:white;
  padding:20px;
  border-radius:10px;
  max-width:300px;">
  <h2>${cardTitle}</h2>
  <p>${cardContent}</p>
</div>`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getHTMLCode());
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy Code"), 1500);
  };

  // Dynamic Preview Renderer
  const renderPreview = () => {
    if (component === "Button")
      return (
        <Button label={label} size={size} variant={variant} color={color} />
      );
    if (component === "Navbar")
      return <Navbar title={navTitle} backgroundColor={navColor} />;
    if (component === "Card")
      return (
        <Card
          title={cardTitle}
          content={cardContent}
          backgroundColor={cardColor}
        />
      );
  };

  return (
    <div className="app">
      <h1>Component Playground</h1>

      <div className="main-layout">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Customization</h2>

          <label>Choose Component</label>
          <select
            value={component}
            onChange={(e) => setComponent(e.target.value)}
          >
            <option value="Button">Button</option>
            <option value="Navbar">Navbar</option>
            <option value="Card">Card</option>
          </select>

          {component === "Button" && (
            <>
              <label>Label</label>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />

              <label>Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>

              <label>Variant</label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
              >
                <option value="Solid">Solid</option>
                <option value="Outline">Outline</option>
                <option value="Ghost">Ghost</option>
              </select>

              <label>Color</label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </>
          )}

          {component === "Navbar" && (
            <>
              <label>Title</label>
              <input
                type="text"
                value={navTitle}
                onChange={(e) => setNavTitle(e.target.value)}
              />
              <label>Background Color</label>
              <input
                type="color"
                value={navColor}
                onChange={(e) => setNavColor(e.target.value)}
              />
            </>
          )}

          {component === "Card" && (
            <>
              <label>Title</label>
              <input
                type="text"
                value={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
              />
              <label>Content</label>
              <input
                type="text"
                value={cardContent}
                onChange={(e) => setCardContent(e.target.value)}
              />
              <label>Background Color</label>
              <input
                type="color"
                value={cardColor}
                onChange={(e) => setCardColor(e.target.value)}
              />
            </>
          )}
        </div>

        {/* Preview */}
        <div className="preview">
          {renderPreview()}
        </div>

        {/* Code Section */}
        <div className="code-section">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Generated Code</h3>
            <button onClick={handleCopy}>{copyText}</button>
          </div>
          <textarea value={getHTMLCode()} readOnly rows="18" />
        </div>
      </div>
    </div>
  );
}

export default App; 