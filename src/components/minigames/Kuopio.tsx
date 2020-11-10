import { IonButton, IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'
import { Result } from '../../GameState'
import MultiSelect from '../MultiSelect'
// import './Minigame.css'

interface Props {
  state: Result
  done: (result: Result) => void
}

const options = [
  'Mahdollisuus 1', 'Mahdollisuus 2', 'Mahdollisuus 3', 'Mahdollisuus 4', 'Mahdollisuus 5',
]

const MiniGame: React.FC<Props> = ({ state, done }) => {

  const [ result, setResult ] = useState<Result>(state)
  const saveAndClose = () => done(result)

  return (
      <div>
        <IonCard>
          <IonItem>
            <img style={{ width: '60px' }} src="assets/kuunteleva.png" alt="kuunteleva" slot="start" />
            <IonLabel>Mahdollisuuksien maailma</IonLabel>
          </IonItem>

          <IonCardContent>
            <p>Katso video. Tiesitkö näistä videolla kerrotuista mahdollisuuksista? Rastita.</p>
          </IonCardContent>
        </IonCard>

        <video controls src="assets/placeholder-video.mp4"></video>

        <MultiSelect options={options} selection={result} onChange={setResult} />

        <IonButton className="done" onClick={saveAndClose}>Merkitse suoritetuksi</IonButton>
      </div>
  )
}

export default MiniGame
