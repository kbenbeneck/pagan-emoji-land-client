        const blankSpaces = []
        const newMoon = <p>&#127761;</p>
        const waxingCrescent = <p>&#127762;</p>
        const firstQuarter = <p>&#127763;</p>
        const waxingGibbous = <p>&#127764;</p>
        const fullMoon = <p>&#127765;</p>
        const waningGibbous = <p>&#127766;</p>
        const lastQuarter = <p>&#127767;</p>
        const waningCrescent = <p>&#127768;</p>

        const aries = <p>♈</p>
        const taurus = <p>♉</p>
        const gemini = <p>♊</p>
        const cancer = <p>♋</p>
        const leo = <p>♌</p>
        const virgo = <p>♍</p>
        const libra = <p>♎</p>
        const scorpio = <p>♏</p>
        const sagittarius = <p>♐</p>
        const capricorn = <p>♑</p>
        const aquarius = <p>♒</p>
        const pisces = <p>♓</p>

        const mercury = <p>☿</p>
        const venus = <p>♀</p>
        const mars = <p>♂</p>
        const jupiter = <p>♃</p>
        const saturn = <p>♄</p>
        const uranus = <p>⛢</p>
        const neptune = <p>♆</p>
        const basicMoon = <p>☽︎</p>
        const sun = <p>☉</p>
        const pluto = <p>♇</p>

        
        //97-121
        const signsBodies = [
            aries, taurus, gemini, cancer, 
            leo, virgo, libra, scorpio,
            sagittarius, capricorn, aquarius, pisces,
            saturn, uranus, neptune, mars, venus,
            mercury, basicMoon, sun, mercury,
            venus, pluto, jupiter

        ]
        //8 phases
        const moonCycle = [
            newMoon,
            waxingCrescent,
            firstQuarter,
            waxingGibbous,
            fullMoon,
            waningGibbous,
            lastQuarter,
            waningCrescent
        ]
        //12cycles + last space
        const moons = [
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            ...moonCycle,
            newMoon
        ]
        
        export const spacesArr = blankSpaces.concat(moons, signsBodies)