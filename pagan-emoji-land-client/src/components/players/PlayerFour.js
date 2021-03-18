import React, { Component } from 'react'
import { positions } from '../gameboard/positions'
export default class PlayerFour extends Component {
    


    render() {
        const moveTo = positions(this.props.pFourCurrentPosition)
        // console.log(moveTo)
        
        return (
                
            
            <div className={this.props.playerFour} style={moveTo}>
                <p className={this.props.playerFour}>
                    {this.props.playerFour}
                </p>
                
            </div>
            
        )
    }
}
