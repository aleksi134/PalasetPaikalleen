import { IonButton, IonSlide, IonSlides } from '@ionic/react'
import { orderBy } from 'lodash'
import React, { useState } from 'react'
import Swiper from 'swiper'
import { Occupation } from '../../data/alavaihtoehdot'
import { Score } from '../assignments/Valintojentekeminen-5.2'
import './Calculator.scss'
import CalculatorResults from './CalculatorResults'
import FactorSelector from './FactorSelector'
import OccupationsSelector from './OccupationsSelector'
import ProbabilitySelector from './ProbabilitySelector'

export const calculateOptionScore = (factors: Factor[], probabilities: Probabilities[string]) =>
  factors.reduce((acc, factor) => acc + ((factor?.score || 1) * (probabilities?.[factor.name] || 1)), 0)

export type Factor = {
  name: string
  score: number
  isChecked: boolean
}

export type Propability = {
  occupation: string
  factor: string
  probability: number
}

export type Probabilities = {
  [key: string]: {
    [key: string]: number
  }
}

const factors: Factor[] = [
  { name: 'Työn kiinnostavuus', score: 1, isChecked: true },
  { name: 'Hyvä palkkaus', score: 1, isChecked: true },
  { name: 'Hyvä työllisyystilanne', score: 1, isChecked: true },
  { name: 'Arvojesi mukainen työ', score: 1, isChecked: true },
  { name: 'Joustavat työajat', score: 1, isChecked: true },
]

interface Props {
  occupations: Occupation[]
  onResult: (result: any) => void
}

const Calculator: React.FC<Props> = ({ occupations = [], onResult }) => {
  const [swiper, setSwiper] = useState<Swiper>()
  const [activeIndex, setActiveIndex] = useState(0)

  const [occupationSelection, setOccupationSelection] = useState<Record<string, boolean>>({})
  const [factorSelection, setFactorSelection] = useState<Factor[]>(factors)
  const [probabilitySelection, setProbabilitySelection] = useState<Probabilities>({})
  const [scores, setScores] = useState<Score[]>([])

  const selectedOccupations = Object.entries(occupationSelection)
    .filter(([key, value]) => value).map(([key]) => key)
  const selectedFactors = factorSelection.filter(f => f.isChecked)


  const calculateScore = () => {
    const ret = selectedOccupations.reduce((acc, o) => ([
      ...acc, { occupation: o, score: calculateOptionScore(factors, probabilitySelection[o]) }
    ]), [] as { occupation: string, score: number }[])

    const scores = orderBy(ret, ['score'], ['desc'])

    // TODO lift state up
    setScores(scores)
    onResult(scores)
  }

  // console.log({selectedOccupations})
  // console.log({selectedFactors})

  const canSlideNext = () => {
    switch (activeIndex) {
      case 0: return Object.keys(occupationSelection).length >= 3
      case 1: return selectedFactors.length >= 1
      case 2: return true
      case 3: return false
      default: return true
    }
  }

  const canSlidePrev = () => activeIndex > 0


  const slidesRef = async (ref: HTMLIonSlidesElement) => {
    if (ref) {
      const swiper: Swiper = await ref.getSwiper()
      setSwiper(swiper)
      setActiveIndex(swiper.activeIndex)
    }
  }

  const onSlideWillChange = () => {
    setActiveIndex(swiper?.activeIndex || 0)
    if (swiper?.activeIndex === 3) {
      calculateScore()
    }
  }

  return (
    <div className="calculator">
      <IonSlides
        onIonSlideWillChange={onSlideWillChange}
        ref={slidesRef}
        pager={false}
        options={{ allowTouchMove: false, initialSlide: 0 }}
      >
        <IonSlide>
          {activeIndex === 0 &&
            <OccupationsSelector
              occupations={occupations}
              selection={occupationSelection}
              onChange={setOccupationSelection}
            />
          }
        </IonSlide>

        <IonSlide>
          {activeIndex === 1 &&
            <FactorSelector
              factors={factorSelection}
              onChange={setFactorSelection}
            />
          }
        </IonSlide>

        <IonSlide>
          {activeIndex === 2 &&
            <ProbabilitySelector
              occupations={selectedOccupations}
              factors={selectedFactors}
              probabilities={probabilitySelection}
              onChange={setProbabilitySelection}
            />
          }
        </IonSlide>

        <IonSlide>
          {activeIndex === 3 &&
            <CalculatorResults
              occupations={selectedOccupations}
              scores={scores}
            />
          }
        </IonSlide>

      </IonSlides>

      <IonButton disabled={!canSlidePrev()} onClick={() => swiper?.slidePrev()}>Edellinen</IonButton>
      <IonButton disabled={!canSlideNext()} onClick={() => swiper?.slideNext()}>Seuraava</IonButton>
    </div>
  )
}

export default Calculator
