import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Contact extends React.Component {
  render() {
    return (
      <tr>
        <td><label>{this.props.contact.Name}</label></td>
        <td><label>{this.props.contact.PhoneNumber}</label></td>
        <td><label>{this.props.contact.Email}</label></td>
      </tr>

    )
  }
}
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
class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      contacts: [],
      todos: []
    }
  }
  componentDidMount() {

    const contactsApiUrl = 'https://q2m2h86d1f.execute-api.us-east-2.amazonaws.com/prod/users/contacts';
    fetch(contactsApiUrl)
      .then(async (response) => {
        this.setState({ ...this.state.todos, loading: false, contacts: await response.json() });
      });

    const toDosApiUrl = 'https://q2m2h86d1f.execute-api.us-east-2.amazonaws.com/prod/users/todos';
    fetch(toDosApiUrl)
      .then(async (response) => {
        this.setState({ ...this.state.contacts, loading: false, todos: await response.json() });
      });
  }
  render() {
    if (this.state.loading) {
      return (<label>loading...</label>)
    } else {
      return (
        <div>
          <h2 align = 'center'>To Dos</h2>
          <table align='center'>
            <th>Name</th>
            <th>Due Date</th>
            <th>Status</th>
            {this.state.todos.map(c => <Todo todo={c} />)}
          </table>
          <br />
          <h2 align = 'center'>Contacts</h2>
          <table align='center'>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            {this.state.contacts.map(c => <Contact contact={c} />)}
          </table>
        </div>

      );

    }
  }
}

ReactDOM.render(
  <User />,
  document.getElementById('root')
);