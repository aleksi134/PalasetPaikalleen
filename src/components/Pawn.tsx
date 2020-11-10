import React, { CSSProperties } from 'react'
import { Location } from '../Types'

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
    </div>
  )
})

export default Pawn
