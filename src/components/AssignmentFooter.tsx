import { IonButton, IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react'
import React, { CSSProperties, useContext, useEffect, useRef, useState } from 'react'
import Lottie, { EventListener, Options } from 'react-lottie'
import { NodeContext } from '../GameData'
import animationJump from '../lottie/pipopaa_jump.json'
import animationReaction from '../lottie/pipopaa_reaction.json'
import animationHappy from '../lottie/pipopaa_happy.json'
import { THEME_COLORS, THEME_NAMES } from '../Types'
import { runOnNthCall } from '../utils/runOnNthCall'
import './AssignmentFooter.scss'
import ProgressMeter from './ProgressMeter'

interface Props {
  done: any,
  close: any,
  isDone: boolean
}

const animationOpts: Partial<Options> = {
  autoplay: true,
  loop: true
}

const AssignmentFooter: React.FC<Props> = ({ done, close, isDone, children }) => {
  const [showSlider, setShowSlider] = useState(false)

  const setDone = () => {
    setShowSlider(true)
    done()
  }

  const node = useContext(NodeContext)
  const themeName = THEME_NAMES[node.theme]
  const themeStyle: CSSProperties = {
    backgroundColor: THEME_COLORS[node.theme]
  }

  const [animation, setAnimation] = useState<any>(animationHappy)
  const animationRef = useRef<{ play: VoidFunction, stop: VoidFunction }>(null)

  const listeners: EventListener[] = [{
    eventName: 'loopComplete',
    // Loop 3 times, then switch to idle
    callback: runOnNthCall(2, () => {
      setAnimation(animationReaction)
      animationRef.current?.stop()
    })
  }]

  useEffect(() => {
    setTimeout(() => {
      // animationRef.current?.play()
    }, 5000)
  })

  const sliderClasses = ['footer-slider', showSlider ? 'visible' : 'hidden'].join(' ')

  return (
    <div className="footer">
      <IonButton disabled={!isDone} className="done" expand="block" onClick={setDone}>Merkitse suoritetuksi</IonButton>

      <div className={sliderClasses}>
        <div className="theme-bar" style={themeStyle}> {themeName} </div>

        {showSlider &&
          <div className="footer-container">
            <ProgressMeter />
            <Lottie
              title="animation"
              ref={animationRef as any}
              options={{ ...animationOpts, animationData: animation }}
              // width='100%'
              eventListeners={listeners}
            />
          </div>
        }

        {children ? children : (
          <IonCard>
            <IonItem>
              <IonLabel>Hienoa!</IonLabel>
            </IonItem>
            <IonCardContent>
              <p>Tehtävä suoritettu! Voin nyt siirtyä seuraavaan tehtävään.</p>
            </IonCardContent>
          </IonCard>
        )}

        <IonButton disabled={!isDone} className="done" expand="block" onClick={close}>Valmis</IonButton>
      </div>

    </div>

  )
}

export default AssignmentFooter
