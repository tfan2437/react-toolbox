import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#0400ff");

  // Copy the selected color to user clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color).then(
      () => {
        alert("Hex color code copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: color,
          border: "5px solid #ccc",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      ></div>
      <h1>Color Picker</h1>
      <div style={{ display: "flex", gap: "3px", marginTop: "10px" }}>
        <h2 style={{ width: "310px" }}>
          Selected Color:{" "}
          <span
            style={{
              fontFamily: `"Lexend", sans-serif`,
              fontWeight: "600",
              color: "#999",
            }}
          >
            {color}
          </span>
        </h2>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{
            padding: "0px 1px",
            border: "2px solid #ccc",
            borderRadius: "3px",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        />
      </div>
      <button
        onClick={copyToClipboard}
        style={{
          fontFamily: `"Lexend", sans-serif`,
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#bbb",
          color: "#fff",
          cursor: "pointer",
          marginTop: "30px",
        }}
      >
        Copy Color Code
      </button>
    </div>
  );
};

export default ColorPicker;
