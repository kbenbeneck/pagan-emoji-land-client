export default function whosWinning(arr) {
    
    let hiScore = Math.max(...arr)
    let winningArr = []
    let findWinners = () => arr.map((score, index) => {
        score === hiScore
        ? winningArr.push(score)
        : console.log()
        
        
    })
    
    return findWinners(), winningArr 
}