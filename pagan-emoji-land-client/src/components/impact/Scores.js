import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getImpactSym } from './getImpactSym';



 class Scores extends Component {
    render() {
        const  { 
            p1Impact, p2Impact, p3Impact, p4Impact, 
            playerOne, playerTwo, playerThree, playerFour, winning
        } = this.props;

        
        
        let enlarge = {scale: (1.5)}
        // winning.includes(p1Impact) ? enlarge : null
        
        
        return (
            

                <div className="scores">
                    <div className="p1" style={winning.includes(p1Impact) ? enlarge : null}>
                        <p id={`${playerOne}`}>{playerOne}</p>
                        <p id={`${playerOne}`}>{getImpactSym(playerOne)}:{p1Impact}</p>
                    </div>
                    <div className="p2" style={{scale: 10}}>
                        <p id={`${playerTwo}`}>{playerTwo}</p>
                        <p id={`${playerTwo}`}>{getImpactSym(playerTwo)}:{p2Impact}</p>
                    </div>
                    <div className="p3">
                        <p id={`${playerThree}`}>{playerThree}</p>
                        <p id={`${playerThree}`}>{getImpactSym(playerThree)}:{p3Impact}</p>
                    </div>
                    <div className="p4">
                        <p id={`${playerFour}`}>{playerFour}</p>
                     <p id={`${playerFour}`}>{getImpactSym(playerFour)}:{p4Impact}</p>
                    </div>
              
                </div>
            
        )
    }
}


export default connect()(Scores)