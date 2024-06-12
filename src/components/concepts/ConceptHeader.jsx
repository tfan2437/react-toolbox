import reactLogo from "../../assets/images/react-guide-logo.png";

const ConceptHeader = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={reactLogo} alt="" style={{ width: "250px" }} />
      <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>
        React Essentials
      </h1>
      <p style={{ fontSize: "20px" }}>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </div>
  );
};

export default ConceptHeader;
