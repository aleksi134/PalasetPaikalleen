import { IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react'
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
  { title: 'Monimuoto-opiskelu korkeakoulussa', isCorrect: true },
  { title: 'Opiskelijoiden terveyspalvelut', isCorrect: false },
  { title: 'Erilaiset vahvistavia ja tukitoimia tarjoavat tahot', isCorrect: true },
  { title: 'Rohkeus valintojen tekemiseen tässä hetkessä', isCorrect: true },
  { title: 'Tukikäytännöt opiskelussa, kuten pidempi tenttiaika', isCorrect: true },
  { title: 'Tuutoriopiskelijoiden tarjoama tuki opintojen alussa', isCorrect: false },
  { title: 'Opintojen keskeyttäminen ja niiden jatkaminen myöhemmin', isCorrect: false },
  { title: 'Työ- ja koulutuskokeilut sekä oppilaitoksiin tutustuminen', isCorrect: true },
  { title: 'Työn ja opiskelun yhdistäminen', isCorrect: false },
  { title: 'Valintakokeisiin valmisteleva lukupiiri ', isCorrect: true },
  { title: 'Itselle sopivien opiskelumenetelmien löytäminen', isCorrect: true },
  { title: 'Tuen hakeminen ja kyky ottaa vastaan apua', isCorrect: true },
  { title: 'Vaihtoehtoiset suoritustavat opinnoissa', isCorrect: true },
  { title: 'Saavutettavuus opintomateriaaleissa', isCorrect: false },
]

// const correctCount = options.filter(o => o.isCorrect).length

const videos = [
  '/assets/videos/assignment-4.1/mari.webm',
  // '/assets/videos/assignment-4.1/olli.webm',
  '/assets/videos/assignment-4.1/satu-jemina.webm',
]

const Assignment: React.FC<Props> = ({ state = [], done, close }) => {
  const [ result, setResult ] = useState<State>(state)

  // const correctAnswers = result.filter(s => options.find(o => o.title === s.title)?.isCorrect)
  // const isDone = correctAnswers.length >= correctCount

  return (
    <div>
      <AssignmentInstructions title='Tuki ja voimavarat'>
        <p>Opiskelusta ja urapolun pohdinnoista ei tarvitse selviytyä yksin. Apua ja tukea on aina tarjolla esimerkiksi sopivien alojen ja opiskelupaikkojen pohdinnassa, korkeakouluun hakemisessa ja siellä opiskellessa. Aina omat voimavarat eivät riitä ja elämässä voi tulla erilaisia haasteita, jotka voivat hidastaa tai hankaloittaa opintoihin pääsyä tai opiskelua.</p>
        <p>Videossa korkeakouluopiskelija Mari kertoo monimuoto-opiskelusta sekä siitä, kuinka hän on päässyt lukivaikeudesta huolimatta opiskelemaan korkeakouluun. Joensuun Nuorisoverstaan Jemina Markkanen ja Joensuun Seudun Erilaisten Oppijoiden Satu Niiranen kertovat videolla, miten he ohjaustoimijoina näkevät opintoihin ja tuen tarpeeseen liittyvät haasteet ja rohkaisevat tekemään oman näköisiä valintoja. </p>
        <p>Mitä tuen tarpeeseen liittyviä teemoja videoissa mainittiin?</p>
      </AssignmentInstructions>

      <VideoSlides urls={videos} />

      <MultiSelectCorrect options={options} selection={result} onChange={setResult} columns={1} />

      <AssignmentFooter done={() => done(result)} close={close} isDone={true}>
        <IonCard>
          <IonItem>
            <IonLabel>Hienoa!</IonLabel>
          </IonItem>
          <IonCardContent>
            <p>Olet tullut nyt tietoisemmaksi niistä tuen muodoista, joita erilaisissa elämäntilanteissa on tarjolla. Tieto siitä, että tukea ja apua on saatavilla rohkaisee tekemään oman näköisiäsi ura- ja koulutusvalintoja. Tästä rohkaistuneena olet valmis ottamaan seuraavat askeleet urasuunnittelusi polulla. </p>
          </IonCardContent>
        </IonCard>
      </AssignmentFooter>
    </div>
  )
}

export default Assignment
