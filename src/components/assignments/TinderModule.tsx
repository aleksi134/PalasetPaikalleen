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
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonItemDivider,
} from '@ionic/react'
import { pin, heart, closeCircle, close } from 'ionicons/icons'
import TinderCard from 'react-tinder-card'
import AssignmentInstructions from '../AssignmentInstructions'
import { Result } from '../../GameState'
// import './Minigame.scss'

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
    field: 'Maa- ja metsätalous', // is there better synonym?
  },
  {
    name: 'arkeologia',
    url: 'assets/tinder-img/arkeologia.png',
    institute: 'university',
    field: 'Humanistiset alat ja teologia',
  },
  {
    name: 'apuvalineteknikko',
    url: 'assets/tinder-img/apuvlineteknikko.png',
    institute: 'polytechnical',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'artenomi',
    url: 'assets/tinder-img/artenomi.png',
    institute: 'polytechnical',
    field: 'Taiteet ja kulttuuri',
  },
  {
    name: 'bioanalyytikko',
    url: 'assets/tinder-img/bioanalyytikko.png',
    institute: 'polytechnical',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'ensihoitaja',
    url: 'assets/tinder-img/ensihoitaja.png',
    institute: 'polytechnical',
    field: 'Terveys ja hyvinvointi',
  },
]

const MiniGame: React.FC<Props> = ({ state, done }) => {
  const occupations = db
  let occupationDir: any[] = [] // this is for saving swiped data, though might be obsolete (TODO remove)

  const [lastDirection, setLastDirection] = useState<string>() // We need directions for user to organize cards in to piles of no / maybe / yes - check instructions in Korkeakoulukortit-2020-2.pdf
  const [result, setResult] = useState<Result>(state)
  const saveAndClose = () => done(result)
  // const [chips, setChips] = useState('')  // TODO make chips happen

  const swiped = (
    direction: React.SetStateAction<string | undefined>,
    nameToDelete: string,
    institute: string,
    field: string
  ) => {
    // these typing are 'quick fix'
    console.log('You swiped: ' + direction)
    console.log('removing ' + nameToDelete + ' from ' + institute + ' with field of ' + field)
    occupationDir.push({ dir: direction, name: nameToDelete, institute: institute, field: field }) // saving everything just in case calculator needs it
    console.log(occupationDir)
    setResult(occupationDir) // ???
    setLastDirection(direction) // direction latDirection might be obsolete TODO maybe remove
  }

  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen')
  } // Likely this isn't needed (TODO maybe remove)

  return (
    <div className="assignment">
      <AssignmentInstructions
        title="3.2 KOULUTUSALAT"
        description="Polut työelämään ja unelmien ammattiin voivat olla hyvin monenlaiset. Kuinka hyvin tunnet korkeakouluissa opiskeltavat alat? Mitä kaikkia sinua kiinnostavaan alaan liittyviä opiskeluvaihtoehtoja Suomesta löytyy? Tutustu Korkeakoulukorttien avulla eri aloihin, niihin liittyviin ammatteihin, työtehtäviin, vaatimuksiin sekä taitoihin. Valitse itsellesi korteista vähintään kolme tai enintään kuusi kiinnostavaa alaa ja tutustu niiden sisältöihin tarkemmin."
      />

      {/* Insert swiping tutorial somewhere TODO
      <p> 
        Tässä on ammattikorkeakoulujen ja yliopistojen koulutusalat esittelyssä. Käy kortteja
        läpi laittaen ne kolmeen korttipinoon (kyllä, ei ja ehkä -pinot) swaippaamalla. Swaippaa
        oikealle kiinnostavat, ylös tai alas ehkä kiinnostavat ja vasemmalle ei kiinnostavat
        kortit.
      </p> */}

      <IonCard>
        <IonCardContent>
          {/* TODO insert ion-select */}
          <IonItem>
          <IonLabel>Valitse ala</IonLabel>
          <IonSelect interface="alert" multiple> 
            {occupations.map((occupation) => ( /* just testing if this works TODO make sure this works */
                <IonSelectOption key={occupation.name} value={occupation.field}>{occupation.field}</IonSelectOption>
            ))}
            <IonSelectOption value="merkkijono">Testimerkkijono</IonSelectOption> {/* TODO remove because this are obsolete */}
          </IonSelect>
        </IonItem>
        </IonCardContent>
        <div className="module">
          <div className="cardContainer">
            {occupations.map((occupation) => (
              <TinderCard
                className="swipe"
                key={occupation.name}
                onSwipe={(dir: React.SetStateAction<string | undefined>) =>
                  swiped(dir, occupation.name, occupation.institute, occupation.field)
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
          <IonChip>
            <IonLabel>Button Chip</IonLabel>{' '}
            {/* Label comes from state (e.g. swipedRight, setSwipedRight) */}
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
