import React, { Component } from "react";

const urlapi = 'https://jsonplaceholder.typicode.com/todos';

export default class NoteList extends Component {
  constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
         console.log(data);
         this.setState({
        users:data
      })
    }

    render() {
       return(
<ul>
    {this.state.users.map( item => <li>{users.id}</li>)}
</ul>
        )
    }
}
