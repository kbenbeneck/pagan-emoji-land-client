

export default function manageGame(state = {
    playerOne: '', 
    
}, action) {
    switch (action.type) {
        case 'CHOOSE_PLAYER':
            
            return {
                ...state,
                playerOne: action.payload
            }
        default:
            return state;
    }
}