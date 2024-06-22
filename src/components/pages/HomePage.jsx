import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const HomePage = (props) => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>This is Home Page. Welcome {username}!</h1>
    </div>
  );
};

export default HomePage;
