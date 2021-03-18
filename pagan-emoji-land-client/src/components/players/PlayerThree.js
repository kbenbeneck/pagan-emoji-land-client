import React, { Component } from 'react'
import { positions } from '../gameboard/positions'
export default class PlayerThree extends Component {
    


    render() {
        const moveTo = positions(this.props.pThreeCurrentPosition)
        // console.log(moveTo)
        
        return (
                
            
            <div className={this.props.playerThree} style={moveTo}>
                <p className={this.props.playerThree}>
                    {this.props.playerThree}
                </p>
                
            </div>
            
        )
    }
}
