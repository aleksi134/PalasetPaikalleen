import { IonButton } from '@ionic/react'
import React from 'react'
import gameState from '../GameState'
import './ResetButton.scss'

const Component: React.FC = () => {
  const reset = () => {
    gameState.reset()
    window.location.reload()
  }

  return (
    <div className="reset-button">
      <IonButton color="danger" expand="block" onClick={reset}>Aloita alusta</IonButton>
    </div>
  )
}

export default Component
