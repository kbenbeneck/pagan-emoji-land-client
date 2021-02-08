import React, { Component } from 'react';
//
import { connect } from 'react-redux';
import ChoosePlayer from '../components/players/ChoosePlayer';
import Spaces from '../components/gameboard/Spaces';
import HowToPlay from '../components/rules/HowToPlay';
class GameContainer extends Component {
    
    render() {

        return (
            <div className="game-container">
                {
                    (this.props.playerOne === "") 
                    ? <ChoosePlayer addPlayer={this.props.addPlayer}/>
                        
                        
                    : <Spaces playerOne={this.props.playerOne}/> 
                }  
                <HowToPlay/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playerOne: state.playerOne,
    }
}

export default connect(mapStateToProps)(GameContainer);