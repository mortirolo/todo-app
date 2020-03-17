import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// Broken: import uuid from 'uuid';
// import {v4 as uuidv4} from 'uuid';  // Only used for early devel prior to using backend
import axios from 'axios';  // Extension for sending requests to backend

import './App.css';

// ***********************************************
// Tutorial:
// https://www.youtube.com/watch?v=sBws8MSXN7A
// ***********************************************

// RS: This version of React uses "function App()" instead of class
//     Switch to class since tutorial uses class
class App extends Component {
  state = {
    todos: []
  }

  // Send request to the backend to load data once page mounts
  componentDidMount() {
    // Get only 10 items ".../todos" gets all items
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))  // Save response to todos state
  //    .then(res => console.log(res.data))  // for debugging
  }


  // Toggle the state of a TodoItem
  markComplete = (id) => {
  //    console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed  // Toggle state
      }
      return todo;
    }) });
  }

  delTodo =(id) => {
    // Delete TodoItem with a given target id in the backend
    axios.delete('https://jsonplaceholder.typicode.com/todos/$(id)')
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
    // In todos state var, remember only the items where id !== to target id.
    // This effectively filters out the item with our target id
    // Need the spread operator ... to do this
  }

  addTodo = (title) => {
    // post response to backend
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    // Copy todos and add new todo item response from backend
  }

  render () {
    // Log the todos array to the browser's web consol for debugging
    // Don't leave this active during runtime; only for debugging
    // console.log(this.state.todos)
    // Pass the todos state to the Todos component as a prop[erty]
    // To use a browser router we have to wrap everything in that router
    // The Route tag maps all desired page components to specified path:
    // in this case "/"
    // "exact path" prevents these components from being display for every path below "/"
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

// Local copy of todos for early development
// Later we can use todos from https://jsonplaceholder.typicode.com/todos
// which is a free to use backend
//    todos: [
//      {
//        id: uuidv4(),
//        title: 'Take out the trash',
//        completed: false
//      },
//      {
//        id: uuidv4(),
//        title: 'Dinner with wife',
//        completed: false
//      },
//      {
//        id: uuidv4(),
//        title: 'Meeting with boss',
//        completed: false
//      }
//    ]
//  }

// Early development version where we save to our own todos state variable
//  // Delete TodoItem with a given target id
//  delTodo =(id) => {
////    console.log(id)
//    // Remember only the items where id !== to target id.
//    // This effectively filters out the item with our target id
//    // Need the spread operator ... to do this
//    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
//  }

// Early development version where we save to our own todos state variable
//  addTodo = (title) => {
////    console.log(title)
//    const newTodo = {
//      id: uuidv4(),
//      title: title,
//      completed: false
//    }
//    this.setState({ todos: [...this.state.todos, newTodo] })  // Copy todos and add new todo item
//  }   