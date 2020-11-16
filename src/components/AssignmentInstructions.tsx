import { IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'
import Lottie, { EventListener } from 'react-lottie'
import animationIdle from '../lottie/pollo_idle.json'
import animationJump from '../lottie/pollo_jump.json'
import { runOnNthCall } from '../utils/runOnNthCall'

interface Props {
  title: string
  description?: string
}

const AssignmentInstructions: React.FC<Props> = ({ title, description, children }) => {
  const [animation, setAnimation] = useState<any>(animationJump)


  const listeners: EventListener[] = [{
    eventName: 'loopComplete',
    // Loop 3 times, then switch to idle
    callback: runOnNthCall(3, () => setAnimation(animationIdle))
  }]

  return (
    <IonCard>
      <IonItem>
        <Lottie
          options={{ animationData: animation }}
          width='25%'
          eventListeners={listeners}
        />
        <IonLabel>{title}</IonLabel>
      </IonItem>

      <IonCardContent>
        {description ? <p>description </p> : children}
      </IonCardContent>
    </IonCard>
  )
}

export default AssignmentInstructions
