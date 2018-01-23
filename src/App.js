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

          let todoTitle = this.refs.todoTitle.value;
          let todoYear = this.refs.todoYear.value;

          let counter = this.state.todo;

          let newTodo = {
            todoTitle,
            todoYear,
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

          this.refs.todoTitle.value = todos[todo].todoTitle;
          this.refs.todoYear.value = todos[todo].todoYear;

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
          let todoTitle = this.refs.todoTitle.value;
          let todoYear = this.refs.todoYear.value;
          let counter = this.state.counter;
          let todo = {
            todoTitle,
            todoYear,
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
                <input type="text" ref="todoTitle" onBlur={(event => {this.setState ({todoTitle: event.target.value})})} placeholder="What Todo?" />
                <input type="text" ref="todoYear" onBlur={(event => {this.setState ({todoYear: event.target.value})})} placeholder="Is It Done Yet" />
                <button onClick={this.addTodo}>Add Movie</button>
              </form>
              <ul>
                {todos.map((todo => <li key={todo.counter}><span>Titel: <span>{todo.todoTitle}</span> Done Yet? <span>{todo.todoYear}</span></span> 
                <button onClick={this.removeTodo.bind(null, todo.counter)}>Delete</button>
                <button onClick={this.editTodo.bind(null, todo.counter)}>Edit</button>
                </li>))}         
              </ul>
            </div>
          );
        }
        

        renderForm() {
          let title = this.state.title;
          let todo = this.state.todo;
          return (
            <div className="flex-container">
              <h1>{title}</h1>
              <form ref="todoForm">
                <input type="text" ref="todoTitle" placeholder="What Todo?" />
                <input type="text" ref="todoYear" placeholder="Is It Done Yet?"/>
                <button onClick={this.updateTodo}>Update Movie</button>
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
