import React, { Component } from "react";


const List = (props) => (
    <ul>
        {
            props.items.map((item, i) => {
                return <li key={i}>{item}</li>
            })
        }
    </ul>
)

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
            <div>
                {this.state.done && this.state.items.isArray() ? (
                    <List items={...this.state.items} />
                ) : (
                    <p>Cargando resultados...</p>
                )}
            </div>
        )
    }
}
