import { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";

function EmployeeControls() {
  const { employee, setEmployee } =
    useContext(EmployeeContext);

  const activateEmployee = () => {
    setEmployee({
      ...employee,
      status: "Active"
    });
  };

  const deactivateEmployee = () => {
    setEmployee({
      ...employee,
      status: "Inactive"
    });
  };

  return (
    <div>
      <h2>Employee Controls</h2>

      <button onClick={activateEmployee}>
        Active
      </button>

      <button onClick={deactivateEmployee}>
        Inactive
      </button>
    </div>
  );
}

export default EmployeeControls;