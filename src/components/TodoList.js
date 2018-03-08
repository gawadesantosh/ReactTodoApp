import React, { Component } from 'react';
import '../App.css';
import Input from './common/Input';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var list = this.props.todoItems.map((todoItem,index)=><li key={'elt'+index}><Input type="checkbox" name={'input'+index} value='completed' data-checkedValue={todoItem.status} changeFn={this.props.updateTodoStatus.bind(this,index)}/> {todoItem.task}</li>);
    return (
      <div>
        <ul className="list">
          {list}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
