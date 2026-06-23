import { useState, useContext } from "react";
import { UserContext } from "./UserContext";

function Login() {

  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    if (username.trim() !== "") {
      setUser(username);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
