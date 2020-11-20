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
  { title: 'Monimuoto-opiskelu korkeakoulussa', isCorrect: true },
  { title: 'Opiskelijoiden terveyspalvelut', isCorrect: false },
  { title: 'Erilaiset tukitoimia tarjoavat ohjaustoimijat, kuten Erilaiset oppijat ja Etsivä nuorisotyö', isCorrect: true },
  { title: 'Rohkeus valintojen tekemiseen tässä hetkessä', isCorrect: true },
  { title: 'Tukikäytännöt opiskelussa, kuten pidempi tenttiaika', isCorrect: true },
  { title: 'Tuutoriopiskelijoiden tarjoama tuki opintojen alussa', isCorrect: false },
  { title: 'Opintojen keskeyttäminen ja niiden jatkaminen myöhemmin', isCorrect: false },
  { title: 'Valintakokeisiin valmisteleva lukupiiri ', isCorrect: true },
  { title: 'Itselle sopivien opiskelumenetelmien löytäminen', isCorrect: true },
  { title: 'Tuen hakeminen ja kyky ottaa vastaan apua', isCorrect: true },
  { title: 'Vaihtoehtoiset suoritustavat opinnoissa', isCorrect: true },
  { title: 'Saavutettavuus opintomateriaaleissa', isCorrect: false },
]


const videos = [
  '/assets/videos/assignment-4.1/mari.webm',
  '/assets/videos/assignment-4.1/olli.webm',
  '/assets/videos/assignment-4.1/satu-jemina.webm',
]

const Assignment: React.FC<Props> = ({ state = [], done, cancel }) => {
  const [ result, setResult ] = useState<State>(state)

  const isDone = result.length >= 3
  const saveAndClose = () => done(result)

  return (
    <div>
      <AssignmentInstructions title='Tuki ja voimavarat'>
        <p>Opiskelusta ja urapolun pohdinnoista ei tarvitse selviytyä yksin. Apua ja tukea on aina tarjolla, niin mahdollisten sinulle sopivien alojen ja opiskelupaikkojen pohdinnassa, korkeakouluun hakemisessa kuin siellä opiskellessakin. Aina omat voimavarat eivät myöskään riitä ja sinulla voi olla elämässäsi erilaisia haasteita, jotka hankaloittavat opintoihin pääsyä ja opiskelua. Tutustu videolta Marin tarinaan siitä, kuinka hän on päässyt lukihäiriöstä huolimatta haluamiinsa korkeakouluopintoihin sekä Satun ja Jeminan videolla siihen, miten he ohjaustoimijoina näkevät opintoihin ja tuen tarpeeseen liittyvät haasteet.</p>
        <p>Mitä tuen tarpeeseen liittyviä teemoja videoissa mainittiin?</p>
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
