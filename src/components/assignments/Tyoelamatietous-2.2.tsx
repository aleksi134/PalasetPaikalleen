import { IonButton } from '@ionic/react'
import React, { useState } from 'react'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import MultiSelectCorrect from '../MultiSelectCorrect'
import VideoSlides from '../VideoSlides'

type State = { title: string, isCorrect: boolean }[]

interface Props {
  state: State
  done: (result: State) => void
  cancel: VoidFunction
}

const options = [
  { title: 'elinikäinen oppiminen', isCorrect: true },
  { title: 'koulutuksen hyödyt opiskellusta alasta riippumatta', isCorrect: true },
  { title: 'kansainvälisen osaamisen tärkeys', isCorrect: false },
  { title: 'työntekijän kyky itseohjautuvaan työskentelyyn', isCorrect: false },
  { title: 'harrastuksen kautta oman alan löytäminen', isCorrect: true },
  { title: 'uudenlaiset taidot kuten digitaalisuus-, viestintä- ja vastuullisuusosaaminen', isCorrect: true },
  { title: 'korkeakoulutuksen antama suunta työelämään', isCorrect: true },
  { title: 'verkostoitumisosaamisen korostuminen', isCorrect: false },
  { title: 'johonkin tiettyyn osaamisalueeseen keskittyminen opinnoissa', isCorrect: true },
  { title: 'työntekijöiden ja työnantajan arvojen yhteensopivuus', isCorrect: true },
  { title: 'innokkuus uuden oppimiseen keskeisen tärkeää', isCorrect: true },
  { title: 'uudelleenkouluttautumisen tarve', isCorrect: false },
  { title: 'rohkeus ryhtyä yrittäjäksi', isCorrect: false }
]

const videos = [
  '/assets/videos/assignment-2.2/alina.webm',
  '/assets/videos/assignment-2.2/carecare.webm',
  '/assets/videos/assignment-2.2/lietsu.webm',
  '/assets/videos/assignment-2.2/tero.webm',
  '/assets/videos/assignment-2.2/vauhti.webm',
]

const Assignment: React.FC<Props> = ({ state = [], done, cancel }) => {
  const [ result, setResult ] = useState<State>(state)

  const isDone = result.length >= 3
  const saveAndClose = () => done(result)

  return (
    <div>
      <AssignmentInstructions title='Työelämätaitoja oikeasta elämästä'>
        <p> Mitä tärkeitä työelämätaitoja sinulta voisi nyt jo löytyä? Entä mitä pitäisi vielä kehittää? </p>
        <p>Työelämätaitojen tunnistaminen ja niistä tietoiseksi tuleminen tapahtuu monesti oman kokemuksen kautta, mutta myös toisten kokemuksesta voi oppia paljon. Videolla Hurry Oy:n Tero Hyttinen, Huoneistohotelli Lietsun Helena Puhakka-Tarvainen ja Maria Saastamoinen, Joen kotihoiva Oy:n Sari Korhonen, Care Care Oy:n Anneli Muona ja Vauhti Speed Oy:n Esa Puukilainen kertovat ajatuksiaan  nykyisestä työelämästä ja siellä tarvittavista taidoista.</p>
        <p>Mitä tärkeitä työelämään liittyviä teemoja videoilla mainitaan?</p>
      </AssignmentInstructions>

      <VideoSlides urls={videos} />

      <MultiSelectCorrect options={options} selection={result} onChange={setResult} columns={1} />

      <AssignmentFooter isDone={isDone} />

      <IonButton disabled={!isDone} className="done" onClick={saveAndClose}>
        Merkitse suoritetuksi
      </IonButton>
    </div>
  )
}

export default Assignment
