import React, { Component } from "react";

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ users: users });
      });
  }

  render() {
    if (this.state.users.length > 0) {
      return (
        <div className="container-fluid">
          <li>{this.state.users}</li>
        </div>
      );
    } else {
      return <p className="text-center">Cargando usuarios...</p>;
    }
  }
}
