import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import Onboarding from '../components/Onboarding'
import './Page.css'

interface Props {}

const Page: React.FC<Props> = () => {

  // const { name } = useParams<{ name: string; }>();
  const name = 'Palaset paikalleen'

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

      <IonContent fullscreen className="home-page">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Onboarding />

      </IonContent>
    </IonPage>
  )
}

export default Page
