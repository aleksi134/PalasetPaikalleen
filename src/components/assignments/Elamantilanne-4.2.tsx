import { IonButton, IonCard, IonCardContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/react'
import { uniq } from 'lodash'
import React, { useState } from 'react'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import AssignmentProgress from '../AssignmentProgress'
import CustomOption from '../CustomOption'
import MultiSelect from '../MultiSelect'

type Result = string[]

interface Props {
  state: string[]
  done: (result: Result) => void
  close: VoidFunction
}

const preDefinedOptions = [
  'lemmikki',
  'liikunta',
  'luonto',
  'lepo',
  'musiikki',
  'oma koti',
  'perhe',
  'ystävät',
  'harrastukset',
  'kaverit',
  'pelaaminen',
  'matkustelu',
  'kumppani',
  'läheisyys',
  'lukeminen',
  'elokuvat',
  'hyvä ruoka',
]

const Assignment: React.FC<Props> = ({ state = [], done, close }) => {
  const uniqueOptions = uniq([...preDefinedOptions, ...state])

  const [options, setOptions] = useState<Result>(uniqueOptions)
  const [result, setResult] = useState<Result>(state)

  const addCustomOption = (option: string) => {
    setOptions([...options, option])
    setResult([...result, option])
  }

  const selectionsRequired = 3
  const isDone = result.length >= selectionsRequired

  return (
    <div>
      {/* <AssignmentInstructions title='Hyvän mielen reppu (voimavarapankki)'> */}
      <AssignmentInstructions title='Hyvän mielen reppu'>
        <p>Monet sellaiset tekijät, joiden ei aluksi suoranaisesti hahmota vaikuttavan urasuunnitteluun kuitenkin kytkeytyvät yhteen sen kanssa. Omat voimavarat ja niiden tunnistaminen ovat yksi tällainen osa-alue. </p>
        <p>Meillä kaikilla on erilaisia voimavaroja ja erilaiset asiat tuottavat meille hyvää mieltä. Ne voivat löytyä meidän ympäriltämme tai ihan meistä itsestämme. Voimavarojen tunnistaminen on tärkeää sillä ne auttavat meitä jaksamaan arjessa ja elämän haasteissa. Näitä voimavaroja voi olla aluksi hankala huomata, mutta kun niitä alkaa pohtimaan, huomaa pian, että niitähän on aivan valtavan suuri joukko. </p>
        <p>Pohtiessasi sinulle miellyttäviä asioita, voi muistella kaikkia niitä asioita, jotka ovat tuoneet sinulle iloa ja hyvää mieltä. Voit miettiä niin pieniä kuin isompiakin asioita.</p>
        <p>Valitse vähintään kolme vuomavaraa.</p>
      </AssignmentInstructions>

      <MultiSelect options={options} selection={result} onChange={setResult} />

      <CustomOption
        title="Lisää oma voimavarasi listaan"
        placeholder="Esim. kahvi"
        onAdd={addCustomOption}
      />

      <AssignmentProgress required={selectionsRequired} selected={result.length} />

      <AssignmentFooter done={() => done(result)} close={close} isDone={isDone}>
        <IonCard>
          <IonItem>
            <IonLabel>Hienoa!</IonLabel>
          </IonItem>
          <IonCardContent>
            <p> Nyt olet koonnut hyvän mielen reppuun niitä asioita, jotka tuottavat sinulle iloa, antavat energiaa ja auttavat jaksamaan. Voit pitää tätä listaa tallessa pahan päivän varalle, jolloin voit palata siihen ja huomata hyvät asiat ympärilläsi sekä itsessäsi. Nämä voimavarat auttavat sinua ottamaan tarvittavat askeleet urasuunnittelusi polulla. </p>
          </IonCardContent>
        </IonCard>
      </AssignmentFooter>
    </div>
  )
}

export default Assignment
