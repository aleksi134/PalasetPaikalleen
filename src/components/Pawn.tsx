import React from 'react'

interface Props {
  location: { x: number, y: number }
}

const Pawn: React.FC<Props> = ({ location: { x, y } }) => {

  return (
    <div className="pawn" style={{ top: `${y}%`, left: `${x}%` }}>
      <img src="assets/perusversio.png" alt="pelinappula" />
    </div>
  )
}

export default Pawn

