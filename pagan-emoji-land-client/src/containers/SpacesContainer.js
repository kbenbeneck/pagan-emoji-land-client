import React, { Component } from 'react'
import PlayerOne from '../components/players/PlayerOne'
import PlayerTwo from '../components/players/PlayerTwo'
import PlayerThree from '../components/players/PlayerThree'
import PlayerFour from '../components/players/PlayerFour'
import { spacesArr } from '../components/gameboard/spacesArr'
import { connect } from 'react-redux'
import { whereTo } from '../components/gameboard/whereTo'
import { hops } from '../components/gameboard/hops'
import { getImpactSym } from '../components/impact/getImpactSym'
import { positions } from '../components/gameboard/positions'
import countImpact from '../components/impact/countImpact'
import tie from '../components/impact/tie'
import createGame from '../actions/createGame'
import { fetchGames } from '../actions/fetchGames'


class SpacesContainer extends Component {
    
    state = {
        summoned: '',
        pool: [...spacesArr],
        players: [],
        elementName: [],
        pOneMoves: [],
        pTwoMoves: [],
        pThreeMoves: [],
        pFourMoves: [],
        discarded: [],
        pOneCurrentPosition: '',
        pTwoCurrentPosition: '',
        pThreeCurrentPosition: '',
        pFourCurrentPosition: '',
        impacted: [...Array(97).keys()],
        p1ImpactSym: getImpactSym(this.props.playerOne ),
        p2ImpactSym: getImpactSym(this.props.playerTwo),
        p3ImpactSym: getImpactSym(this.props.playerThree),
        p4ImpactSym: getImpactSym(this.props.playerFour),
        p1I: 0,
        p2I: 0,
        p3I: 0,
        p4I: 0
    }

    render() {
        //player props
        const { 
            playerOne, playerTwo, playerThree, playerFour, 
            pOneCurrentPosition, pTwoCurrentPosition, 
            pThreeCurrentPosition, pFourCurrentPosition, elementName, winning,
            p1Impact,
        } = this.props;
        
        //map spacesArr, render divs with index
        const spaces = spacesArr.map((space, index) => 
            <div 
                className={`space-${index}`} 
                id={index}
                key={index}>
                {space}
            </div>
        )
        
        
        

        
        
        
        let impSyms = [...this.state.p1ImpactSym,...this.state.p2ImpactSym,...this.state.p3ImpactSym,...this.state.p4ImpactSym]
        
        
        //p4 goes first, leaving player ones summoned on the screen in between turns
        
        
        
        let imps = this.state.impacted.map((imp, index) => 
                
                    <span id={index} style={positions(index)}>
                        {
                           impSyms.includes(imp)
                           ? imp
                           : null 
                        }
                    </span>
                
                
            )
        
       
        
        this.summon = () => {
            
            let pool = this.state.pool 
            
        //p4 turn logic
            
                //rando
            let p4Selected = pool[Math.floor(Math.random() * pool.length)];
                
                //rando's sym
            let p4Summoned = p4Selected.props.children
                
                //rando's index
            let p4selectedIndex = pool.indexOf(p4Selected)

                // taking in a symbol and pt.A
                // whereTo returns pt.B
            let moveHereP4 = whereTo(p4Summoned, pFourCurrentPosition)

                //taking in pt.A and pt.B, 
                //hopse returns an array of each board space in between
            let hops4Arr = hops(pFourCurrentPosition, moveHereP4)

                //for each index in the hops arrray,
                //increase each iteration delay by index * ms 
                //within each iteration, dispatch move-player action
                //players then hop on each spot from point A to point B.
            let hops4 = () => hops4Arr.map(
                (hop, i) => {
                    setTimeout(() => 
                        this.props.dispatch({ type: 'MOVE_PLAYER_FOUR', payload: hop }), i * 20)
                        return console.log(`Player Four (${playerFour}) moving...`)
                } 
            )

                //state.impacted is an array 0-96, representing each space 
                // when symbols are present within the impacted array, they are rendered to dom
                // imp4 replaces the number at the index of pt.B with the players imp sym
            let imp4 = () => this.state.impacted.splice(moveHereP4,1,this.state.p4ImpactSym)
                
                // rmv4 removes the selected sym from the pool array
            let rmv4 = () => pool.splice(p4selectedIndex, 1) 

                // display selection, update player moves and discard arrs
            let state4 = () => this.setState({
                summoned: `${playerFour} to ${p4Summoned}`,
                pFourMoves: [this.state.pFourMoves,...p4Summoned],
                discarded: [this.state.discarded,...p4Summoned],  
            })

                // if selection is made, update state and disp move actions
            function movep4() {
               
               
                return new Promise(function(resolve, reject){
                    if (p4Selected) {resolve(rmv4(), state4(), hops4())}
                    else {reject(error => console.log(error))}
                }) 
            }
    
    
            //p3        
            let p3Selected = pool[Math.floor(Math.random() * pool.length)];
            let p3Summoned = p3Selected.props.children
            let p3selectedIndex = pool.indexOf(p3Selected)
            let moveHereP3 = whereTo(p3Summoned, pThreeCurrentPosition)
            let hops3Arr = hops(pThreeCurrentPosition, moveHereP3)
            let hops3 = () => hops3Arr.map(
                (hop, i) => {
                    setTimeout(() => 
                        this.props.dispatch({ type: 'MOVE_PLAYER_THREE', payload: hop }), i * 25)
                        return console.log(`Player Three (${playerThree}) moving...`)
                     })
                        
            let imp3 = () => this.state.impacted.splice(moveHereP3,1,this.state.p3ImpactSym)
            let rmv3 = () => pool.slice(p3selectedIndex, 1)
            let state3 = () => this.setState({
                summoned: `${playerThree} to ${p3Summoned}`,
                pThreeMoves: [this.state.pThreeMoves, p3Summoned],
                discarded: [this.state.discarded, p3Summoned], 
            })
            function movep3() {
                return new Promise(function(resolve, reject){
                    if (p3Selected) {resolve(rmv3(), state3(), hops3())}
                    else {reject(error => console.log(error))}
                }) }
            //p2
            let p2Selected = pool[Math.floor(Math.random() * pool.length)];
            let p2Summoned = p2Selected.props.children
            let p2selectedIndex = pool.indexOf(p2Selected)
            let moveHereP2 = whereTo(p2Summoned, pTwoCurrentPosition)
            let hops2Arr = hops(pTwoCurrentPosition, moveHereP2)
            let hops2 = () => hops2Arr.map(
                (hop, i) => {
                    setTimeout(() => 
                        this.props.dispatch({ type: 'MOVE_PLAYER_TWO', payload: hop }), i * 25)
                        return console.log(`Player Two (${playerTwo}) moving...`)
                    } )
            let imp2 = () => this.state.impacted.splice(moveHereP2,1,this.state.p2ImpactSym)
            let rmv2 = () => pool.splice(p2selectedIndex, 1)
            let state2 = () => this.setState({
                summoned: `${playerTwo} to ${p2Summoned}`,
                pTwoMoves: [this.state.pTwoMoves, p2Summoned],
                discarded: [this.state.discarded, p2Summoned], 
            })
            function movep2() {
                return new Promise(function(resolve, reject){
                    if (p2Selected) {resolve(rmv2(), state2(), hops2())}
                    else {reject(error => console.log(error))}
                })}

            //p1 
            let p1Selected = pool[Math.floor(Math.random() * pool.length)];
            let p1Summoned = p1Selected.props.children
            let p1selectedIndex = pool.indexOf(p1Selected)
            let moveHereP1 = whereTo(p1Summoned, pOneCurrentPosition)
            let hops1Arr = hops(pOneCurrentPosition, moveHereP1)
            let hops1 = () => hops1Arr.map(
                (hop, i) => {
                    setTimeout(() => 
                        this.props.dispatch({ type: 'MOVE_PLAYER_ONE', payload: hop }), i * 25)
                        return console.log(`You (${playerOne}) are moving...`)} )
            let imp1 = () => this.state.impacted.splice(moveHereP1,1,this.state.p1ImpactSym)
            let rmv1 = () => pool.splice(p1selectedIndex, 1)
            let state1 = () => this.setState({
                summoned: `${playerOne} to ${p1Summoned}`,
                pOneMoves: [this.state.pOneMoves, p1Summoned],
                discarded: [this.state.discarded, p1Summoned],    
            })

            function movep1() {
                return new Promise(function(resolve, reject){
                    if (p1Selected) {resolve(rmv1(), state1(), hops1())}
                    else {reject(error => console.log(error))}
                }) }
            
            let impactCount = ()=> countImpact(this.state.impacted, impSyms, ) 

            let dispCount = () => this.props.dispatch({ type: 'LIVE_SCORE', payload: impactCount() })
            
            

            async function p4prom() {
                await Promise.all([
                    movep4(), imp4(), impactCount(),dispCount()
                ])  
            }
            async function p3prom() {
                await Promise.all([
                    movep3(), imp3(), impactCount(),dispCount()
                ])  
            }
            async function p2prom() {
                await Promise.all([
                    movep2(), imp2(), impactCount(),dispCount()
                ])  
            }
            async function p1prom() {
                await Promise.all([
                    movep1(), imp1(), impactCount(),dispCount()
                ])  
            }

           
            async function moves() {
                await p4prom()
                setTimeout(await p3prom(), 1000)
                setTimeout(await p2prom(), 1500)
                setTimeout(await p1prom(), 2000)
            } 
            moves()
            
        }
         this.handleOnEndClick = event => {
                event.preventDefault()  
                this.props.dispatch({ type: 'END_GAME'}) 
            }
       
            
        this.endGame = () => {
            
            if ((this.props.winning.length === 1) && (this.props.winning.includes(this.props.p1Impact))) {
                alert(`Player One Wins by leaving ${p1Impact} impact while moving to ${this.state.pOneMoves}`)
                let obj = {
                    name: elementName,
                    element: playerOne,
                    impact: p1Impact,
                    moves: this.state.pOneMoves.toString()
                }
                createGame(obj)
                fetchGames()
                this.setState({
                    summoned: 
                        <button
                            className="end-game-button"
                            onClick={event => this.handleOnEndClick(event)}    
                        >🌌</button>,
                    pool: [...spacesArr],        
                })
                // fetch post to api 
               

                
            } else if 
                ((this.props.winning.length >= 1) && (this.props.winning.includes(this.props.p1Impact))) {
                    alert("Game is tied! Keep Going!")
                    let pos = [
                        pOneCurrentPosition,
                         pTwoCurrentPosition,
                        pThreeCurrentPosition,
                         pFourCurrentPosition,
                         ] 
                    this.props.dispatch({ type: `${tie(pos)}`, payload: 0})
                   
                    
            } else {
            
                alert(`You lost! ${Math.max(...winning)} to your ${p1Impact}`)
                    // fetch post to api
                    // buttons - newgame,
                    this.setState({
                        summoned: 
                            <button
                                className="end-game-button"
                                onClick={event => this.handleOnEndClick(event)}    
                            >🌌</button>,
                        pool: [...spacesArr],        
                    })
            }
           
              
        }

        this.handleOnClick = event => {
            event.preventDefault();
            (
                this.state.pool.length !== 0 
                && pOneCurrentPosition !== 96
                && pTwoCurrentPosition !== 96
                && pThreeCurrentPosition !== 96
                && pFourCurrentPosition !== 96
                 
            )
            ? this.summon()
            : this.endGame()    
        }


        return (
            <div className="spaces">
                {spaces}
                {imps}
                <PlayerOne playerOne={playerOne} pOneCurrentPosition={pOneCurrentPosition}></PlayerOne> 
                <PlayerTwo playerTwo={playerTwo} pTwoCurrentPosition={pTwoCurrentPosition}></PlayerTwo> 
                <PlayerThree playerThree={playerThree} pThreeCurrentPosition={pThreeCurrentPosition}></PlayerThree> 
                <PlayerFour playerFour={playerFour} pFourCurrentPosition={pFourCurrentPosition}></PlayerFour> 
                
                <div className="summoned">
                    <p className={`${playerOne}`}>{this.state.summoned}</p>
                </div>
                    
                
                <button className="summon" onClick={event => this.handleOnClick(event)}>𖤐</button>         
                
                   
            
                <div className="playingas" style={{gridColumn:"1",gridRow:"18"}}>
                    <p className={`${playerOne}`}>Playing as {elementName}</p>
                </div>
               
            </div>
        )
    }
}



export default connect()(SpacesContainer)