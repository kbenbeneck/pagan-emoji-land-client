import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChoosePlayer extends Component {

    state = {
        
        playerOne: '',
        submitVisable: false
    }

    handleOnClick = event => {   
        this.setState({
            playerOne: event.target.value,
            submitVisable: true
        })     
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PLAYER', payload: this.state.playerOne})
        this.setState({
            playerOne: '',
            submitVisable: false
        })

    }
    render() {
        return (
            <div className="player-choices">
                <hr></hr>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                <label>Choose an Element:</label>
                <button type="button" value="🜄" onClick={this.handleOnClick}>🜄</button>
                <button type="button" value="🜁" onClick={this.handleOnClick}>🜁</button>
                <button type="button" value="🜃" onClick={this.handleOnClick}>🜃</button>
                <button type="button" value="🜂" onClick={this.handleOnClick}>🜂</button>
                <hr />
                {this.state.playerOne}
                { this.state.submitVisable ? <button type="submit">Play</button> : null }                                                
                </form>
            </div>
        )
    }
}

export default connect()(ChoosePlayer);