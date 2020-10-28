import React from 'react'
import { IonButton, IonContent, IonIcon, IonSlide, IonSlides } from '@ionic/react'
import { americanFootball, medal, analyticsOutline } from 'ionicons/icons'
import './Onboarding.css'

const Onboarding: React.FC = () => {
  return (
    <IonContent className="onboarding">
      <IonSlides pager className="parentSlides">
        <IonSlide className="childrenSlide"> {/** TODO remove or use */}
          <div className="diag">
            <IonIcon icon={americanFootball} color="primary"></IonIcon>
          </div>
          <h2 className="onboardingHeader">Löydä koulutuksesi</h2>
          <p className="onboardingParagraph">Löydä pipopään & pöllön avustuksella korkeakoulusi!</p> {/** football  */}
        </IonSlide>

        <IonSlide>
          <div className="diag">
            <IonIcon icon={medal} color="primary"></IonIcon>
          </div>
          <h2 className="onboardingHeader">Ratkaise tehtävät</h2>
          <p className="onboardingParagraph">Pelaa kaupungit läpi ja pohdi vastauksia</p>{' '}
          {/** medal */}
        </IonSlide>

        <IonSlide>
          <div className="diag">
            <IonIcon icon={analyticsOutline} color="primary"></IonIcon>
          </div>
          <h2 className="onboardingHeader">Pohdi lopputulosta</h2>
          <p className="onboardingParagraph">Vastauksien perusteella saat lopputulosteen!</p> {/** analytics */}
        </IonSlide>
      </IonSlides>
      <IonButton shape="round" id="skip">
        Skip this!
      </IonButton>{' '}
      {/** skip-function here */}
    </IonContent>
  )
}

export default Onboarding
