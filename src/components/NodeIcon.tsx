import { IonIcon } from '@ionic/react'
import React, { CSSProperties } from 'react'
import { Location } from '../Types'
import './NodeIcon.scss'

interface Props {
  location: Location | undefined
  icon: string
}

const NodeIcon: React.FC<Props> = ({ location, icon }) => {

  const style: CSSProperties = location
    ? { top: `${location.y}%`, left: `${location.x}%` }
    : { display: 'none' }

  return (
    <div className="node-icon" style={style}>
      <IonIcon icon={icon} />
    </div>
  )
}

export default NodeIcon
