import whosWinning from "./whosWinning"

export default function countImpact(impactArr, symsArr) {
    let p1s = symsArr[0]
    let p2s = symsArr[1]
    let p3s = symsArr[2]
    let p4s = symsArr[3]
    
    
    let acc = impactArr.reduce((acc, sym) => 
        acc.set(sym, 1 + (acc.get(sym) || 0)), new Map())
    
    let p1i = () => acc.get(p1s)
    let p2i = () => acc.get(p2s)
    let p3i = () => acc.get(p3s)
    let p4i = () => acc.get(p4s)

    let impScrs = [p1i(),p2i(),p3i(),p4i()]
    let hiScrs = () => whosWinning(impScrs)
    
    return {
        p1impact: p1i(),
        p2impact: p2i(),
        p3impact: p3i(),
        p4impact: p4i(),
        winning: hiScrs()
        
    }
        
    
}