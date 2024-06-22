import { useState, useContext } from "react";
import { AppContext } from "./AppContext";

const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);

  const [newUsername, setNewUsername] = useState("");

  const handleChangeUsername = () => {
    setUsername(newUsername);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your new username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={handleChangeUsername}>Change Username</button>
    </div>
  );
};

export default ChangeProfile;
