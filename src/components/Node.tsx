import React from 'react'
import { MapNode } from '../GameData'
import gameState from '../GameState'

interface Props {
  node: MapNode,
  location: { x: number, y: number }
  onClick: (node: MapNode) => void
}

const Node: React.FC<Props> = ({ node, location, onClick }) => {

  const classes = [
    'dot',
    node.id,
    gameState.canAdvance(node) ? 'available' : '',
    gameState.isCompleted(node) ? 'completed' : ''
  ].join(' ')

  const style = {
    left: `${location.x}%`,
    top: `${location.y}%`
  }

  return (
    <div className={classes} style={style} onClick={() => onClick(node)}> </div>
  )
}

export default Node

