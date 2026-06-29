// Il nostro primo Class component, piu' potenti dei functional components

// Component e' la classe principale dei Class components che viene poi estesa dai NOSTRI Class components
import { Component } from 'react';

const first = 'Latte';
const second = 'Caffè';
const third = 'Biscotti';

// Il nome della classe determina il nome del component

class List extends Component {
    // La restituzione del JSX nei class component va preceduta dal metodo render()
    render() {
        return (
            <ul>
                <li>{first}</li>
                <li>{second}</li>
                <li>{third}</li>
                <li>{this.props.item}</li>
            </ul>
        )
    }
}

// Solito export
export default List;