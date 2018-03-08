import React, { Component } from 'react';
import '../../App.css';

class Input extends Component {
  render() {
    return (
        <input type={this.props.type} name={this.props.name} value={this.props.value} checked={this.props.checkedValue} onChange={this.props.changeFn}/>
    );
  }
}

export default Input;
