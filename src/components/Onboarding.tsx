import React, { useState, useEffect } from 'react'
import {
  IonButton,
  IonCard,
  IonContent,
  IonCol,
  IonGrid,
  IonIcon,
  IonModal,
  IonSlide,
  IonSlides,
} from '@ionic/react'
import { americanFootball, medal, analyticsOutline } from 'ionicons/icons'
import './Onboarding.css'

const Onboarding: React.FC = () => {
  const [showSkip, setSkip] = useState(true)
  const [showModal, setShowModal] = useState(true)

  /*
  const toggleVisibility = useCallback(
    () => setIsVisible(!isVisible),
    [setIsVisible, isVisible]
  );
  */

  useEffect(() => {
    if (localStorage.getItem('onboarding')) {
      setShowModal(!showModal)
    }
  }, [])
  
  const ionSlideChanged = (e: CustomEvent) => {
    const target: any = e.target
    setSkip(!target.swiper.isEnd)
  }

  const closeModal = () => {
    localStorage.setItem('onboarding', 'done')
    setShowModal(!showModal)
  }

  return (
    <IonContent>
      <IonModal isOpen={Boolean(showModal)}>
        <IonCard className="ion-padding">
          <IonGrid>
            <IonSlides pager onIonSlideDidChange={ionSlideChanged}>
              <IonSlide>
                <IonGrid class="ion-justify-content-center">
                  <IonCol>
                    <h2 className="onboardingHeader ion-padding">Löydä koulutuksesi</h2>
                    <div className="diag ion-padding">
                      <IonIcon icon={americanFootball} color="primary"></IonIcon>
                    </div>
                    <p className="onboardingParagraph ion-padding">
                      Löydä pipopään & pöllön avustuksella korkeakoulusi!
                    </p>
                  </IonCol>
                </IonGrid>
              </IonSlide>

              <IonSlide>
                <IonGrid class="ion-justify-content-center">
                  <IonCol>
                    <h2 className="onboardingHeader ion-padding">Ratkaise tehtävät</h2>
                    <div className="diag ion-padding">
                      <IonIcon icon={medal} color="primary"></IonIcon>
                    </div>
                    <p className="onboardingParagraph ion-padding">
                      Pelaa kaupungit läpi ja pohdi vastauksia
                    </p>
                  </IonCol>
                </IonGrid>
              </IonSlide>

              <IonSlide>
                <IonGrid class="ion-justify-content-center">
                  <IonCol>
                    <h2 className="onboardingHeader ion-padding">Pohdi lopputulosta</h2>
                    <div className="diag ion-padding">
                      <IonIcon icon={analyticsOutline} color="primary"></IonIcon>
                    </div>
                    <p className="onboardingParagraph ion-padding">
                      Vastauksien perusteella saat lopputulosteen!
                    </p>
                  </IonCol>
                </IonGrid>
              </IonSlide>
            </IonSlides>

            <IonButton
              shape="round"
              id="skip"
              className="ion-padding"
              routerLink="/page/home" // is this ok? TODO check out
              onClick={closeModal}
            >
              {showSkip ? 'Skip this!' : 'Alright'}
            </IonButton>
          </IonGrid>
        </IonCard>
      </IonModal>
    </IonContent>
  )
}

export default Onboarding
