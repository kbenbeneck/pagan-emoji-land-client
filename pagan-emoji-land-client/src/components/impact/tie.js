// take in arr of positions
    // pos = [p1,p2,p3,p4]

// if any ele === 96, 

export default function tie(posArr) {
    let p1 = posArr[0]
    let p2 = posArr[1]
    let p3 = posArr[2]
    let p4 = posArr[3]
    if (p1 === 96) {return 'MOVE_PLAYER_ONE'}
    if (p2 === 96) {return 'MOVE_PLAYER_TWO'}
    if (p3 === 96) {return 'MOVE_PLAYER_THREE'}
    if (p4 === 96) {return 'MOVE_PLAYER_FOUR'}
        
}