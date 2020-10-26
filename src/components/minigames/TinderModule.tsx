import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

// db likely has to differentiate cards between university and polytechinal subjects / occupations
const db = [
    {
        name: "agrologi",
        url: "./img/agrologi.png",
        institute: "polytechnical",
        theme: "maatalous",
    },
    {
        name: "arkeologia",
        url: "./img/arkeologia.png",
        institute: "university",
        theme: "pitkäjänteisyys",
    },
    {
        name: "apuvalineteknikko",
        url: "./img/apuvlineteknikko.png",
        institute: "polytechnical",
        theme: "kädentaidot",
    },
    {
        name: "artenomi",
        url: "./img/artenomi.png",
        institute: "polytechnical",
        theme: "kädentaidot",
    },
    {
        name: "bioanalyytikko",
        url: "./img/bioanalyytikko.png",
        institute: "polytechnical",
        theme: "kädentaidot",
    },
    {
        name: "ensihoitaja",
        url: "./img/ensihoitaja.png",
        institute: "polytechnical",
        theme: "hoiva-ala",
    },
];

/*
interface TinderProps {
    
} 


type TinderProps = {
    className?: string,
    direction: any,
    swipe: any,
}



declare module 'react-tinder-card' {
    // type definitions goes here
    type TinderCard = {
        className?: string
    }
    
}
*/

const TinderModule: React.FC<TinderProps> = () => {
    const occupations = db;

    const [lastDirection, setLastDirection] = useState<string>(); // We need directions for user to organize cards in to piles of no / maybe / yes - check instructions in Korkeakoulukortit-2020-2.pdf

    const swiped = (direction, nameToDelete) => {
        console.log("You swiped: " + direction);
        console.log("removing " + nameToDelete);
        setLastDirection(direction);
        // argument for saving nameToDelete + direction data for pile ordering and in the end for the calculator to calculate
    };

    const outOfFrame = (name: string) => {
        console.log(name + " left the screen");
    }; // TODO maybe remove

    return (
        <div className="module">
            <link href="https://fonts.googleapis.com/css?family=Damion&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Alatsi&display=swap" rel="stylesheet" />
            <div className="cardContainer">
                {occupations.map((occupation) => (
                    <TinderCard
                        className="swipe"
                        key={occupation.name}
                        onSwipe={(dir) => swiped(dir, occupation.name)}
                        onCardLeftScreen={() => outOfFrame(occupation.name)}
                    >
                        <div style={{ backgroundImage: "url(" + occupation.url + ")" }} className="card"></div>
                    </TinderCard>
                ))}
            </div>
            {/* eslint-disable-next-line */}
            {lastDirection ? <h2 className="infoText">You swiped {lastDirection}</h2> : <h2 className="infoText" />}
        </div>
    );
}

export default TinderModule;
