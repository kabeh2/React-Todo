import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],
      todo: "",
      searchBox: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };

    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ""
    });
  };

  handleClick = id => {
    // make copy of todos and then map it to get selected item
    let todos = this.state.todos.slice();

    // isolated specific object with id

    todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });

    this.setState({ todos });
  };

  handleRemove = e => {
    e.preventDefault();

    let todos = this.state.todos.filter(todo => !todo.completed);

    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          todo={this.state.todo}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <button type="success" onClick={e => this.handleRemove(e)}>
          Remove Completed
        </button>
        <input
          type="search"
          name="searchBox"
          value={this.state.searchBox}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <TodoList todos={this.state.todos} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
