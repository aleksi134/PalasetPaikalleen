import React, { useState } from 'react'
import Lottie, { EventListener } from 'react-lottie'
import animationIdle from '../lottie/pollo_idle.json'
import animationJump from '../lottie/pollo_jump.json'
import { runOnNthCall } from '../utils/runOnNthCall'

interface Props {
  bubbleText: string
}

const OnboardingAnimation: React.FC<Props> = ({ bubbleText }) => {
  const [animation, setAnimation] = useState<any>(animationJump)

  const listeners: EventListener[] = [{
    eventName: 'loopComplete',
    // Loop 3 times, then switch to idle
    callback: runOnNthCall(3, () => setAnimation(animationIdle))
  }]

  return (
    <div className="onboarding-animation">
      <div className="greeting speech-bubble">{bubbleText}</div>
      <div className="animation">
        <Lottie
          options={{ animationData: animation }}
          width='100%'
          eventListeners={listeners}
        />
      </div>
    </div>
  )
}

export default OnboardingAnimation
