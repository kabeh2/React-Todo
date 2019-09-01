import React from "react";

const Todo = props => {
  return (
    <li style={{ listStyle: "none" }}>
      <input
        onClick={() => props.handleClick(props.todo.id)}
        type="checkbox"
        id={props.todo.id}
        name="todo"
        value={props.todo.completed}
      />
      <label
        htmlFor={props.todo.id}
        style={{
          textDecoration: props.todo.completed ? "line-through" : "none"
        }}
      >
        {`${props.todo.task} - ${props.todo.id} - ${props.todo.completed}`}
      </label>
    </li>
  );
};

export default Todo;
