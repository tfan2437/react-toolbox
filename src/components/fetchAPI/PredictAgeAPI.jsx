import { useState } from "react";

const PredictAgeAPI = () => {
  const [inputName, setInputName] = useState("");
  const [resultData, setResultData] = useState(null);

  const fetchAgeByName = async (name) => {
    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);

      if (!response.ok) {
        setInputName("");
        throw new Error("Could not fetch age from Predict Age API.");
      }
      const data = await response.json();
      setResultData(data);
      setInputName("");
    } catch (error) {
      console.error(error);
    }
  };

  const handlePredictAge = () => {
    fetchAgeByName(inputName);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={handlePredictAge}>Predict Age</button>
      </div>
      <h2>
        Name: <span>{resultData?.name}</span>
      </h2>
      <h2>
        Predicted Age: <span>{resultData?.age}</span>
      </h2>
    </div>
  );
};

export default PredictAgeAPI;
