import { IonContent, IonModal } from '@ionic/react'
import React, { useState } from 'react'
import './Home.css'
import Lappeenranta from './minigames/Lappeenranta'
import Kuopio from './minigames/Kuopio'
import Helsinki from './minigames/Helsinki'

interface Props {
  name: string
}

const minigames = ['lappeenranta', 'kuopio', 'helsinki'] as const
type MiniGame = typeof minigames[number]

const Home: React.FC<Props> = ({ name }) => {
  const [showModal, setShowModal] = useState(false as MiniGame | false)
  const closeModal = () => setShowModal(false)

  // useIonViewDidEnter(() => setShowModal('lappeenranta'))

  return (
    <div className="container">
      {/* <strong>{name}</strong> */}
      <p className="instructions">
        Klikkaa kartan palloja avataksesi tehtävän
      </p>
      <div className="map-container">
        <div className="dot lappeenranta" onClick={() => setShowModal('lappeenranta')} />
        <div className="dot kuopio" onClick={() => setShowModal('kuopio')} />
        <div className="dot helsinki" onClick={() => setShowModal('helsinki')} />

        <img className="map" src="assets/finland-map.png" alt="Suomen kartta" />
      </div>

      <IonModal isOpen={Boolean(showModal)} cssClass='minigame-modal'>
        <IonContent>
          {showModal === 'lappeenranta' && <Lappeenranta done={closeModal} />}
          {showModal === 'kuopio' && <Kuopio done={closeModal} />}
          {showModal === 'helsinki' && <Helsinki done={closeModal} />}
        </IonContent>
      </IonModal>

    </div>
  );
};

export default Home;
