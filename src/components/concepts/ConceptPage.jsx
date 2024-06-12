import ConceptHeader from "./ConceptHeader";
import Concepts from "./Concepts";
import ConceptCode from "./ConceptCode";

const ConceptPage = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ConceptHeader />
      <Concepts />
      <ConceptCode />
    </div>
  );
};

export default ConceptPage;
