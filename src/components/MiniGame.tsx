import React, { CSSProperties, FC } from 'react'
import { MapNode, NodeContext } from '../GameData'
import { Result } from '../GameState'
import { CityRecord, THEME_COLORS, THEME_NAMES } from '../Types'
import Template from './assignments/Template'
import './Minigame.scss'
import gameState from '../GameState'
import { IonButton, IonIcon } from '@ionic/react'
import { close } from 'ionicons/icons'

import Itsetuntemus11 from './assignments/Itsetuntemus-1.1'
import Itsetuntemus12 from './assignments/Itsetuntemus-1.2'
import Tyoelamatietous21 from './assignments/Tyoelamatietous-2.1'
import Tyoelamatietous22 from './assignments/Tyoelamatietous-2.2'
import Tietojaopiskelusta31 from './assignments/Tietojaopiskelusta-3.1'
import Elamantilanne41 from './assignments/Elamantilanne-4.1'
import Elamantilanne42 from './assignments/Elamantilanne-4.2'
import Valintojentekeminen51 from './assignments/Valintojentekeminen-5.1'

const cityGameMap: CityRecord<FC<any>> = {
  kuopio: Itsetuntemus11,
  joensuu: Itsetuntemus12,
  oulu: Tyoelamatietous22,
  jyvaskyla: Tyoelamatietous21,
  vaasa: Tietojaopiskelusta31,
  turku: Elamantilanne41,
  helsinki: Elamantilanne42,
  lappeenranta: Valintojentekeminen51,
  rovaniemi: Template,
  tampere: Template,
  maarianhamina: Template,
}

type Done = (result: Result) => void

interface Props {
  node: MapNode
  done: Done
  cancel: VoidFunction
}


const MiniGame: React.FC<Props> = ({ node, done, cancel }) => {
  const CurrentGameComponent = cityGameMap[node.id]
  const state = gameState.load(node.id)
  const classes = ['container', 'minigame', 'assignment', node.id]

  // USE EFFECT SET GAMESTATE?

  const themeName = THEME_NAMES[node.theme]
  const themeStyle: CSSProperties = {
    backgroundColor: THEME_COLORS[node.theme]
  }

  return (
    <div className={classes.join(' ')}>
      <div className="theme-bar" style={themeStyle}>
        {themeName}
        <IonButton className="cancel" onClick={cancel} color="dark" shape="round" size="small">
          <IonIcon slot="icon-only" icon={close} />
        </IonButton>
      </div>

      <NodeContext.Provider value={node}>
        <CurrentGameComponent state={state} done={done} cancel={cancel} node={node} />
      </NodeContext.Provider>
    </div>
  )
}

export default MiniGame
