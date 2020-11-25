import { IonIcon } from '@ionic/react'
import { flag } from 'ionicons/icons'
import React, { CSSProperties } from 'react'
import { Location } from '../Types'
import './Flag.scss'

interface Props {
  location: Location | undefined
}

const Flag: React.FC<Props> = ({ location }) => {

  const style: CSSProperties = location
    ? { top: `${location.y}%`, left: `${location.x}%` }
    : { display: 'none' }

  return (
    <div className="flag" style={style}>
      <IonIcon icon={flag} />
    </div>
  )
}

export default Flag
