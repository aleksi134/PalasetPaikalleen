import React from 'react'
import './AssignmentFooter.scss'

interface Props {
  isDone: boolean
}

// const animationOpts: Options = {
//   animationData: animationJump,
//   autoplay: false,
//   loop: false
// }

const AssignmentFooter: React.FC<Props> = ({ isDone }) => {
  // const [animation, setAnimation] = useState<any>(animationJump)
  // const animationRef = useRef<{ play: VoidFunction }>(null)

  // const listeners: EventListener[] = [{
  //   eventName: 'loopComplete',
  //   // Loop 3 times, then switch to idle
  //   callback: runOnNthCall(3, () => setAnimation(animationIdle))
  // }]

  // useEffect(() => {
  //   setTimeout(() => {
  //     animationRef.current?.play()
  //   }, 2000);
  // })

  return (
    // <IonGrid className="footer">
    //   <IonRow>
    //     <IonCol>
    //       <ProgressMeter />
    //     </IonCol>
    //     <IonCol className="pollo">
    //       <Lottie
    //         ref={animationRef as any}
    //         options={animationOpts}
    //         // width='100%'
    //         // eventListeners={listeners}
    //       />
    //     </IonCol>
    //   </IonRow>
    // </IonGrid>
    <React.Fragment />
  )
}

export default AssignmentFooter
