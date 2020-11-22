import React, { CSSProperties, useImperativeHandle, useRef, useState } from 'react'
import Lottie, { EventListener, Options } from 'react-lottie'
import animationJump from '../lottie/pipopaa_jump.json'
import animationHappy from '../lottie/pipopaa_happy.json'
import { Location } from '../Types'
import './Pawn.scss'
import { runOnNthCall } from '../utils/runOnNthCall'

interface Props {
  location: Location | null
}

const animOpts: Partial<Options> = {
  autoplay: false,
  loop: false
}

const Pawn = React.forwardRef<HTMLDivElement, Props>(({ location }, ref) => {
  const [animation, setAnimation] = useState<any>(animationJump)
  const animationRef = useRef<{ play: VoidFunction, stop: VoidFunction }>(null)

  // @ts-ignore
  useImperativeHandle(ref, () => ({
    jump(opts?: { timeout: number }) {
      // console.log('jump')
      // setAnimation(animationJump)
      setTimeout(
        () => animationRef.current?.play(),
        opts?.timeout || 0
      )
    },
    // happy(opts?: { timeout: number }) {
    //   console.log('happy')
    //   setAnimation(animationHappy)
    //   setTimeout(
    //     () => animationRef.current?.play(),
    //     opts?.timeout || 0
    //   )
    // }
  }))

  // const listeners: EventListener[] = [{
  //   eventName: 'complete',
  //   callback: () => {
  //     // animationRef.current?.stop()
  //     console.log('set jump')
  //     setAnimation(animationJump)
  //   }
  // }]

  const style: CSSProperties = location
    ? { top: `${location.y}%`, left: `${location.x}%` }
    : { display: 'none' }

  return (
    <div className="pawn" style={style} ref={ref}>
      {/* <img src="assets/perusversio.png" alt="pelinappula" /> */}
      <Lottie
        ref={animationRef as any}
        options={{ ...animOpts, animationData: animation }}
        title='pawn'
        height='100%'
        width='100%'
        // eventListeners={listeners}
        isPaused={true}
        isStopped={true}
      />
    </div>
  )
})

export default Pawn
