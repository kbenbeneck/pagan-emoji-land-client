export default function manageGame(state = {
    playerOne: '', 
    board: []
}, action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            
            return {
                ...state,
                playerOne: action.payload
            }
        default:
            return state;
    }
}