import { useEffect, useState } from "react";

const LifeCycle = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    console.log("Component Mounted!");

    return () => {
      console.log("Component Unmounted!");
    };
  });

  return (
    <div>
      <h1>Lifecycle</h1>
      <button onClick={() => setShowText((prev) => !prev)}>Show Text</button>
      {showText && <h1>Text is Here.</h1>}
    </div>
  );
};

export default LifeCycle;
