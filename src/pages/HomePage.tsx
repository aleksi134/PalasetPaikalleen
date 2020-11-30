import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { MouseEventHandler } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import './Page.css'

interface Props extends RouteComponentProps<any> {}

const Page: React.FC<Props> = ({ history }) => {

  const navigateToMap: MouseEventHandler = (e) => {
    e.preventDefault()
    history.push('/page/Map')
  }

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

        <h2>Onboarding</h2>
        <p>Tervetuloa!</p>
        <IonButton onClick={navigateToMap}>Aloita peli</IonButton>

      </IonContent>
    </IonPage>
  )
}

export default withRouter(Page)
