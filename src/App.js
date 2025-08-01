import "./App.css";
import Person from "./components/EmployeeCard/Person";
import CustomStyles from "./components/Button/CustomStyles";
import ParentStationery from "./components/Stationary/ParentStationery";
import Parent from "./components/DisplayImage/Parent";
import ParentProducts from "./components/Products/ParentProducts";
import ParentStudent from "./components/Students/ParentStudent";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";
import ParentGreeting from "./components/Greeting/ParentGreeting";
import ParentUser from "./components/UserProfile/ParentUser";
import ParentGadgets from "./components/Gadgets/ParentGadgets";
import ParentPhones from "./components/Phones/ParentPhones";
import ParentArticle from "./components/Article/ParentArticle";
import ParentAbout from "./components/About/ParentAbout";
import ParentColorPicker from "./components/ColorPicker/ParentColorPicker";
import ParentTodo from "./components/Todo/ParentTodo";
import ToggleText from "./components/ToggleText/ToggleText";
import AddItem from "./components/AddItem/AddItem"
import ToggleRender from "./components/ToggleRender/ToggleRender";
import Counter from "./components/Counter/Counter";
import CityList from "./components/CityList/CityList";
import TodoApp from "./components/TodoApp/TodoApp";
import NameForm from "./components/NameForm/NameForm"
import Logger from "./components/Logger/Logger";
import EmailForm from "./components/EmailForm/EmailForm"
import Box from "./components/Box/Box";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";
import AddRemoveNames from "./components/AddRemoveNames/AddRemoveNames";
function App() {
  return (
    <div className="App">
      <Counter/>
      <ToggleRender/>
      <Person />
      <CustomStyles/>
      <ParentStationery/>
      <Parent/>
      <ParentProducts/>
      <ParentStudent/>
      <EmployeeDetails/>
      <ParentGreeting/>
      <ParentUser/>
      <ParentGadgets/>
      <ParentPhones/>
      <ParentArticle/>
      <ParentAbout/>
      <ParentColorPicker/>
      <ParentTodo/>
      <ToggleText/>
      <AddItem/>
      {/* <ToggleRender/> */}
      <CityList/>
      <TodoApp/>
      <NameForm/>
      <Logger/>
      <EmailForm/>
      <Box/>
      <DarkModeToggle/>
      <AddRemoveNames/>
    </div>
  );
}

export default App;
