import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImpactSym } from '../impact/getImpactSym';


class ChoosePlayer extends Component {
    
    state = {  
        players: ["🜄","🜁","🜃","🜂"],  
        playerOne: '', 
        playerTwo: '',       
        playerThree: '',       
        playerFour: '',  
        elementName: '',
    }
    
    handleOnClick = event => {
        event.preventDefault();
        const selected = event.target.innerText
        const selectedIndex = this.state.players.indexOf(selected)
        const p1 = this.state.players[selectedIndex]
        const nonPlayers = this.state.players.filter(function (e) {return e !== p1})
        const p2 = nonPlayers[0]
        const p3 = nonPlayers[1]
        const p4 = nonPlayers[2]
        //sep this func
        switch(selected) {
            case '🜄':
                return this.setState({
                    elementName: 'water',
                    playerOne: p1,
                    playerTwo: p2,
                    playerThree: p3,
                    playerFour: p4
                });
            case '🜁':
                return this.setState({
                    elementName: 'air',
                    playerOne: p1,
                    playerTwo: p2,
                    playerThree: p3,
                    playerFour: p4
                });
            case '🜃':
                return this.setState({
                    elementName: 'earth',
                    playerOne: p1,
                    playerTwo: p2,
                    playerThree: p3,
                    playerFour: p4
                });
            case '🜂':
                return this.setState({
                    elementName: 'fire',
                    playerOne: p1,
                    playerTwo: p2,
                    playerThree: p3,
                    playerFour: p4
                });
            default:
                return null   
        }   
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.choosePlayers(this.state)
        this.setState({
            playerOne: '', 
            playerTwo: '',       
            playerThree: '',       
            playerFour: '',  
            elementName: '',           
        });      
    }

    render() {  

        const playerChoicesButtons = this.state.players.map((symbol, index) => 
            <button 
                key={index}
                id={index}
                onClick={this.handleOnClick} 
                className={symbol + index}>
                    {symbol}
            </button>
        );

        
        const s = `Do you wish to play as ${this.state.elementName} ?`
        
        return (
            <div className="player-choices">                               
                <form onSubmit={event => this.handleOnSubmit(event)}>
                   
                    {/* render buttons from players state */}
                    {playerChoicesButtons} 

                    {/* submit only vis on p1 state change  */}
                    {   (this.state.playerOne !== '')
                        ? <button className="play-button"type="submit"><span>{this.state.playerOne}</span><span>{getImpactSym(this.state.playerOne)}</span></button>
                        : null }

                    {/* choose or play as _? */}
                    {   (this.state.elementName !== '')
                        ? <p className="confirm-player">{s}</p>
                        : <p className="confirm-player">Choose a classical element.</p> } 
                                            
                </form>                          
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        choosePlayers: playersState => dispatch({
            type: 'CHOOSE_PLAYERS', payload: playersState
        })
    }
}
export default connect(null, mapDispatchToProps)(ChoosePlayer);