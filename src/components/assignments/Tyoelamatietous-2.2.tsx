import { IonButton, IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import MultiSelectCorrect from '../MultiSelectCorrect'
import VideoSlides from '../VideoSlides'

type State = { title: string, isCorrect: boolean }[]

interface Props {
  state: State
  done: (result: State) => void
  close: VoidFunction
}

const options = [
  { title: 'elinikäinen oppiminen', isCorrect: true },
  { title: 'koulutuksen hyödyt opiskellusta alasta riippumatta', isCorrect: true },
  { title: 'kansainvälisen osaamisen tärkeys', isCorrect: false },
  { title: 'työntekijän kyky itseohjautuvaan työskentelyyn', isCorrect: false },
  { title: 'harrastuksen kautta oman alan löytäminen', isCorrect: true },
  { title: 'uudenlaiset taidot kuten digitaalisuus-, viestintä- ja vastuullisuusosaaminen', isCorrect: true },
  { title: 'luovuus', isCorrect: false },
  { title: 'korkeakoulutuksen antama suunta työelämään', isCorrect: true },
  { title: 'verkostoitumisosaaminen', isCorrect: true },
  { title: 'johonkin tiettyyn osaamisalueeseen keskittyminen opintojen aikana', isCorrect: true },
  { title: 'kriittinen ajattelu työssä', isCorrect: false },
  { title: 'työntekijöiden ja työnantajan arvojen yhteensopivuus', isCorrect: true },
  { title: 'innokkuus uuden oppimiseen keskeisen tärkeää', isCorrect: true },
  { title: 'uudelleenkouluttautumisen tarve', isCorrect: false },
  { title: 'projektimainen työskentely', isCorrect: false },
  { title: 'rohkeus ryhtyä yrittäjäksi', isCorrect: true }
]

// const correctCount = options.filter(o => o.isCorrect).length

const videos = [
  '/assets/videos/assignment-2.2/lietsu.webm',
  '/assets/videos/assignment-2.2/tero.webm',
  '/assets/videos/assignment-2.2/alina.webm',
  '/assets/videos/assignment-2.2/vauhti.webm',
  '/assets/videos/assignment-2.2/carecare.webm',
]

const Assignment: React.FC<Props> = ({ state = [], done, close }) => {
  const [ result, setResult ] = useState<State>(state)

  const isDone = true

  return (
    <div>
      <AssignmentInstructions title='Työelämätaidot ammattilaisten silmin'>
        <p>Urasuunnittelun tekemisessä on keskeisen tärkeää saada ajantasaista tietoa työelämästä ja siinä tarvittavista taidoista. Nämä taidot voivat auttaa sinua oman tulevan alasi valinnassa sekä sen hahmottamisessa, minkälaisia työelämätaitoja kiinnostava ala vaatii.  </p>
        <p>Työelämätaitojen tunnistaminen ja niistä tietoiseksi tuleminen tapahtuu monesti oman kokemuksen kautta, mutta myös toisten kokemuksesta voi oppia paljon. Videolla Huoneistohotelli Lietsun Helena Puhakka-Tarvainen ja Maria Saastamoinen, Hurry Oy:n Tero Hyttinen, Joen kotihoiva Oy:n Sari Korhonen, Vauhti Speed Oy:n Esa Puukilainen ja Care Care Oy:n Anneli Muona kertovat ajatuksiaan nykyisestä työelämästä ja siellä tarvittavista taidoista.</p>
        <p>Mitä tärkeitä työelämään liittyviä teemoja videoilla mainitaan?</p>
      </AssignmentInstructions>

      <VideoSlides urls={videos} />

      <MultiSelectCorrect options={options} selection={result} onChange={setResult} columns={1} />

      <AssignmentFooter done={() => done(result)} close={close} isDone={isDone}>
        <IonCard>
          <IonItem>
            <IonLabel>Erinomaista!</IonLabel>
          </IonItem>
          <IonCardContent>
            <p>Nyt olet tutustunut työelämäntaitoihin ja teemoihin, jotka ovat tärkeitä nykyisessä työelämässä. Pidä nämä teemat mielessäsi ja ota rohkeasti seuraava askel urasuunnittelun polulla. </p>
          </IonCardContent>
        </IonCard>
      </AssignmentFooter>

    </div>
  )
}

export default Assignment
