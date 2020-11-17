import { IonCol, IonGrid, IonRow } from '@ionic/react'
import React from 'react'
import ProgressMeter from './ProgressMeter'

interface Props {
  isDone: boolean
}

const AssignmentFooter: React.FC<Props> = ({ isDone }) => {
  // const [animation, setAnimation] = useState<any>(animationJump)

  // const listeners: EventListener[] = [{
  //   eventName: 'loopComplete',
  //   // Loop 3 times, then switch to idle
  //   callback: runOnNthCall(3, () => setAnimation(animationIdle))
  // }]

  return (
    <IonGrid className="footer">
      <IonRow>
        <IonCol>
          <ProgressMeter />
        </IonCol>
        <IonCol>
          <img style={{ width: '50%', marginTop: '20px' }} src="assets/perusversio.png" alt="kuunteleva" />
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default AssignmentFooter
