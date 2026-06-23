import { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";

function EmployeeStatus() {
  const { employee } =
    useContext(EmployeeContext);

  return (
    <div>
      <h2>Employee Status</h2>

      <h3>{employee.status}</h3>
    </div>
  );
}

export default EmployeeStatus;