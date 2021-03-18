import React, { Component } from 'react';
import '.././styles/GameContainer.css'
import { connect } from 'react-redux';
import ChoosePlayer from '../components/players/ChoosePlayer';
import Spaces from '../containers/SpacesContainer'
import HowToPlay from '../components/rules/HowToPlay';
import Scores from '../components/impact/Scores'
class GameContainer extends Component {
    
    render() {
        
        return (
            <div className="game-container">
                {
                    (this.props.playerOne !== "")
                    ? <div className="scores-container"><Scores 
                        playerOne={this.props.playerOne}
                        playerTwo={this.props.playerTwo}
                        playerThree={this.props.playerThree}
                        playerFour={this.props.playerFour}
                        p1Impact={this.props.p1Impact}
                        p2Impact={this.props.p2Impact}
                        p3Impact={this.props.p3Impact}
                        p4Impact={this.props.p4Impact}
                        winning={this.props.winning}
                    /></div>
                    :null
                }
                {
                    (this.props.playerOne === "") 
                    ? <ChoosePlayer addPlayer={this.props.addPlayer}/>
                    
                        
                    :   <div className="spaces-container"><Spaces 
                            playerOne={this.props.playerOne}
                            playerTwo={this.props.playerTwo}
                            playerThree={this.props.playerThree}
                            playerFour={this.props.playerFour}
                            elementName={this.props.elementName}
                            pOneCurrentPosition={this.props.pOneCurrentPosition}
                            pTwoCurrentPosition={this.props.pTwoCurrentPosition}
                            pThreeCurrentPosition={this.props.pThreeCurrentPosition}
                            pFourCurrentPosition={this.props.pFourCurrentPosition}
                            p1Impact={this.props.p1Impact}
                            p2Impact={this.props.p2Impact}
                            p3Impact={this.props.p3Impact}
                            p4Impact={this.props.p4Impact}
                            winning={this.props.winning}
                        /></div>
                        
                    }  
                    
                    
                
                {/* <HowToPlay/> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playerOne: state.playerOne,
        playerTwo: state.playerTwo,
        playerThree: state.playerThree,
        playerFour: state.playerFour,
        elementName: state.elementName,
        pOneCurrentPosition: state.pOneCurrentPosition,
        pTwoCurrentPosition: state.pTwoCurrentPosition,
        pThreeCurrentPosition: state.pThreeCurrentPosition,
        pFourCurrentPosition: state.pFourCurrentPosition,
        p1Impact: state.p1Impact,
        p2Impact: state.p2Impact,
        p3Impact: state.p3Impact,
        p4Impact: state.p4Impact,
        winning: state.winning
    }
}

export default connect(mapStateToProps)(GameContainer);