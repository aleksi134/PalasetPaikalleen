import { IonButton } from '@ionic/react'
import * as htmlToImage from 'html-to-image'
import React, { CSSProperties, useRef } from 'react'
import gameState from '../GameState'
import ProgressMeter from './ProgressMeter'
import './Results.scss'

interface Props { }

const Home: React.FC<Props> = () => {
  const resultsRef = useRef<HTMLDivElement>(null)

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

      <p>
        Tähän tulee tulosten visualisointi ja niiden lataaminen sekä jakaminen.
      </p>

      <div className="results" ref={resultsRef} style={resultsStyle}>
        <div className="ion-padding">
          <ProgressMeter />
        </div>

        <pre>
          {JSON.stringify(gameState.progress, null, '  ')}
        </pre>
      </div>

      <IonButton onClick={createImage}>Lataa tulokset</IonButton>
    </div>
  )
}

export default Home
