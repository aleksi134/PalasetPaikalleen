import {
  IonButton,
  IonCard,
  IonCardContent,
  IonChip,
  IonIcon,
  IonItem,
  IonLabel
} from '@ionic/react'
import { closeCircle } from 'ionicons/icons'
import { findIndex, isArray, last, without } from 'lodash'
import React, { useLayoutEffect, useRef, useState } from 'react'
import TinderCard from 'react-tinder-card'
import { Result } from '../../GameState'
import AssignmentInstructions from '../AssignmentInstructions'
import MultiSelect from '../MultiSelect'
import { Occupation, occupations, uniqueFields } from '../../data/alavaihtoehdot'
import './TinderModule.scss'
import AssignmentFooter from '../AssignmentFooter'

type State = {
  swiped: Occupation[]
  result: Occupation[]
  fields: string[]
}

const defaultState: State = {
  swiped: [],
  result: [],
  fields: []
}

const migrateState = (state: any): State =>
  (Object.keys(state || {}).every(isArray)) ? state : defaultState

type Direction = 'left' | 'right'

interface Props {
  state: State
  done: (result: State) => void
  close: VoidFunction
}

const Assignment: React.FC<Props> = ({ state = defaultState, done, close }) => {
  // Old values cause explosions
  const newState = migrateState(state)

  const [result, setResult] = useState<Occupation[]>(newState.result)
  const [fieldSelection, setFieldSelection] = useState<string[]>(newState.fields)
  const [swipeableCards, setSwipeableCards] = useState<Occupation[]>([])
  const alreadySwipedCards = useRef<Occupation[]>(newState.swiped)
  const childRefs = useRef<Record<string, any>>({})

  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const cardsLeft = swipeableCards.length > 0
  const fieldsSelected = fieldSelection.length > 0

  const setChildRef = (occupation: Occupation) => (ref: any) =>
    childRefs.current[occupation.name] = ref

  const onFieldSelection = (selection: string[]) => {
    setFieldSelection(selection)
    const fieldCards = occupations.filter(o => selection.includes(o.field))
    setSwipeableCards(without(fieldCards, ...alreadySwipedCards.current))
  }

  const swipe = (dir: Direction) => {
    const cards = swipeableCards.slice().reverse()
    const lastIndex = findIndex(cards, o => o.name === last(alreadySwipedCards.current)?.name)
    const current = lastIndex > -1 ? cards[lastIndex + 1] : cards[0]

    if (current) {
      const currentRef: { swipe: (dir: Direction) => void } = childRefs.current[current.name]
      currentRef.swipe(dir)
    }
  }

  const onSwipe = (dir: Direction, occupation: Occupation) => {
    alreadySwipedCards.current.push(occupation)

    if (dir === 'right')
      setResult(prev => [...prev, occupation])
  }

  const reset = () => {
    setResult([])
    setFieldSelection([])
    alreadySwipedCards.current = []
  }

  const removeOccupation = (occupation: Occupation) =>
    setResult(result.filter(o => o.name !== occupation.name))

  const outOfFrame = (occupation: Occupation) =>
    setSwipeableCards(prev => without(prev, occupation))

  const save = () => done({
    result,
    swiped: alreadySwipedCards.current,
    fields: fieldSelection
  })

  // Update image height once loaded
  useLayoutEffect(() => {
    const img: HTMLImageElement = cardsContainerRef
      .current?.querySelector('img.card-img') as any

    if (img) {
      const onLoad = () => {
        if (cardsContainerRef.current) {
          cardsContainerRef.current.style.height = `${img?.height}px`
          img.removeEventListener('load', onLoad)
        }
      }

      img.addEventListener('load', onLoad)
    }
  })

  return (
    <div className="assignment tinder-cards">
      <AssignmentInstructions title="Korkeakoulukortit">
        <p>Polut työelämään ja unelmien ammattiin voivat olla hyvin monenlaiset. </p>
        <p>
          Kuinka hyvin tunnet korkeakouluissa opiskeltavat alat? Mitä kaikkia sinua kiinnostavaan
          alaan liittyviä opiskeluvaihtoehtoja Suomesta löytyy? Tutustu Korkeakoulukorttien avulla
          eri aloihin, niihin liittyviin ammatteihin, työtehtäviin, vaatimuksiin sekä taitoihin.
          Valitse itsellesi korteista vähintään kolme tai enintään kuusi kiinnostavaa alaa ja
          tutustu niiden sisältöihin tarkemmin.
        </p>
      </AssignmentInstructions>

      <h3>Valitse sinua kiinnostavat alat</h3>
      <MultiSelect options={uniqueFields} selection={fieldSelection} onChange={onFieldSelection} columns={1} />

      <IonCard>
        {cardsLeft &&
          <div className="module">
            <div ref={cardsContainerRef} className="cards-container">
              {swipeableCards.map((occupation) => (
                <TinderCard
                  // @ts-ignore
                  ref={setChildRef(occupation)}
                  key={occupation.name}
                  // @ts-ignore
                  className="card"
                  onSwipe={dir => onSwipe(dir as any, occupation)}
                  onCardLeftScreen={() => outOfFrame(occupation)}
                >
                  <img className="card-img" src={occupation.url} alt="" />
                  {/* <div
                    style={{ backgroundImage: 'url(' + occupation.url + ')' }}
                    className="card-img"
                  /> */}
                </TinderCard>
              ))}
            </div>
            <div className='buttons'>
              <IonButton className="left" onClick={() => swipe('left')}>Ei kiinnosta</IonButton>
              <IonButton className="right" onClick={() => swipe('right')}>Kiinnostaa!</IonButton>
            </div>
          </div>
        }

        {!cardsLeft && fieldsSelected &&
          <React.Fragment>
            <IonItem>
              <IonLabel>Loistavaa!</IonLabel>
            </IonItem>
            <IonCardContent>
              <p>Löysit sinulle sopivat alavaihtoedot korttipakasta. Monipuolinen tieto sinua kiinnostavista koulutusaloista auttaa sinua oman näköisten valintojen tekemisessä sekä ottamaan seuraavan askeleen urasuunnittelun polulla.</p>

              <p>Eikö tulokset miellytä? Valitse lisää aloja tai pelaa uudelleen!</p>
              <IonButton onClick={reset}>Aloita alusta!</IonButton>

            </IonCardContent>
          </React.Fragment>
        }

        <IonCardContent className="chips">
          {result.map(occupation => (
            <IonChip key={occupation.name} onClick={() => removeOccupation(occupation)}>
              <p>{occupation.name}</p>
              <IonIcon icon={closeCircle} />
            </IonChip>
          ))}
        </IonCardContent>
      </IonCard>

      <AssignmentFooter done={save} close={close} isDone={true} />
    </div>
  )
}

export default Assignment
