import React, { Component } from 'react';
import '../App.css';

class ToDoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateTodos=this.updateTodos.bind(this);
  }

  updateTodos(e){
    if (e.key === 'Enter') {
     this.props.updateTodos(e.target.value);
     e.target.value="";
   }
  }
  render() {
    return (
      <div>
        <input className="ToDoInput" type="text" name="todos" placeholder="Enter todo item" onKeyPress={this.updateTodos}/>
      </div>
    );
  }
}

export default ToDoInput;
