import { IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonList, IonRow } from '@ionic/react'
import React, { useState } from 'react'
import { Result } from '../../GameState'
import MultiSelect from '../MultiSelect'
import './Minigame.css'
import { uniq } from 'lodash'
import ProgressMeter from '../ProgressMeter'

interface Props {
  state: string[]
  done: (result: Result) => void
}

const preDefinedOptions = [
  'Energinen', 'Iloinen', 'Kannustava', 'Vetäytyvä',
  'Puhelias', 'Puhelias 1', 'Puhelias 2', 'Puhelias 3'
]

const MiniGame: React.FC<Props> = ({ state = [], done }) => {
  const uniqueOptions = uniq([...preDefinedOptions, ...state])

  const [ options, setOptions ] = useState<Result>(uniqueOptions)
  const [ customOption, setCustomOption ] = useState('')
  const [ result, setResult ] = useState<Result>(state)

  const addCustomOption = () => {
    setOptions([...options, customOption])
    setResult([...result, customOption])
    setCustomOption('')
  }

  const saveAndClose = () => done(result)

  return (
    <div className="container minigame lappeenranta">

      <IonCard>
        <IonItem>
          <img style={{ width: '60px' }} src="assets/kuunteleva.png" alt="kuunteleva" slot="start" />
          <IonLabel>Vahvuudet</IonLabel>
        </IonItem>

        <IonCardContent>
          <p> Meillä on kaikilla erilaisia vahvuuksia ja ne ovat hyödyksi urapolkusi mietinnässä. Mitkä ovat juuri sinun vahvuuksiasi?</p>
          <br />
          <p>Valitse oman persoonallisuutesi vahvimpia piirteitä. Sen jälkeen mieti, missä tilanteessa pystyt käyttämään niitä. Oletko sinä esimerkiksi hiljainen tarkkailija, jonka keskittymiskyky on auttanu opintojen tekemisessä? Vai oletko energinen tekijä, joka saa tehtävät tehtyä, vaikke niistä juuri välittäisi?</p>
        </IonCardContent>
      </IonCard>

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

      <IonGrid>
        <IonRow>
          <IonCol>
            <ProgressMeter />
            {/* <img style={{ width: '100%' }} src="assets/edistymispalkki.png" alt="edistymispalkki" /> */}
          </IonCol>
          <IonCol>
            <img style={{ width: '50%', marginTop: '20px' }} src="assets/perusversio.png" alt="kuunteleva" />
          </IonCol>
        </IonRow>
      </IonGrid>


      <IonButton className="done" onClick={saveAndClose}>Merkitse suoritetuksi</IonButton>
    </div>
  )
}

export default MiniGame
