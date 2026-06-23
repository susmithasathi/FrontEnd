import Login from "./Login";
import Admindashboard from "./Admindashboard";
import StudentDashboard from "./StudentDashboard";
import {useState} from "react";
import { UserContext } from "./UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  const [username,setUsername]=useState("");
  return(
  <UserContext.Provider value={{username,setUsername}}>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/admin" element={<Admindashboard/>}/>
     <Route path="/student" element={<StudentDashboard/>}/>
     

     
   </Routes>
   </BrowserRouter>
  </UserContext.Provider>
  );
}
export default App;
