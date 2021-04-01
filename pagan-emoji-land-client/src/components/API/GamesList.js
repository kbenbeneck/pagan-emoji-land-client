import React, { Component } from 'react'

export default class GamesList extends Component {
    mappedGames = () => {
        return this.props.games.map(g => 
            <li key={g.id} id={g.id} className={g.element}>
                name: {g.name},
                element: {g.element},
                impact: {g.impact},
                moves: {g.moves}
            </li>)
    }

    render() {
        return (
            <ul className="game-stats">
              
           
                
                 {this.mappedGames()}
                 
              
                
            </ul>
        )
    }
}
