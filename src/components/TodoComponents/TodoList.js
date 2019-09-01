// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul style={{ display: "flex", flexDirection: "column" }}>
      {props.todos.map(todo => (
        <Todo handleClick={props.handleClick} key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
