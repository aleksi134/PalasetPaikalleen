import { IonButton, IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react'
import React from 'react'
import MultiSelect from '../MultiSelect'
import './Minigame.css'

interface Props {
  // name: string;
  done: () => void
}

const options = [
  'Mahdollisuus 1', 'Mahdollisuus 2', 'Mahdollisuus 3', 'Mahdollisuus 4', 'Mahdollisuus 5',
]

const MiniGame: React.FC<Props> = ({ done }) => {
  // const [toppings, setToppings] = useState<string[]>([]);
  // const [pets, setPets] = useState<string[]>(['bird', 'dog']);

  return (
      <div className="container minigame">

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

        <MultiSelect options={options} />

        <IonButton className="done" onClick={done}>Merkitse suoritetuksi</IonButton>
      </div>
  )
}

export default MiniGame
