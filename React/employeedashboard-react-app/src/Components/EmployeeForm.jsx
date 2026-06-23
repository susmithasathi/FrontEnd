import { useState, useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";

function EmployeeForm() {
  const { setEmployee } =
    useContext(EmployeeContext);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = () => {
    setEmployee({
      name,
      role,
      status: "Active"
    });

    setName("");
    setRole("");
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
      />

      <button onClick={handleSubmit}>
        Add Employee
      </button>
    </div>
  );
}

export default EmployeeForm;