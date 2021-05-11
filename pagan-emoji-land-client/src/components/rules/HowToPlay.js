import React, { Component } from 'react'

export default class HowToPlay extends Component {
    render() {
        return (
            <div className="how-to-play" style={{textAlign: "center"}}>
              
                <h2><strong>How To Play!</strong></h2>

                <p>
                    <label>
                        <strong>
                            Object:
                        </strong>
                    </label>
                    <br />
                    Leave the most impact before passing the New Moon during the Winter Solstice.
                </p>
                <p>
                    <label>
                        <strong>
                        Leaving Impact:
                        </strong>
                    </label>
                    <br />
                    Impact is left when a player lands on any board space and remains until another element lands on that space. 
                    <br />
                    🌱  🌱  🌱  🜃
                    💧  💧  💧  🜄
                    🌪  🌪  🌪  🜁
                    🔥  🔥  🔥  🜂
                </p>
                <p>
                    <label>
                        <strong>
                        Moving:
                        </strong>
                    </label>
                    <br />
                    Click  <button>𖤐</button> to reach into the macrocosm and reveal a celestial body or seasonal event.
                </p>
                <p>
                    <label >
                        &#127761;
                        &#127762;
                        &#127763;
                        &#127764;
                        &#127765;
                        &#127766;
                        &#127767;
                        &#127768;
                        &#127761;
                    </label>
                    <br />
                    Move ahead to the next space that matches the moon phase.
                </p>
                <p>
                    <label>
                        ♈ ♊ ♋ ♎ ☿ ♃ ♄ ♆ ☉ 
                    </label>
                    <br />                                  
                    Move forward or back to the space that matches the astrological sign or planetary body.
                </p>
                
                <p>
                    <label>
                    <strong>
                        Winning:
                        </strong>
                    </label>
                    <br />
                    The game ends when a player crosses the new moon at space 96 and the game is not tied..
                    Any moon phase may be used.
                    The player with the greatest Impact Score wins.
                </p>
            </div>
        )
    }
}
