import { IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react'
import React, { useContext, useState } from 'react'
import Lottie, { EventListener } from 'react-lottie'
import { NodeContext } from '../GameData'
import animationIdle from '../lottie/pollo_idle.json'
import animationJump from '../lottie/pollo_jump.json'
import { runOnNthCall } from '../utils/runOnNthCall'
import './AssignmentInstructions.scss'

interface Props {
  title: string
  showBubble?: boolean
}

const AssignmentInstructions: React.FC<Props> = ({ title, showBubble = true, children }) => {
  const [animation, setAnimation] = useState<any>(animationJump)


  const listeners: EventListener[] = [{
    eventName: 'loopComplete',
    // Loop 3 times, then switch to idle
    callback: runOnNthCall(3, () => setAnimation(animationIdle))
  }]

  const node = useContext(NodeContext)

  return (
    <IonCard className="instructions">
      <IonItem lines="none" className="instructions-header">
        <div className="animation">
          <Lottie
            options={{ animationData: animation }}
            width='100%'
            eventListeners={listeners}
          />
          {showBubble && <div className="greeting speech-bubble">{node.greeting}</div> }
        </div>
        <IonLabel>{title}</IonLabel>
      </IonItem>

      <IonCardContent>
        {children}
      </IonCardContent>
    </IonCard>
  )
}

export default AssignmentInstructions
