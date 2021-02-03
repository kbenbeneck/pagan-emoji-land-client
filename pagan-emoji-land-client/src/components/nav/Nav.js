import React, { Component } from 'react'
import ChoosePlayer from '../NewGame/ChoosePlayer'
import HowToPlay from '../NewGame/HowToPlay'
import ScoresContainer from '../../containers/ScoresContainer'

export default class Nav extends Component {
    state = {
        choicesVisable: false,
        howVisable: false,
        scoresVisable: false,

    }
    render() {
        return (
            <div>
                <button onClick={() => {this.setState({
                    choicesVisable: true,
                    howVisable: false,
                    scoresVisable: false,
                })}}>
                    NEW GAME
                </button>

                <button onClick={() => {this.setState({
                    choicesVisable: false,
                    howVisable: true,
                    scoresVisable: false,
                })}}>
                    HOW TO PLAY
                </button>
                
                <button onClick={() => {this.setState({
                    choicesVisable: false,
                    howVisable: false,
                    scoresVisable: true,
                })}}>
                    IMPACT SCORES
                </button>
                
                { this.state.choicesVisable ? <ChoosePlayer/> : null }
                { this.state.howVisable ? <HowToPlay /> : null }
                { this.state.scoresVisable ? <ScoresContainer /> : null }

            </div>
        )
    }
}
