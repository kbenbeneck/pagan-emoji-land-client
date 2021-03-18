import React, { Component } from 'react'
import { positions } from '../gameboard/positions'
export default class PlayerTwo extends Component {
    


    render() {
        const moveTo = positions(this.props.pTwoCurrentPosition)
        // console.log(moveTo)
        
        return (
                
            
            <div className={this.props.playerTwo} style={moveTo}>
                <p className={this.props.playerTwo}>
                    {this.props.playerTwo}
                </p>
                
            </div>
            
        )
    }
}

