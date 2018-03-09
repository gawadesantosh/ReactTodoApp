import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/TodoList';
import ToDoFilter from './components/ToDoFilter';

class App extends Component {
  constructor(props){
    super(props);
    this.state={'todos':[], 'selectedStatus':'all'};
    this.updateTodos=this.updateTodos.bind(this);
    this.updateTodoStatus=this.updateTodoStatus.bind(this);
    this.setTodosFilter=this.setTodosFilter.bind(this);
  }
  updateTodos(task){
    var todos = this.state.todos.slice();
    todos.push({'task':task,'status':'incompleted'})
    this.setState({ todos: todos });
  }
  updateTodoStatus(index,e){
    var todos= this.state.todos.slice();
    if(e.target.checked)
      todos[index].status='completed';
    else
      todos[index].status='incompleted';
    this.setState({ todos: todos });
  }

  filterTodos(){
    var selectedStatus=this.state.selectedStatus;
    if(selectedStatus=='all'){
      var todos=this.state.todos;
    } else {
      var todos=this.state.todos.filter((todoItem)=>todoItem.status==selectedStatus);
    }
    console.log(todos);
    return todos;
  }

  setTodosFilter(e){
    this.setState({'selectedStatus':e.target.value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React ToDo App</h1>
        </header>
          <ToDoInput updateTodos={this.updateTodos}/>
          <ToDoList todoItems={this.filterTodos(this.state.selectedStatus)} updateTodoStatus={this.updateTodoStatus}/>
          <ToDoFilter setTodosFilter={this.setTodosFilter} selectedStatus={this.state.selectedStatus}/>
      </div>
    );
  }
}

export default App;
