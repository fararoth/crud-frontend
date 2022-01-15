import React, { Component } from "react";

export default class createUser extends Component {
  state = {
    users: [],
    username: []
  };

  async componentDidMount() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon").then(result=>result.json()).then(items=>this.setState({
            done: true,
            items
        }));
    this.setState({ users: res.data });
    console.log(this.state.users);
  }

  onChangeUserName = e => {
    this.setState({
      username: e.target.value
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create new users</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChangeUserName}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map(users => (
              <li
                className="list-group-item list-group-item-action"
                key={users.name}
              >
                {users.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
