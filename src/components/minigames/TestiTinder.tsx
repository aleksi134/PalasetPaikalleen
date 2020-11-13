import React, { useState } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonChip,
  IonIcon,
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
} from '@ionic/react'
import TinderCard from 'react-tinder-card'
import { pin, heart, closeCircle, close } from 'ionicons/icons'
import { Result } from '../../GameState'
// import TinderModule from './TinderModule';
import './Minigame.scss'

interface Props {
  state: Result
  done: (result: Result) => void
}

const db = [
  // db likely has to differentiate cards between university and polytechinal subjects / occupations
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

const MiniGame: React.FC<Props> = ({ state, done }) => {
  const occupations = db
  let occupationDir: any[] = [] // this is for saving swiped data

  const [lastDirection, setLastDirection] = useState<string>() // We need directions for user to organize cards in to piles of no / maybe / yes - check instructions in Korkeakoulukortit-2020-2.pdf
  const [result, setResult] = useState<Result>(state)
  const saveAndClose = () => done(result)

  const swiped = (
    direction: React.SetStateAction<string | undefined>,
    nameToDelete: string,
    institute: string,
    theme: string
  ) => {
    // these typing are 'quick fix'
    console.log('You swiped: ' + direction)
    console.log('removing ' + nameToDelete + ' from ' + institute + ' with theme of ' + theme)
    occupationDir.push({ dir: direction, name: nameToDelete, institute: institute, theme: theme }) // saving everything just in case calculator needs it
    console.log(occupationDir)
    setResult(occupationDir) // ???
    setLastDirection(direction)
  }

  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen')
  } // TODO maybe remove

  return (
    <div className="container minigame">
      <IonCard>
        <IonItem>
          <img
            style={{ width: '60px' }}
            src="assets/kuunteleva.png"
            alt="kuunteleva"
            slot="start"
          />
          <IonLabel>Kohti korkeakoulua!</IonLabel>
        </IonItem>

        <IonCardContent>
          <p>
            Tässä on ammattikorkeakoulujen ja yliopistojen koulutusalat esittelyssä. Käy kortteja
            läpi laittaen ne kolmeen korttipinoon (kyllä, ei ja ehkä -pinot) swaippaamalla. Swaippaa
            oikealle kiinnostavat, ylös tai alas ehkä kiinnostavat ja vasemmalle ei kiinnostavat
            kortit.
          </p>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <div className="module">
          <div className="cardContainer">
            {occupations.map((occupation) => (
              <TinderCard
                className="swipe"
                key={occupation.name}
                onSwipe={(dir: React.SetStateAction<string | undefined>) =>
                  swiped(dir, occupation.name, occupation.institute, occupation.theme)
                }
                onCardLeftScreen={() => outOfFrame(occupation.name)}
              >
                <div
                  style={{ backgroundImage: 'url(' + occupation.url + ')' }}
                  className="card"
                ></div>
              </TinderCard>
            ))}
          </div>
          {/** 
          {lastDirection ? (
            <p className="infoText">You swiped {lastDirection}</p>
          ) : (
            <p className="infoText" />
          )} */}
        </div>
        {/* ' Add "swipe to direction X" buttons?' */}
        <IonCardContent>
          {/* <IonChip>
          <IonLabel>Default</IonLabel>
        </IonChip>

        <IonChip>
          <IonLabel color="secondary">Secondary Label</IonLabel>
        </IonChip>

        <IonChip color="secondary">
          <IonLabel color="dark">Secondary w/ Dark label</IonLabel>
        </IonChip>

        <IonChip>
          <IonIcon icon={pin} />
          <IonLabel>Default</IonLabel>
        </IonChip>

        <IonChip>
          <IonIcon icon={heart} color="dark" />
          <IonLabel>Default</IonLabel>
        </IonChip> */}

          <IonChip>
            <IonLabel>Button Chip</IonLabel> {/* Label comes from state (e.g. swipedRight, setSwipedRight) */}
            <IonIcon icon={closeCircle} />
          </IonChip>

          {/*
        <IonChip>
          <IonIcon icon={pin} color="primary" />
          <IonLabel>Icon Chip</IonLabel>
          <IonIcon icon={close} />
        </IonChip> */}

          <IonChip>
            <IonAvatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" /> {/* Palaset paikalleen asset tähän? */}
            </IonAvatar>
            <IonLabel>Avatar Chip</IonLabel> {/* Label comes from state (e.g. swipedRight, setSwipedRight) */}
            <IonIcon icon={closeCircle} />
          </IonChip>
        </IonCardContent>
      </IonCard>

      {/*  <IonCard>
      
      </IonCard> */}

      <IonButton className="done" onClick={saveAndClose}>
        Merkitse suoritetuksi
      </IonButton>
    </div>
  )
}

export default MiniGame
