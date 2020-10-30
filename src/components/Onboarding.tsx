import React from 'react'
import { IonButton, IonContent, IonCol, IonGrid, IonIcon, IonSlide, IonSlides } from '@ionic/react'
import { americanFootball, medal, analyticsOutline } from 'ionicons/icons'
import './Onboarding.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/flex-utils.css'

const Onboarding: React.FC = () => {
  return (
    <IonContent className="ion-padding">
      {/**  <IonContent className="onboarding"> */}
      <IonSlides pager className="parentSlides">
        <IonSlide className="childrenSlide">
          <IonGrid class="ion-justify-content-center">
            <IonCol>
              <h2 className="onboardingHeader">Löydä koulutuksesi</h2>
              <div className="diag">
                <IonIcon icon={americanFootball} color="primary"></IonIcon>
              </div>
              <p className="onboardingParagraph">
                Löydä pipopään & pöllön avustuksella korkeakoulusi!
              </p>
            </IonCol>
          </IonGrid>
        </IonSlide>

        <IonSlide className="childrenSlide">
          <IonGrid class="ion-justify-content-center">
            <IonCol>
              <h2 className="onboardingHeader">Ratkaise tehtävät</h2>
              <div className="diag">
                <IonIcon icon={medal} color="primary"></IonIcon>
              </div>
              <p className="onboardingParagraph">Pelaa kaupungit läpi ja pohdi vastauksia</p>
            </IonCol>
          </IonGrid>
        </IonSlide>

        <IonSlide className="childrenSlide">
          <IonGrid class="ion-justify-content-center">
            <IonCol>
              <h2 className="onboardingHeader">Pohdi lopputulosta</h2>
              <div className="diag">
                <IonIcon icon={analyticsOutline} color="primary"></IonIcon>
              </div>
              <p className="onboardingParagraph">Vastauksien perusteella saat lopputulosteen!</p>
            </IonCol>
          </IonGrid>
        </IonSlide>
      </IonSlides>
      <IonButton shape="round" id="skip">
        Skip this!
      </IonButton>
      {/** skip-function here */}
    </IonContent>
  )
}

export default Onboarding