import React from 'react';
class Todo extends React.Component {
    render() {
      return (
        <tr>
          <td><label>{this.props.todo.Name}</label></td>
          <td><label>{this.props.todo.DueDate}</label></td>
          <td><label>{this.props.todo.Status}</label></td>
        </tr>
  
      )
    }
  }
  export default Todo