


export default function manageGame(state = {
    playerOne: '',
    playerTwo: '',
    playerThree: '',
    playerFour: '',
    p1Impact: 0,
    p2Impact: 0,
    p3Impact: 0,
    p4Impact: 0,
    pOneCurrentPosition: 0,
    pTwoCurrentPosition: 0,
    pThreeCurrentPosition: 0,
    pFourCurrentPosition: 0,
    loading: false,
    elementName: '',
    winning: [],
    games: [],
    searchResults: []
     
}, action) {
    switch (action.type) {
        case 'CHOOSE_PLAYERS':
            
            return {
                ...state,
                playerOne: action.payload.playerOne,
                playerTwo: action.payload.playerTwo,
                playerThree: action.payload.playerThree,
                playerFour: action.payload.playerFour,
                players: action.payload.players,
                elementName: action.payload.elementName
            }
        
        case 'MOVE_PLAYER_ONE':

            return {
                ...state,
                pOneCurrentPosition: action.payload
            }
        
        case 'MOVE_PLAYER_TWO':

            return {
                ...state,
                pTwoCurrentPosition: action.payload
            }
        
        case 'MOVE_PLAYER_THREE':

            return {
                ...state,
                pThreeCurrentPosition: action.payload
            }

        case 'MOVE_PLAYER_FOUR':

            return {
                ...state,
                pFourCurrentPosition: action.payload
            }

        case 'LIVE_SCORE':
            
            return{
                ...state,
                p1Impact: action.payload.p1impact,
                p2Impact: action.payload.p2impact,
                p3Impact: action.payload.p3impact,
                p4Impact: action.payload.p4impact,
                winning: action.payload.winning  
            }

        case 'END_GAME':
            return {
                
                    playerOne: '',
                    playerTwo: '',
                    playerThree: '',
                    playerFour: '',
                    p1Impact: 0,
                    p2Impact: 0,
                    p3Impact: 0,
                    p4Impact: 0,
                    pOneCurrentPosition: 0,
                    pTwoCurrentPosition: 0,
                    pThreeCurrentPosition: 0,
                    pFourCurrentPosition: 0,
                    loading: true,
                    elementName: '',
                    winning: [],
                    games: [...state.games]
                    
                    
                
            }
            
        case 'LOADING_GAME_STATS':
            return {
                ...state,
                games: [...state.games],
                loading: true
            }
        case 'ADD_STATS': 
            return {
                ...state,
                games: action.games,
                searchResults: action.games,
                loading: false
            }

        case 'SEARCH':
            return {
                ...state,
                searchResults: state.games.filter(g => {
                    return g.name.toLowerCase().includes(action.payload)
                })
            }
        default:
            return state;
    }
}