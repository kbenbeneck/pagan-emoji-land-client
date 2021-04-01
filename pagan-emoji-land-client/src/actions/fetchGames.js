export const fetchGames = () => {
    console.log('b')
    return (dispatch) => {
        console.log('c')
        dispatch({ type: 'LOADING_GAME_STATS'})
        fetch('http://localhost:3001/games').then(response => {
            return response.json()
        }).then(responseJSON => {
            console.log('d')
            dispatch({ type: 'ADD_STATS', games: responseJSON})
        })
        console.log('e')
    }
    console.log('f')
}