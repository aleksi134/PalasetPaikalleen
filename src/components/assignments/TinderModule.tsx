import React, { useState } from 'react'
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/react'
// import { closeCircle } from 'ionicons/icons' // this is for the chips
import TinderCard from 'react-tinder-card'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import { Result } from '../../GameState'
// import './Minigame.scss'
import alavaihtoehdot from './data/alavaihtoehdot'
// import _ from 'lodash'

interface Props {
  state: Result
  done: (result: Result) => void
  cancel: VoidFunction
}

const Assignment: React.FC<Props> = ({ state, done, cancel }) => {
  const occupations = alavaihtoehdot
  /* const uniqFields = _.uniq(Object.values(alavaihtoehdot).map((alavaihtoehto: any) => (alavaihtoehto.field))) // Trying to remove duplicates
  console.log (occupations)
  console.log(uniqFields) */

  let occupationDir: any[] = [] // this is for saving swiped data, though might be obsolete (TODO remove)

  const [lastDirection, setLastDirection] = useState<string>() // directions for user to organize/swipe cards in to "piles", also might be obsolete (TODO remove)
  const [result, setResult] = useState<Result>(state)
  const saveAndClose = () => done(result)
  // const [chips, setChips] = useState('')  // TODO make chips happen

  const swiped = (
    direction: React.SetStateAction<string | undefined>,
    nameToDelete: string,
    institute: string,
    field: string
  ) => {
    console.log('You swiped: ' + direction)
    console.log('removing ' + nameToDelete + ' from ' + institute + ' with field of ' + field)
    occupationDir.push({ dir: direction, name: nameToDelete, institute: institute, field: field }) // saving everything just in case calculator needs it
    console.log(occupationDir)
    setResult(occupationDir)
    setLastDirection(direction) // direction latDirection might be obsolete TODO maybe remove
  }

  const outOfFrame = (name: string) => {
    // Likely this isn't needed (TODO maybe remove)
    console.log(name + ' left the screen')
  }

  return (
    <div className="assignment">
      <AssignmentInstructions title="3.2 KOULUTUSALAT">
        <p>Polut työelämään ja unelmien ammattiin voivat olla hyvin monenlaiset. </p>
        <p>
          Kuinka hyvin tunnet korkeakouluissa opiskeltavat alat? Mitä kaikkia sinua kiinnostavaan
          alaan liittyviä opiskeluvaihtoehtoja Suomesta löytyy? Tutustu Korkeakoulukorttien avulla
          eri aloihin, niihin liittyviin ammatteihin, työtehtäviin, vaatimuksiin sekä taitoihin.
          Valitse itsellesi korteista vähintään kolme tai enintään kuusi kiinnostavaa alaa ja
          tutustu niiden sisältöihin tarkemmin.
        </p>
      </AssignmentInstructions>

      {/* Insert swiping tutorial somewhere TODO */}
      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonLabel>Valitse ala</IonLabel>
            <IonSelect interface="alert" multiple>
              {Object.values(occupations).map((occupation: any) => (
                <IonSelectOption key={occupation.name} value={occupation.field}>
                  {occupation.field}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonCardContent>
        <div className="module">
          <div className="cardContainer">
            {Object.values(occupations).map((occupation: any) => (
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
          {/** TODO remove or include infotext?
          {lastDirection ? (
            <p className="infoText">You swiped {lastDirection}</p>
          ) : (
            <p className="infoText" />
          )} */}
        </div>
        {/* ' TODO Add "swipe to direction X" buttons or not? */}
        {/* <IonCardContent> TODO add chip system
          <IonChip>
            <IonLabel>Button Chip</IonLabel>{' '}
            {/* Label comes from state (e.g. swipedRight, setSwipedRight)
            <IonIcon icon={closeCircle} />
          </IonChip>
        </IonCardContent> */}
      </IonCard>
      <AssignmentFooter isDone={true} />
      <IonButton className="done" onClick={saveAndClose}>
        Merkitse suoritetuksi
      </IonButton>
    </div>
  )
}

export default Assignment
