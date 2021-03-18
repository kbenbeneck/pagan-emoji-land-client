import {position} from './positions'

// pointA to point B
// forward or backwaord?
// how many hops?
// get each position in between
// set up posititions to disp move to

// [here, here, here, ptB]
//0-96 spaces
let arr = [...Array(97).keys()]



export function hops(a, b) {
    // (a > b) 
    // ? hopBack 
    
    // : hopForward
    
    let hopForward = arr.filter(function(num) {
        return (num >= a && num <= b)
        
        // return (num > a && num <= b)
    
    })
    let hopBack = arr.filter(function(num) {
       return (num <= a && num >= b)
        
        
    })

    return ( a <= b ) ? hopForward : hopBack.reverse()
    

    
}




// arr.reduce((prev, curr) => Math.abs(curr - pointA) < Math.abs(prev - pointA) ? curr : prev)