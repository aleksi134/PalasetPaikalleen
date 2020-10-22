import React from 'react'
import { MapNode } from '../GameMap'
import gameState from '../GameState'

interface Props {
  node: MapNode
  onClick: (node: MapNode) => void
}

const Node: React.FC<Props> = ({ node, onClick }) => {

  const classes = 'dot '
    + (gameState.canAdvance(node) ? 'available ' : '')
    + (gameState.isCompleted(node) ? 'completed ' : '')

  const style = {
    top: `${node.location.y}%`,
    left: `${node.location.x}%`
  }

  return (
    <div className={classes} style={style} onClick={() => onClick(node)}> </div>
  )
}

export default Node

