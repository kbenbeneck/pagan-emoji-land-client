import React, { Component } from 'react'

export default class ChoosePlayer extends Component {
    render() {
        return (
            <div className="player-choices">
                <button>🜄 Water 🜄</button>
                <button>🜁 Air 🜁</button>
                <button>🜃 Earth 🜃</button>
                <button>🜂 Fire 🜂</button>
            </div>
        )
    }
}
