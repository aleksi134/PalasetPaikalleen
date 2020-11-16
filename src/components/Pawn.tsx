import React, { CSSProperties } from 'react'
import { Location } from '../Types'
import Lottie from 'react-lottie'
import animationData from '../lottie/pipopaa_jump.json'

interface Props {
  location: Location | null
}

const Pawn = React.forwardRef<HTMLDivElement, Props>(({ location }, ref) => {

  const style: CSSProperties = location
    ? { top: `${location.y}%`, left: `${location.x}%` }
    : { display: 'none' }

  return (
    <div className="pawn" style={style} ref={ref}>
      <img src="assets/perusversio.png" alt="pelinappula" />
      {/* <Lottie
        options={{ animationData }}
        title='pawn'
        height='100%'
        width='100%'
        isStopped={false}
        isPaused={false} /> */}
    </div>
  )
})

export default Pawn
