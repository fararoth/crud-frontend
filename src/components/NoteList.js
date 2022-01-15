import React, { Component } from "react";

export default class NoteList extends Component {
  constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character').then(result=>result.json()).then(items=>this.setState({
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
