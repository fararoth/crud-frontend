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
  .then(json => console.log(json))
    }

    render() {
       return(
<ul>
    {this.state.items.map( item => <li>{item}</li>)}
</ul>
        )
    }
}
