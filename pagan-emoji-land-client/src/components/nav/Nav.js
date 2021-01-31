import React, { Component } from 'react'
import ChoosePlayer from '../NewGame/ChoosePlayer'
export default class Nav extends Component {
    state = {
        choicesVisable: false,
    }
    render() {
        return (
            <div>
                <button onClick={() => {this.setState({choicesVisable: true})}}>
                    NEW GAME
                </button>
                <button onClick={() => {this.setState({choicesVisable: false})}}>
                    HOW TO PLAY
                </button>
                <button onClick={() => {this.setState({choicesVisable: false})}}>
                    ABOUT
                </button>
                
                { this.state.choicesVisable ? <ChoosePlayer /> : null }

            </div>
        )
    }
}
