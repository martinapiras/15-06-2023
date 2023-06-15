import { useState } from "react";
import ListItem from "../ListItem";
import "./index.css";

const List = ({ title, items, filter }) => {
  const [list, setList] = useState(items);
  const onHandleShortTodos = () => {
    setList(list.filter((todo) => todo.title.length <= 20));
  };
  const onHandleIncompleteTodos = () => {
    setList(list.filter((todo) => !todo.completed));
  };
  const onHandleCompletedTodos = () => {
    setList(list.filter((todo) => todo.completed));
  };
  let filterType;
  switch (filter) {
    case "short":
      filterType = onHandleShortTodos;
      break;

    case "incomplete":
      filterType = onHandleIncompleteTodos;
      break;

    case "completed":
      filterType = onHandleCompletedTodos;
      break;
  }

  return (
    <div className="listWrapper">
      <h1>{`${title}: ${filter}`}</h1>
      <button onClick={filterType} className="filterButton">
        Filter
      </button>
      <div className="list">
        {list.map((todo) => (
          <ListItem data={todo} key={todo.id}></ListItem>
        ))}
      </div>
    </div>
  );
};

export default List;
