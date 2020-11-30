import { IonButton, IonCard, IonCardContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/react'
import { uniq } from 'lodash'
import React, { useState } from 'react'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import AssignmentProgress from '../AssignmentProgress'
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
]

const Assignment: React.FC<Props> = ({ state = [], done, close }) => {
  const uniqueOptions = uniq([...preDefinedOptions, ...state])

  const [options, setOptions] = useState<Result>(uniqueOptions)
  const [customOption, setCustomOption] = useState('')
  const [result, setResult] = useState<Result>(state)

  const addCustomOption = () => {
    setOptions([...options, customOption])
    setResult([...result, customOption])
    setCustomOption('')
  }

  const selectionsRequired = 3
  const isDone = result.length >= selectionsRequired

  return (
    <div>
      {/* <AssignmentInstructions title='Hyvän mielen reppu (voimavarapankki)'> */}
      <AssignmentInstructions title='Hyvän mielen reppu'>
        <p>Meiltä kaikilta löytyy erilaisia voimavaroja ja hyvää mieltä tuottavia asioita. Ne voivat löytyä meidän ympäriltämme tai ihan meistä itsestämmekin. Näitä voimavaroja voi olla aluksi hankala huomata, koska suurin osa niistä on meille niin arkisia. Kun niitä alkaa pohtimaan, huomaa kuitenkin pian että niitähän on aivan valtavan suuri joukko.</p>
        <p>Pohtiessasi sinulle miellyttäviä asioita, voi muistella kaikkia niitä asioita, jotka ovat tuoneet sinulle iloa ja hyvää mieltä. Voit miettiä niin pieniä kuin isompiakin asioita.</p>
        <p>Valitse vähintään kolme vuomavaraa.</p>
      </AssignmentInstructions>

      <MultiSelect options={options} selection={result} onChange={setResult} />

      <IonList lines="none" className="ion-margin-vertical">
        <IonItem>
          <IonLabel><strong>Kirjoita oma</strong></IonLabel>
        </IonItem>
        <IonItem lines="inset">
          <IonInput
            value={customOption}
            onIonChange={e => setCustomOption(e.detail.value!)}
            placeholder="Esim. Puhelias"> </IonInput>
          <IonButton disabled={customOption.length <= 3} size="default" slot="end" onClick={addCustomOption as any}>Lisää</IonButton>
        </IonItem>
      </IonList>

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
