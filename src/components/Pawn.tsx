import React, { CSSProperties } from 'react'
import { Location } from '../Types'

interface Props {
  location: Location | null
}

const Pawn: React.FC<Props> = ({ location }) => {

  const style: CSSProperties = location
    ? { top: `${location.y}%`, left: `${location.x}%` }
    : { display: 'none' }

  return (
    <div className="pawn" style={style}>
      <img src="assets/perusversio.png" alt="pelinappula" />
    </div>
  )
}

export default Pawn
