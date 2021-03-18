export const fetchGames = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_GAME_STATS'})
        fetch('http://localhost:3001/games').then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_STATS', games: responseJSON})
        })
    }
}