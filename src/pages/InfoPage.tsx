import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import './Page.css'
import Info from '../components/Info'

const Page: React.FC = () => {

  // const { name } = useParams<{ name: string; }>();
  const name = 'Lisätietoja'

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

        <Info />

      </IonContent>
    </IonPage>
  );
};

export default Page;
