import ConceptCard from "./ConceptCard";
import { concepts } from "../../data/reactConcepts";

const Concepts = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {concepts.map((concept, index) => (
        <ConceptCard
          key={index}
          title={concept.title}
          description={concept.description}
          image={concept.image}
        />
      ))}
    </div>
  );
};

export default Concepts;
