import { useState, useEffect } from "react";
import { EmployeeContext } from "./EmployeeContext";

function EmployeeProvider({ children }) {
  const [employee, setEmployee] = useState({
    name: "",
    role: "",
    status: "Inactive",
  });

  useEffect(() => {
    console.log(employee);
  }, [employee]);

  return (
    <EmployeeContext.Provider
      value={{ employee, setEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;

