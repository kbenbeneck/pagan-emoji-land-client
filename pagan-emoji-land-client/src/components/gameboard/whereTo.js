// take in a selection (moon, sign, etc)
// use current position for pt.A
// case moon  itterate arrays to get closest moon, moving forward only
// case signs move to exact index
 
export function whereTo(selection, pointA) {
    function findBMoons(element) {
        return element > pointA
    }
    
    switch(selection) {
        case '🌑':
            return [0,8,16,24,32,40,48,56,64,72,80,88,96].find(findBMoons);
        case '🌒':
            return [1,9,17,25,33,41,49,57,65,73,81,89,96].find(findBMoons);
        case '🌓':
            return [2,10,18,26,34,42,50,58,66,74,82,90,96].find(findBMoons);
        case '🌔':
            return [3,11,19,27,35,43,51,59,67,75,83,91,96].find(findBMoons);
        case '🌕':
            return [4,12,20,28,36,44,52,60,68,76,84,92,96].find(findBMoons);
        case '🌖':
            return [5,13,21,29,31,45,53,61,69,71,85,93,96].find(findBMoons);
        case '🌗':
            return [6,14,22,30,38,46,54,62,70,78,86,94,96].find(findBMoons);
        case '🌘':
            return [7,15,23,31,39,47,55,63,71,79,87,95,96].find(findBMoons);
        case '♄':
            return 4;
        case '♑':
            return 4;
        case '⛢':
            return 12;
        case '♒':
            return 12;
        case '♓':
            return 20;
        case '♆':
            return 20;
        case '♈':
            return 28;
        case '♂':
            return 28;
        case '♉':
            return 36;
        case '♀':
            return [36,76].reduce((prev, curr) => Math.abs(curr - pointA) < Math.abs(prev - pointA) ? curr : prev);
        case '☿':
            return [44,68].reduce((prev, curr) => Math.abs(curr - pointA) < Math.abs(prev - pointA) ? curr : prev);
        case '♊':
            return 44;
        case '☽︎':
            return 52;
        case '♋':
            return 52;
        case '♌':
            return 60;
        case '☉':
            return 60;
        case '♍':
            return 68;
        case '♎':
            return 76;
        case '♇':
            return 84;
        case '♏':
            return 84;
        case '♐':
            return 92;
        case '♃':
            return 92;
        

        default:
            return 0
    }
}