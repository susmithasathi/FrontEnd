import {Navigate} from "react-router-dom";
import {UserContext} from "./UserContext";
import { useContext } from "react";
function ProtectedRoute({children}){
    const {username}= useContext(UserContext);
    return username?children:<Navigate to="/" />;

}
export default ProtectedRoute;