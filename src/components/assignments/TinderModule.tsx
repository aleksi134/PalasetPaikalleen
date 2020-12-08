import {
  IonButton,
  IonCard,
  IonCardContent,
  IonChip,
  IonIcon,
  IonItem,
  IonLabel,
  IonSpinner
} from '@ionic/react'
import { closeCircle } from 'ionicons/icons'
import { findIndex, last, uniqBy, without } from 'lodash'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import TinderCard from 'react-tinder-card'
import { Occupation, occupations, uniqueFields } from '../../data/alavaihtoehdot'
import { allImagesLoaded } from '../../utils'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import AssignmentProgress from '../AssignmentProgress'
import MultiSelect from '../MultiSelect'
import './TinderModule.scss'

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

// const migrateState = (state: any): State =>
//   (Object.values(state || {}).every(isArray)) ? state : defaultState

type Direction = 'left' | 'right'

interface Props {
  state: State
  done: (result: State) => void
  close: VoidFunction
}

const Assignment: React.FC<Props> = ({ state = defaultState, done, close }) => {
  // Old values cause explosions
  // const newState = migrateState(state)

  const [result, setResult] = useState<Occupation[]>([])
  const [fieldSelection, setFieldSelection] = useState<string[]>([])
  const [swipeableCards, setSwipeableCards] = useState<Occupation[]>([])
  const alreadySwipedCards = useRef<Occupation[]>([])
  const childRefs = useRef<Record<string, any>>({})
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const cardsLeft = swipeableCards.length > 0
  // const fieldsSelected = fieldSelection.length > 0

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
      setResult(prev => uniqBy([...prev, occupation], o => o.name))
  }

  // const reset = () => {
  //   setResult([])
  //   setFieldSelection([])
  //   alreadySwipedCards.current = []
  // }

  const removeOccupation = (occupation: Occupation) =>
    setResult(result.filter(o => o.name !== occupation.name))

  const outOfFrame = (occupation: Occupation) =>
    setSwipeableCards(prev => without(prev, occupation))

  const save = () => done({
    result,
    swiped: alreadySwipedCards.current,
    fields: fieldSelection
  })

  // Populate cards on load
  // useLayoutEffect(() => onFieldSelection(fieldSelection), [])

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

  useLayoutEffect(() => {
    const imgs: HTMLImageElement[] = cardsContainerRef
      .current?.querySelectorAll('img.card-img') as any

    if (imgs) {
      setImagesLoaded(false)
      allImagesLoaded(imgs)
        .then(() => setImagesLoaded(true))
    }
  }, [fieldSelection])

  const selectionsRequired = 3
  const selectedCount = result.length
  const isDone = selectedCount >= selectionsRequired

  return (
    <div className="assignment tinder-cards">
      <AssignmentInstructions title="Korkeakoulukortit">
        <p>Polut työelämään ja unelmien ammattiin voivat olla hyvin monenlaiset. Urasuunnittelua
          tehdessäsi on hyvä tietää ja tiedostaa, mitä kaikkea voit opiskella yliopistossa tai
          ammattikorkeakoulussa. Tiesitkö, että erilaisia koulutusaloja on yli 150? Kun perehdyt siihen,
          millaisia tutkinnot ja eri opiskelumuodot ovat, pääset lähemmäksi päätöstä siitä, millainen
          opiskelumuoto, -ala ja koulutus parhaiten soveltuu sinulle.
        </p>
        <p>
          Kuinka hyvin tunnet korkeakouluissa opiskeltavat alat? Mitä kaikkia sinua kiinnostavaan
          alaan liittyviä opiskeluvaihtoehtoja Suomesta löytyy? Tutustu Korkeakoulukorttien avulla
          eri aloihin, niihin liittyviin ammatteihin, työtehtäviin, vaatimuksiin sekä taitoihin.
          Valitse itsellesi korteista vähintään kolme tai enintään kuusi kiinnostavaa alaa ja
          tutustu niiden sisältöihin tarkemmin.
        </p>
        <p>
          Valitse ensin sinua kiinnostavat kategoriat listasta. Tämän jälkeen saat näkyviin kaikki näihin kategorioihin liittyvät alat kortteina. Valitse itsellesi näistä korteista vähintään kolme tai enintään kuusi kiinnostavaa alaa ja tutustu niiden sisältöihin tarkemmin.
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

              <div className={`img-loading ${imagesLoaded ? 'hidden' : 'visible'}`}>
                <IonSpinner color="light" />
                Ladataan kortteja...
              </div>

            </div>
            <div className='buttons'>
              <IonButton disabled={!imagesLoaded} className="left" onClick={() => swipe('left')}>Ei kiinnosta</IonButton>
              <IonButton disabled={!imagesLoaded} className="right" onClick={() => swipe('right')}>Kiinnostaa!</IonButton>
            </div>
          </div>
        }

        {result.length > 0 &&
          <IonCardContent className="chips">
            {result.map(occupation => (
              <IonChip key={occupation.name} onClick={() => removeOccupation(occupation)}>
                <p>{occupation.name}</p>
                <IonIcon icon={closeCircle} />
              </IonChip>
            ))}
          </IonCardContent>
        }
      </IonCard>

      <AssignmentProgress required={selectionsRequired} selected={selectedCount} />
      <AssignmentFooter done={save} close={close} isDone={isDone}>
        <IonCard>
          <IonItem>
            <IonLabel>Loistavaa!</IonLabel>
          </IonItem>
          <IonCardContent>
          <p>Löysit sinulle sopivat alavaihtoehdot korttipakasta. Monipuolinen tieto sinua kiinnostavista koulutusaloista auttaa sinua oman näköisten valintojen tekemisessä sekä ottamaan seuraavan askeleen urasuunnittelun polulla. </p>
          <p>Eivätkö valitsemasi alat tunnukaan omilta? Voit aina palata tehtävään ja valita korttisi uudelleen! </p>
          </IonCardContent>
        </IonCard>
      </AssignmentFooter>
    </div>
  )
}

export default Assignment
