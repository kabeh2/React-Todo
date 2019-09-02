import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
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
      searchBox: "",
      hideCompleted: false
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
    // This function marks an item as completed in state with a boolean
    // So we can mark items as checked or not

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

    this.setState({ hideCompleted: !this.state.hideCompleted });
  };

  render() {
    // The variables below allow us to filter list without removing
    // items from state meaning when toggling between filtered data,
    // you can bring back entire list
    let filteredList = this.state.todos.filter(item => {
      return (
        item.task.toLowerCase().indexOf(this.state.searchBox.toLowerCase()) !==
        -1
      );
    });
    let completedList = this.state.todos.filter(item => {
      return !item.completed;
    });

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          todo={this.state.todo}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <button type="success" onClick={e => this.handleRemove(e)}>
          {!this.state.hideCompleted ? "Remove Completed" : "Show Completed"}
        </button>
        {!this.state.hideCompleted && (
          <input
            type="search"
            name="searchBox"
            value={this.state.searchBox}
            onChange={this.handleChange}
            placeholder="Search..."
          />
        )}
        {this.state.hideCompleted && (
          <p>
            All Completed Items are Hidden. If you check an item in this state,
            it will be marked as completed and not be displayed. Click Show
            Completed to see all items again.
          </p>
        )}
        <TodoList
          todos={this.state.todos}
          handleClick={this.handleClick}
          filteredList={filteredList}
          completedList={completedList}
          hideCompleted={this.state.hideCompleted}
        />
      </div>
    );
  }
}

export default App;
