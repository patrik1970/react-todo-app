import React, { Component } from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);  
    this.state = {
      todos: [],
      title: 'ToDos',
      counter: 0,
    }
  }


  updateTodo(event,index) {
    this.setState({editTodo: false});
    event.preventDefault();

    let todos = this.state.todos;

    let todoName = this.refs.todoName.value;
    let todoDone = this.refs.todoDone.value;

    let counter = this.state.todo;

    let newTodo = {
      todoName,
      todoDone,
      counter
    };

    todos[counter] = newTodo;

    this.setState({
      todos: todos
    });
    this.refs.todoForm.reset();
  }


  editTodo(index) {
    this.setState({editTodo: true});
    let todos = this.state.todos;

    let todo = todos.findIndex(function(todo) {
      return todo.counter === index
    });

    this.refs.todoName.value = todos[todo].todoName;
    this.refs.todoDone.value = todos[todo].todoDone;

    this.setState({
      todos: todos,
      todo: todo
    });
  }


  removeTodo(index) {
    let todos = this.state.todos;

    let todo = todos.findIndex(function(todo) { 
      return todo.counter === index 
    });
          
    todos.splice(todo, 1);

    this.setState({
      todos: todos
    });
  }


  addTodo(event) {
    event.preventDefault();
    let todoName = this.refs.todoName.value;
    let todoDone = this.refs.todoDone.value;
    let counter = this.state.counter;
    let todo = {
      todoName,
      todoDone,
      counter
    };
    counter+=1;
    let todos = this.state.todos;
          
    todos.push(todo);

    this.setState({
      todos: todos,
      counter: counter
    });
    this.refs.todoForm.reset();
  }

       
  renderNormal() {
    let title = this.state.title;
    let todos = this.state.todos;
    return (
      <div className="flex-container">
        <h1>{title}</h1>
        <form ref="todoForm">
          <input type="text" ref="todoName" onBlur={(event => {this.setState ({todoName: event.target.value})})} placeholder="What Todo?" />
          <input type="text" ref="todoDone" onBlur={(event => {this.setState ({todoDone: event.target.value})})} placeholder="Is It Done Yet?" />
          <button onClick={this.addTodo}>Add ToDo</button>
        </form>
        <ul>
          {todos.map((todo => <li key={todo.counter}><span>What ToDo? <span>{todo.todoName}</span> Done Yet? <span>{todo.todoDone}</span></span> 
          <button onClick={this.removeTodo.bind(null, todo.counter)}>Delete ToDo</button>
          <button onClick={this.editTodo.bind(null, todo.counter)}>Edit ToDo</button>
          </li>))}         
        </ul>
      </div>
    );
  }
        

  renderForm() {
    let title = this.state.title;
    return (
      <div className="flex-container">
        <h1>{title}</h1>
        <form ref="todoForm">
          <input type="text" ref="todoName" placeholder="What Todo?" />
          <input type="text" ref="todoDone" placeholder="Is It Done Yet?"/>
          <button onClick={this.updateTodo}>Update ToDo</button>
        </form>
      </div>
    );
  }


  render() {
    if(this.state.editTodo){
      return this.renderForm();
    }else{
      return this.renderNormal();
    }
  }
}

export default App;
