import { IonIcon } from '@ionic/react'
import React, { CSSProperties } from 'react'
import { MapNode } from '../GameData'
import gameState from '../GameState'
import { THEME_COLORS } from '../Types'
import { lightenDarkenColor } from '../utils/color-tools'

interface Props {
  node: MapNode,
  location: { x: number, y: number }
  onClick: (node: MapNode) => void
}

const Node: React.FC<Props> = ({ node, location, onClick }) => {

  const themeColor = THEME_COLORS[node.theme]
  const canAdvance = gameState.canAdvance(node)
  const isCompleted = gameState.isCompleted(node)

  const backgroundColor = isCompleted ? themeColor : lightenDarkenColor(themeColor, 75)

  const classes = [
    'dot',
    [node.theme],
    node.id,
    canAdvance ? 'available' : '',
    isCompleted ? 'completed' : ''
  ].join(' ')

  const style: CSSProperties = {
    left: `${location.x}%`,
    top: `${location.y}%`,
    borderColor: themeColor,
    backgroundColor
    // ...(isCompleted ? { backgroundColor: themeColor } : {}),
  }

  return (
    <div className={classes} style={style} onClick={() => onClick(node)}>
      { node.icon && <IonIcon className="node-icon" icon={node.icon} style={{ color: themeColor }} />}
    </div>
  )
}

export default Node

