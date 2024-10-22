import { IonButton, IonCard, IonCardContent, IonCardHeader, IonTitle } from '@ionic/react'
import React, { MouseEventHandler } from 'react'
import { RouteComponentProps, useHistory, withRouter } from 'react-router'
import AssignmentInstructions from './AssignmentInstructions'
import ColorInstructions from './ColorInstructions'
import './Onboarding.scss'
import OnboardingAnimation from './OnboardingAnimation'
import ProgressMeter from './ProgressMeter'

interface Props extends RouteComponentProps<any> {}

const Onboarding: React.FC<Props> = ({}) => {
  const history = useHistory()

  const navigateToMap: MouseEventHandler = (e) => {
    e.preventDefault()
    history.push('/page/Map')
  }

  return (
    <div className="container onboarding-container">
      <IonCard>
        <IonCardHeader>
          <IonTitle>
            Tervetuloa pelaamaan <br /> PALASET PAIKALLEEN <br /> -peliä
          </IonTitle>
        </IonCardHeader>

        <IonCardContent>

          <OnboardingAnimation bubbleText="Tervehdys!" />

          <p>Palaset Paikalleen on helppo ja vuorovaikutteinen tapa tehdä urasuunnittelua.  </p>
          <p>Pelin tehtävät suorittamalla tutustut uraohjausmallin viiteen osa-alueeseen: Itsetuntemus, Työelämätietous, Korkeakoulutietous, Elämäntilanne ja Valintojen tekeminen. Pelin aikana vahvistat itsetuntemustasi, saat tietoa korkeakouluopinnoista ja työelämästä.  Lopputuloksena saat joukon sinua kiinnostavia opiskelualoja. Tämä tieto voi toimia pohjana tulevaisuutesi suunnittelulle ja auttaa sinua sopivan opiskelupaikan valinnassa. </p>
          <p>Pelin lopussa saat raportin, johon on koostettuna pelin aikana tehtävissä tekemäsi valinnat. </p>
          <p>Etenet pelissä suorittamalla tehtäviä eri puolella Suomea. Tehtävät jakautuvat uraohjausmallin mukaisiin viiteen osa-alueeseen, jotka tunnistat tehtävien värin perusteella. Palkinnoksi suoritetusta tehtävästä saat teeman värisen kuvion palasen.  </p>

          <div className="progression-colors">
            <ProgressMeter showAllColors={true} />
            <ColorInstructions />
          </div>

          <p>Etenet pelissä kaupungista toiseen ja kun olet saanut riittävästi palasia paikalleen, saat avattua viimeisen tehtävän, jossa voit laskurin avulla saada selville mikä voisi olla sinun unelmiesi opiskelupaikka.</p>
          <p>Kysymysmerkkiruudut sisältävät lisätehtäviä, joiden suorittaminen ei ole pakollista pelin läpipelaamisen kannalta. Ne sisältävät lisätietoa valintojesi tueksi, joten käy rohkeasti katsomassa mikä kysymysmerkkien takana odottaa!</p>
          <p>Peli on kehitetty osana Korkeakoulustartti-hanketta ja se perustuu hankkeessa kehitettyyn Palaset Paikalleen -uraohjausmalliin.</p>

          <IonButton className="start" onClick={navigateToMap} expand="block" >Aloita peli</IonButton>
        </IonCardContent>

        <img src="/assets/uusi_WEB_logorimpsu_1200x150.png" alt="logot" />

        <div className="bottom-border" />
      </IonCard>


    </div>
  )
}

export default withRouter(Onboarding)
