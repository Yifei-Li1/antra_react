import React, { Component } from 'react';
import './App.css'
class App extends Component {
  state = {
    inputText: "",
    todos: [],  
  };

  componentDidMount() {
    console.log("App componentDidMount");
    fetch('http://localhost:3000/todos').then(response => response.json())
      .then(data => {
        this.setState({ todos: data });
      })
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const inputText = this.state.inputText;
    if(inputText === "") return;
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: inputText }),
    })
      .then(data => {
        this.setState({ inputText: '' });
        fetch('http://localhost:3000/todos').then(response => response.json()).then(data => {
        this.setState({ todos: data });
      })
      })
      
  }

  handleDelete = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    })
      .then(data => {
        fetch('http://localhost:3000/todos').then(response => response.json()).then(data => {
        this.setState({ todos: data });
      })
      })
      
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInputChange} />
          <button onClick={this.handleSubmit}>submit</button>
        </form>
        <List todoList = {todos} handleDelete = {this.handleDelete}/>
      </div>
    );
  }
}
class List extends Component{
  render() {
    const {handleDelete,todoList} = this.props;
    return (
      <ul>
      {todoList.map(todo => (
        <li key={todo.id}>
          {todo.content}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
    );
  }
}

export default App;