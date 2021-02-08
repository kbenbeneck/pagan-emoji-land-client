import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        
        
        return (
            <div className="playerOne">
                <p>
                    {this.props.playerOne}
                </p>
            </div>
        )
    }
}
