export default function createGame(obj) {
    fetch('http://localhost:3001/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        },
        body: JSON.stringify(obj)
    })
}