import { useState } from "react";
import { conceptCodes } from "../../data/reactConcepts";

const ConceptCode = () => {
  const [active, setActive] = useState(0);

  return (
    <div style={{ width: "1140px", marginBottom: "100px" }}>
      <h1>Examples</h1>
      <div>
        <button onClick={() => setActive(0)}>JSX</button>
        <button onClick={() => setActive(1)}>Component</button>
        <button onClick={() => setActive(2)}>Props</button>
        <button onClick={() => setActive(3)}>State</button>
      </div>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "20px",
          border: "none",
          borderRadius: "15px",
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
