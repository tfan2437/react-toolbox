import ChangeProfile from "./ChangeProfile";
import { useContext } from "react";
import { AppContext } from "./AppContext";

const Profile = (props) => {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>This is Profile Page. User: {username}</h1>
      <ChangeProfile />
    </div>
  );
};

export default Profile;
