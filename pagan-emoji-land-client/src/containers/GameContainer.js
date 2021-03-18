import React, { Component } from 'react';
import '.././styles/GameContainer.css'
import { connect } from 'react-redux';
import ChoosePlayer from '../components/players/ChoosePlayer';
import Spaces from '../containers/SpacesContainer'
import HowToPlay from '../components/rules/HowToPlay';
import Scores from '../components/impact/Scores'
import APIContainer from './APIContainer';
import { fetchAPI } from '../components/API/fetchGames';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from 'react-router-dom'

class GameContainer extends Component {
    
    render() {
        
    return (
        <Router>
            <div className="game-container">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/games">Scores</Link>
                        </li>
                        <li>
                            <Link to="/play">Game</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/games">
                        <APIContainer />
                    </Route>
                    <Route path="/play"> 
                        {
                            (this.props.playerOne === "") 
                            ? <ChoosePlayer addPlayer={this.props.addPlayer}/>
                            :   <div className="spaces-container">
                                    <Spaces 
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
                                    />
                                </div>
                        }  
                        {(this.props.playerOne !== "")
                        ? <div className="scores-container"><Scores 
                            playerOne={this.props.playerOne}
                            playerTwo={this.props.playerTwo}
                            playerThree={this.props.playerThree}
                            playerFour={this.props.playerFour}
                            p1Impact={this.props.p1Impact}
                            p2Impact={this.props.p2Impact}
                            p3Impact={this.props.p3Impact}
                            p4Impact={this.props.p4Impact}
                            winning={this.props.winning}/></div>
                        :null
                        }
                    </Route>
                    <Route path="/">
                        <HowToPlay/>
                    </Route>
                </Switch>
               
                
                   
                    
                    
            

            </div>
        </Router>
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
        winning: state.winning,
        
    }

}



export default connect(mapStateToProps)(GameContainer);