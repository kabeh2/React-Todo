// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul style={{ display: "flex", flexDirection: "column" }}>
      {/* As of right now, user can only search when showing all items
      and if filtering completed items, it will render the list without
      completed tasks. If showing all items, it will render the ability 
      to filter all items using the searchbar */}

      {props.hideCompleted
        ? props.completedList.map(todo => (
            <Todo
              handleClick={props.handleClick}
              key={todo.id}
              todo={todo}
              hideCompleted={props.hideCompleted}
            />
          ))
        : props.filteredList.map(todo => (
            <Todo handleClick={props.handleClick} key={todo.id} todo={todo} />
          ))}
    </ul>
  );
};

export default TodoList;
