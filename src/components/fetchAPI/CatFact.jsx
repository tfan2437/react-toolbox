import React, { useEffect, useState } from "react";

const CatFact = () => {
  const [catData, setCatData] = useState(null);

  const fetchCatFactData = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");

      if (!response.ok) {
        throw new Error("Could not fetch data from Cat Fact API.");
      }

      const data = await response.json();
      setCatData(data);
      console.log(catData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCatFactData();
  }, []);

  const handleNewCatData = () => {
    fetchCatFactData();
  };

  return (
    <div>
      <button onClick={handleNewCatData}>New Cat Fact</button>
      {catData && <h3>{catData.fact}</h3>}
    </div>
  );
};

export default CatFact;
