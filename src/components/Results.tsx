import { IonButton, IonCard, IonCardContent, IonIcon, IonItem, IonLabel, IonList } from '@ionic/react'
import * as htmlToImage from 'html-to-image'
import { ellipse } from 'ionicons/icons'
import React, { CSSProperties, useRef } from 'react'
import gameState from '../GameState'
import { THEME_COLORS } from '../Types'
import ProgressMeter from './ProgressMeter'
import './Results.scss'

interface Props { }

const Results: React.FC<Props> = () => {
  const resultsRef = useRef<HTMLDivElement>(null)

  const isGameCompleted = gameState.isGameCompleted()

  const createImage = () => {
    const node = resultsRef.current!

    const options: htmlToImage.Options = {
      quality: 0.95,
      pixelRatio: 1
    }

    htmlToImage
      .toJpeg(node, options)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'palaset-paikalleen.jpeg'
        link.href = dataUrl
        link.click()
      })
  }

  const resultsStyle: CSSProperties = {
    background: 'white',
    textAlign: 'left',
    padding: '1rem'
  }

  return (
    <div className="container results-container">

      <IonCard>
        <IonCardContent>
          Tästä raportista näet mitä uraohjausmallin osioita olet suorittanut ja millaisia valintoja olet tehnyt.
          Pelattuasi pelin loppuun saat itsellesi ladattavan raportin pelikertasi tuloksista.
          Muistathan, että mikäli tehdyt valinnat eivät tunnut oikeilta tai muutit mielesi, voit aina palata takaisin tehtävään ja valita toisin!
        </IonCardContent>

        <IonCardContent className="progress-wrapper">
          <ProgressMeter />
          <IonList lines="none">
            <IonItem>
              <IonLabel>Itsetuntemus</IonLabel>
              <IonIcon slot="end" icon={ellipse} style={{ color: THEME_COLORS.itsetuntemus }} />
            </IonItem>
            <IonItem>
              <IonLabel>Työelämätietous</IonLabel>
              <IonIcon slot="end" icon={ellipse} style={{ color: THEME_COLORS.tyoelamatietous }} />
            </IonItem>
            <IonItem>
              <IonLabel>Korkeakoulutietous</IonLabel>
              <IonIcon slot="end" icon={ellipse} style={{ color: THEME_COLORS.tietojaopiskelusta }} />
            </IonItem>
            <IonItem>
              <IonLabel>Elämäntilanne</IonLabel>
              <IonIcon slot="end" icon={ellipse} style={{ color: THEME_COLORS.elamantilanne }} />
            </IonItem>
            <IonItem>
              <IonLabel>Valintojen tekeminen</IonLabel>
              <IonIcon slot="end" icon={ellipse} style={{ color: THEME_COLORS.valintojentekeminen }} />
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>


      <div className="results" ref={resultsRef} style={resultsStyle}>
        <div className="ion-padding">
        </div>

        <pre>
          {JSON.stringify(gameState.progress, null, '  ')}
        </pre>
      </div>

      { !isGameCompleted &&
        <div>Suorita peli ennen tulosten lataamista</div>
      }
      <IonButton disabled={!isGameCompleted} onClick={createImage}>Lataa tulokset</IonButton>
    </div>
  )
}

export default Results
