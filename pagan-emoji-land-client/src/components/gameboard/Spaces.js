import React, { Component } from 'react'
import Player from '../players/Player'
export default class Spaces extends Component {
    render() {
        const { playerOne } = this.props;
        const blankSpaces = []
        const newMoon = <p>&#127761;</p>
        const waxingCrescent = <p>&#127762;</p>
        const firstQuarter = <p>&#127763;</p>
        const waxingGibbous = <p>&#127764;</p>
        const fullMoon = <p>&#127765;</p>
        const waningGibbous = <p>&#127766;</p>
        const lastQuarter = <p>&#127767;</p>
        const waningCrescent = <p>&#127768;</p>
        //8 phases
        const moonCycle = [
            newMoon,
            waxingCrescent,
            firstQuarter,
            waxingGibbous,
            fullMoon,
            waningGibbous,
            lastQuarter,
            waningCrescent
        ]
        //12cycles + last space
        const moons = [
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            newMoon
        ]
        
        const spacesArr = blankSpaces.concat(moons)
        const spaces = spacesArr.map((space, index) => <div className={`space-${index}`} key={index}>{space}</div>)
        
        return (
            <div className="spaces">
                {spaces}
                <Player playerOne={playerOne}/>         
            </div>
        )
    }
}


