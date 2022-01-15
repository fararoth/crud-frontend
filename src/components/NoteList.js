import React, { Component } from "react";

const urlapi = 'https://jsonplaceholder.typicode.com/todos';

export default class NoteList extends Component {
  constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        fetch(urlapi).then(result=>result.json()).then(items=>this.setState({
            done: true,
            items }))
    }

    render() {
       return(
<ul>
    {this.state.items.map( item => <li>{item}</li>)}
</ul>
        )
    }
}
