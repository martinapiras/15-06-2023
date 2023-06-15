import { todoList } from "./mocks/todos";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <>
      <List title="To-do list" items={todoList} filter="completed"></List>
      <List title="To-do list" items={todoList} filter="incomplete"></List>
      <List title="To-do list" items={todoList} filter="short"></List>
    </>
  );
}

export default App;
