import { IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonItem, IonLabel, IonRow } from '@ionic/react'
import React, { useState } from 'react'
import { Result } from '../../GameState'
import MultiSelect from '../MultiSelect'
import './Minigame.css'

interface Props {
  state: Result
  done: (result: Result) => void
}

const options = [
  'Energinen', 'Iloinen', 'Kannustava', 'Vetäytyvä',
  'Puhelias', 'Puhelias 1', 'Puhelias 2', 'Puhelias 3'
]

const MiniGame: React.FC<Props> = ({ state, done }) => {
  const [ result, setResult ] = useState<Result>(state)
  const saveAndClose = () => done(result)

  return (
    <div className="container minigame">

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


      <IonGrid>
        <IonRow>
          <IonCol>
            <img style={{ width: '100%' }} src="assets/edistymispalkki.png" alt="edistymispalkki" />
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
