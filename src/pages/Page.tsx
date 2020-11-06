import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React, { useEffect, useState } from 'react'
import GameMap from '../components/GameMap'
import Onboarding from '../components/Onboarding'
import './Page.css'

const Page: React.FC = () => {
  // const { name } = useParams<{ name: string; }>();
  const name = 'Palaset paikalleen'

  const [showOnboarding, setShowOnboarding] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('onboarding')) {
      setShowOnboarding(true)
    }
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {showOnboarding && <Onboarding />}
        <GameMap name={name} />
      </IonContent>
    </IonPage>
  )
}

export default Page
