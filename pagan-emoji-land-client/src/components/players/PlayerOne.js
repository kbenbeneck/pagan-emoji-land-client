import React, { Component } from 'react'
import { positions } from '../gameboard/positions'
export default class Player extends Component {
    


    render() {
        const moveTo = positions(this.props.pOneCurrentPosition)
        // console.log(moveTo)
        

        return (
                
            
            <div id="player-one" className={this.props.playerOne} style={moveTo}>
                <p className={this.props.playerOne}>
                    {this.props.playerOne}
                </p>
                
            </div>
            
        )
    }
}

