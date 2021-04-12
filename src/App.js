import { Component } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer'
import TodoForm from './components/TodoForm'

const todoURL = "http://localhost:3000/todos/"

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount(){
    fetch(todoURL)
      .then(res => res.json())
      .then(todos => this.setState({todos}))
  }

  removeTodo = (todoToRemove) => {
    let filteredTodos = this.state.todos.filter(todo => {
      return todo !== todoToRemove
    } )
    this.setState({
      todos: filteredTodos
    })

    fetch(todoURL + todoToRemove.id, {
      method: "DELETE"
    })
  }

  addTodo = (newTodo) => {
    this.setState({
      todos : [...this.state.todos, newTodo]
    })

    fetch(todoURL, {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
        "accepts" : "application/json"
      },
      body: JSON.stringify(newTodo)
    })

  } 

  render(){
    return (
      <div className="App">
        <TodoContainer todos={this.state.todos} removeTodo={this.removeTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
