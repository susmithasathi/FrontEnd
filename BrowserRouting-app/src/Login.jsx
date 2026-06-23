import { UserContext } from "./UserContext";
import { useState,useContext } from "react";
import {useNavigate} from "react-router-dom";
function Login(){
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const {setUsername}=useContext(UserContext);
    const navigate=useNavigate();
    const handlesubmit=()=>{
        if(user==="admin"&& password==="admin123"){
          setUsername(user);
          navigate("/admin");
        }else if(user==="student"&&password==="password123")
        {
            setUsername(user);
            navigate("/student");
        } else {
            alert("Invalid Credentials");
        }
    };
   return(
    <div>
        <h1>Login Page</h1>
        <input
         type="text"
         placeholder="enter username"
         value={user}
         onChange={(e)=>setUser(e.target.value)}
         />
         <input
          type="text"
          placeholder="enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <br/><br/>
          <button onClick={handlesubmit}>
            Login
          </button>
    </div>
   );


}
export default Login;