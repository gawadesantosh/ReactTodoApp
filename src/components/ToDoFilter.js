import React, { Component } from 'react';
import '../App.css';
import Input from './common/Input'

class ToDoFilter extends Component {
  render() {
    return (
      <div>
        <Input type="radio" name='filter' value='all' data-checkedValue={this.props.selectedStatus} changeFn={this.props.setTodosFilter}/>All
        <Input type="radio" name='filter' value='completed' data-checkedValue={this.props.selectedStatus} changeFn={this.props.setTodosFilter}/>Completed
        <Input type="radio" name='filter' value='incompleted' data-checkedValue={this.props.selectedStatus} changeFn={this.props.setTodosFilter}/>Incompleted

      </div>
    );
  }
}

export default ToDoFilter;
