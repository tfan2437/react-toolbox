import component from "../../assets/images/react-guide-components.png";

const ConceptCard = ({ title, description, image }) => {
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
        border: "5px solid #000",
        borderRadius: "30px",
      }}
    >
      <img src={image} alt="" style={{ width: "200px" }} />
      <h1 style={{ marginBottom: "10px" }}>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ConceptCard;
