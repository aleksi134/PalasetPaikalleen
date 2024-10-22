import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import GameMap from '../components/GameMap'
import './Page.css'

const Page: React.FC = () => {

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

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GameMap name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
