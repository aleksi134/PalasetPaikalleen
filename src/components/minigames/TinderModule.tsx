import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'


const db = [ // db likely has to differentiate cards between university and polytechinal subjects / occupations
    {
        name: 'agrologi',
        url: 'assets/tinder-img/agrologi.png',
        institute: 'polytechnical',
        theme: 'maatalous', // theme could be also keyword/s, also my thematising is bad
    },
    {
        name: 'arkeologia',
        url: 'assets/tinder-img/arkeologia.png',
        institute: 'university',
        theme: 'pitkäjänteisyys',
    },
    {
        name: 'apuvalineteknikko',
        url: 'assets/tinder-img/apuvlineteknikko.png',
        institute: 'polytechnical',
        theme: 'kädentaidot',
    },
    {
        name: 'artenomi',
        url: 'assets/tinder-img/artenomi.png',
        institute: 'polytechnical',
        theme: 'kädentaidot',
    },
    {
        name: 'bioanalyytikko',
        url: 'assets/tinder-img/bioanalyytikko.png',
        institute: 'polytechnical',
        theme: 'kädentaidot',
    },
    {
        name: 'ensihoitaja',
        url: 'assets/tinder-img/ensihoitaja.png',
        institute: 'polytechnical',
        theme: 'hoiva-ala',
    },
]


export interface Props {
    propTypes?: any
    contextTypes?: any
    defaultProps?: any 
    displayName?: any
    children?: any
    /*
    onSwipe: any
    onCardLeftScreen: any
    outOfFrame: (name: string) => void
    swiped:  (direction: React.SetStateAction<string | undefined>, nameToDelete: string, institute: string, theme: string) => void // Actually this doesn't even work (TODO fix it)
    */
}

const TinderModule: React.FC<Props> = () => {
    const occupations = db
    let occupationDir: any[] = [] // this is for saving swiped data

    const [lastDirection, setLastDirection] = useState<string>() // We need directions for user to organize cards in to piles of no / maybe / yes - check instructions in Korkeakoulukortit-2020-2.pdf

    const swiped = (direction: React.SetStateAction<string | undefined>, nameToDelete: string, institute: string, theme: string) => { // these typing are 'quick fix'
        console.log('You swiped: ' + direction)
        console.log('removing ' + nameToDelete + ' from ' + institute + ' with theme of ' + theme)
        occupationDir.push({ dir: direction, name: nameToDelete, institute: institute, theme: theme }) // saving everything just in case calculator needs it
        console.log(occupationDir)
        setLastDirection(direction)
    }

    const outOfFrame = (name: string) => {
        console.log(name + ' left the screen')
    } // TODO maybe remove

    return (
        <div className='module'>
            <div className='cardContainer'>
                {occupations.map((occupation) => (
                    <TinderCard
                        className='swipe'
                        key={occupation.name}
                        onSwipe={(dir: React.SetStateAction<string | undefined>) => swiped(dir, occupation.name, occupation.institute, occupation.theme)}
                        onCardLeftScreen={() => outOfFrame(occupation.name)}
                    >
                        <div style={{ backgroundImage: 'url(' + occupation.url + ')' }} className='card'></div>
                    </TinderCard>
                ))}
            </div>{" "}
            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
        </div>
    )
}

export default TinderModule