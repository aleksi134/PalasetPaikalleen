import React, { CSSProperties } from 'react'
import { MapNode } from '../GameData'
import gameState from '../GameState'
// import { THEME_COLORS } from '../Types'

interface Props {
  node: MapNode,
  location: { x: number, y: number }
  onClick: (node: MapNode) => void
}

const Node: React.FC<Props> = ({ node, location, onClick }) => {

  // const themeColor = THEME_COLORS[node.theme]
  const canAdvance = gameState.canAdvance(node)
  const isCompleted = gameState.isCompleted(node)

  const classes = [
    'dot',
    node.id,
    canAdvance ? 'available' : '',
    isCompleted ? 'completed' : ''
  ].join(' ')

  const style: CSSProperties = {
    left: `${location.x}%`,
    top: `${location.y}%`,
    // borderColor: themeColor,
    // ...(isCompleted ? { backgroundColor: themeColor } : {})
  }

  return (
    <div className={classes} style={style} onClick={() => onClick(node)}> </div>
  )
}

export default Node

