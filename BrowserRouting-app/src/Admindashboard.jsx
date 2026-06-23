import { UserContext } from "./UserContext";
import { useContext } from "react";
function Admindashboard(){
const {username}=useContext(UserContext);
return(
    <div>
        <div style={{textAlign:"right"}}>{username}</div>
        <h1>Admin dashboard</h1>
    </div>
);
}
export default Admindashboard;