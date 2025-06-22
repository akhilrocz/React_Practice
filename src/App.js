import "./App.css";
import Person from "./components/EmployeeCard/Person";
import CustomStyles from "./components/Button/CustomStyles";
import ParentStationery from "./components/Stationary/ParentStationery";
import Parent from "./components/DisplayImage/Parent";
import ParentProducts from "./components/Products/ParentProducts";

function App() {
  return (
    <div className="App">
      <Person />
      <CustomStyles/>
      <ParentStationery/>
      <Parent/>
      <ParentProducts/>
    </div>
  );
}

export default App;
