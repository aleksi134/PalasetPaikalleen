import { IonButton } from '@ionic/react'
import * as htmlToImage from 'html-to-image'
import React, { CSSProperties, useRef } from 'react'
import gameState from '../GameState'

interface Props { }

const Home: React.FC<Props> = () => {
  const resultsRef = useRef<HTMLDivElement>(null)

  const createImage = () => {
    const node = resultsRef.current!

    htmlToImage
      .toJpeg(node, { quality: 0.95 })
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
    <div className="container">

      <p>
        Tähän tulee tulosten visualisointi ja niiden lataaminen sekä jakaminen.
      </p>

      <div ref={resultsRef} style={resultsStyle}>
        <pre>
          {JSON.stringify(gameState.progress, null, '  ')}
        </pre>
      </div>

      <IonButton onClick={createImage}>Lataa tulokset</IonButton>
    </div>
  )
}

export default Home
