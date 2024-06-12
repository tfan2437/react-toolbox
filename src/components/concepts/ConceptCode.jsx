import { useState } from "react";
import { conceptCodes } from "../../data/reactConcepts";

const ConceptCode = () => {
  const [active, setActive] = useState(0);

  const buttonStyle = {
    backgroundColor: "#ddd",
    color: "#000",
    padding: "10px 36px",
    border: "none",
    borderRadius: "5px",

    cursor: "pointer",
    fontWeight: "700",
  };

  const activeStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 36px",
    border: "none",
    borderRadius: "5px",

    cursor: "pointer",
    fontWeight: "700",
  };

  return (
    <div style={{ width: "1140px", marginBottom: "30px" }}>
      <h1 style={{ marginBottom: "10px" }}>Examples</h1>
      <div
        style={{
          display: "flex",
          border: "5px solid #000",
          borderRadius: "10px",
          padding: "10px",
          width: "530px",
          marginBottom: "20px",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => setActive(0)}
          style={active === 0 ? activeStyle : buttonStyle}
        >
          JSX
        </button>
        <button
          onClick={() => setActive(1)}
          style={active === 1 ? activeStyle : buttonStyle}
        >
          Component
        </button>
        <button
          onClick={() => setActive(2)}
          style={active === 2 ? activeStyle : buttonStyle}
        >
          Props
        </button>
        <button
          onClick={() => setActive(3)}
          style={active === 3 ? activeStyle : buttonStyle}
        >
          State
        </button>
      </div>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "20px",
          border: "none",
          borderRadius: "15px",
          minHeight: "320px",
        }}
      >
        <h3 style={{ minHeight: "50px" }}>
          {conceptCodes[active].description}
        </h3>
        <pre>{conceptCodes[active].code}</pre>
      </div>
    </div>
  );
};

export default ConceptCode;
