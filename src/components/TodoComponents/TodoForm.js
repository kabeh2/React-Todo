import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        placeholder="Todo..."
        type="text"
        name="todo"
        value={props.todo}
        onChange={props.onChange}
      />
      <button type="submit" disabled={props.todo === "" ? true : false}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
