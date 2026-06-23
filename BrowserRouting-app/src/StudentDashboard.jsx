import { UserContext } from "./UserContext";
import { useContext } from "react";
function StudentDashboard(){
    const {username}=useContext(UserContext);
    return(
        <div>
            <div style={{textAlign:"right"}}>{username}</div>
            <h1>Student dashboard</h1>
        </div>
    );
}
export default StudentDashboard;