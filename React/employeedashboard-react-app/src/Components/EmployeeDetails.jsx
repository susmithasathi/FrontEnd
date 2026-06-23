import { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";

function EmployeeDetails() {
  const { employee } =
    useContext(EmployeeContext);

  return (
    <div>
      <h2>Employee Details</h2>

      <p>Name: {employee.name}</p>

      <p>Role: {employee.role}</p>
    </div>
  );
}

export default EmployeeDetails;