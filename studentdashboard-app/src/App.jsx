import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import { UserContext } from "./UserContext";

function App() {

  const [user, setUser] = useState("");
  const [page, setPage] = useState("dashboard");

  if (!user) {
    return (
      <UserContext.Provider value={{ user, setUser }}>
        <Login />
      </UserContext.Provider>
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>

      <button
        onClick={() => setPage("dashboard")}
      >
        Dashboard
      </button>

      <button
        onClick={() => setPage("profile")}
      >
        Profile
      </button>

      {page === "dashboard"
        ? <Dashboard />
        : <Profile />
      }

    </UserContext.Provider>
  );
}

export default App;