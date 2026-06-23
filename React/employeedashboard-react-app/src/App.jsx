import EmployeeProvider from "../Context/EmployeeProvider";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeStatus from "./components/EmployeeStatus";
import EmployeeControls from "./components/EmployeeControls";

function App() {
  return (
    <EmployeeProvider>
      <h1>Employee Dashboard</h1>

      <EmployeeForm />
      <EmployeeDetails />
      <EmployeeStatus />
      <EmployeeControls />
    </EmployeeProvider>
  );
}

export default App;