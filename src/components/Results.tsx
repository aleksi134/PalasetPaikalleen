import { IonButton, IonCard, IonCardContent, IonSpinner } from '@ionic/react'
import * as htmlToImage from 'html-to-image'
import React, { useRef, useState } from 'react'
import gameState from '../GameState'
import { delay } from '../utils/delay'
import ColorInstructions from './ColorInstructions'
import ProgressMeter from './ProgressMeter'
import ResultsCard from './ResultCard'
import './Results.scss'

const createCopy = (node: Node, offScreen: Node, width: number = 1600) => {
  const clone: HTMLDivElement = node.cloneNode(true) as any
  clone.style.width = width + 'px'

  // Reset styles
  const overlayTexts = clone.querySelector<HTMLDivElement>('.overlay-texts')
  const resultsCard = clone.querySelector<HTMLDivElement>('.results-card')
  if (overlayTexts && resultsCard) {
    overlayTexts.style.fontSize = (1600 / 6) + '%';
    resultsCard.style.width = 'auto'
    resultsCard.style.height = 'auto'
  }

  offScreen.appendChild(clone)

  return clone
}

const clearClone = (node: Node) =>
  node.parentNode?.removeChild(node)


const Results: React.FC = () => {
  const resultsRef = useRef<HTMLDivElement>(null)
  const offScreenRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)

  const isGameCompleted = gameState.isGameCompleted()

  const createImage = async () => {
    setLoading(true)

    const node = resultsRef.current!
    const offScreen = offScreenRef.current!

    const clone = createCopy(node, offScreen)
    await delay(2000)

    const options: htmlToImage.Options = {
      quality: 1,
      pixelRatio: 1,
      skipFonts: false
    }

    htmlToImage
      .toPng(clone, options)
      .then((dataUrl) => {

        clearClone(clone)
        setLoading(false)

        const link = document.createElement('a');
        link.download = 'palaset-paikalleen.png'
        link.href = dataUrl
        link.click()
      })
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
          <ColorInstructions />
        </IonCardContent>
      </IonCard>

      <IonCard>
        <div className="results" ref={resultsRef}>
          <ResultsCard />
        </div>
      </IonCard>

      <div className="offscreen-results" ref={offScreenRef} style={{
        position: 'absolute',
        left: '-20000px',
        bottom: '-20000px'
      }} />

      { !isGameCompleted &&
        <div>Suorita peli ennen tulosten lataamista</div>
      }

      <IonButton
        disabled={!isGameCompleted || loading}
        onClick={createImage}
        expand="block"
        className="ion-margin">
        Lataa tulokset
        {loading && <IonSpinner />}
      </IonButton>
    </div>
  )
}

export default Results
