import "./Guide.css";
import GuideHeader from "./GuideHeader";
import Concepts from "./Concepts";
import ConceptCode from "./ConceptCode";

const Guide = () => {
  return (
    <div className="guide-container">
      <GuideHeader />
      <Concepts />
      <ConceptCode />
    </div>
  );
};

export default Guide;
