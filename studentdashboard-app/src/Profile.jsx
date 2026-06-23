import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {

  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Profile Page</h1>

      <h2>Welcome {user}</h2>
    </div>
  );
}

export default Profile;