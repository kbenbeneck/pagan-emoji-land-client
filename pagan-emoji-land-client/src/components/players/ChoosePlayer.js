import React, { Component } from 'react';
import { connect } from 'react-redux';


class ChoosePlayer extends Component {
    
    state = {  
            
        playerOne: '',        
            
    }
    
    handleOnChange = event => {
        this.setState({ playerOne: event.target.value })     
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.dispatch({ type: 'CHOOSE_PLAYER', payload: this.state.playerOne})
        this.setState({
            playerOne: '',            
        });
            
    }
    
    render() {             
        return (
            <div className="player-choices">                               
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <label>Choose an Element:</label>
                    <select value={this.state.playerOne} onChange={this.handleOnChange}>
                        <option value="🜄">🜄</option>
                        <option value="🜁">🜁</option>
                        <option value="🜃">🜃</option>
                        <option value="🜂">🜂</option>
                    </select>
                   <button type="submit">Play</button>                                                 
                </form>                                
            </div>
        )
    }
}

export default connect()(ChoosePlayer);