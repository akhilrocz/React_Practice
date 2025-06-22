import "./App.css";
import Person from "./components/EmployeeCard/Person";
import CustomStyles from "./components/Button/CustomStyles";
import ParentStationery from "./components/Stationary/ParentStationery";
import Parent from "./components/DisplayImage/Parent";
import ParentProducts from "./components/Products/ParentProducts";
import ParentStudent from "./components/Students/ParentStudent";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";

function App() {
  return (
    <div className="App">
      <Person />
      <CustomStyles/>
      <ParentStationery/>
      <Parent/>
      <ParentProducts/>
      <ParentStudent/>
      <EmployeeDetails/>
    </div>
  );
}

export default App;
