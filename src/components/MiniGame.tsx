import { IonButton, IonIcon } from '@ionic/react'
import { close as closeIcon } from 'ionicons/icons'
import React, { CSSProperties, FC } from 'react'
import { MapNode, NodeContext } from '../GameData'
import gameState, { Result } from '../GameState'
import { CityRecord, THEME_COLORS, THEME_NAMES } from '../Types'
import Elamantilanne41 from './assignments/Elamantilanne-4.1'
import Elamantilanne42 from './assignments/Elamantilanne-4.2'
import Itsetuntemus11 from './assignments/Itsetuntemus-1.1'
import Itsetuntemus12 from './assignments/Itsetuntemus-1.2'
import Lisatehtava13 from './assignments/Lisatehtava-1.3'
import Lisatehtava33 from './assignments/Lisatehtava-3.3'
import Tietojaopiskelusta31 from './assignments/Tietojaopiskelusta-3.1'
import Tyoelamatietous21 from './assignments/Tyoelamatietous-2.1'
import Tyoelamatietous22 from './assignments/Tyoelamatietous-2.2'
import Valintojentekeminen51 from './assignments/Valintojentekeminen-5.1'
import Valintojentekeminen52 from './assignments/Valintojentekeminen-5.2'
import TinderModule from './assignments/TinderModule'
import './Minigame.scss'

// const cityGameMap: CityRecord<FC<any>> = {
//   kuopio: Itsetuntemus11,
//   joensuu: Valintojentekeminen52,
//   oulu: Tyoelamatietous22,
//   jyvaskyla: Tyoelamatietous21,
//   vaasa: Tietojaopiskelusta31,
//   turku: Elamantilanne41,
//   helsinki: Elamantilanne42,
//   lappeenranta: Valintojentekeminen51,
//   tampere: TinderModule,
//   rovaniemi: Itsetuntemus12,
//   maarianhamina: Lisatehtava13,
//   inari: Lisatehtava33,
// }

const cityGameMap: CityRecord<FC<any>> = {
  kuopio: Itsetuntemus11,
  joensuu: Valintojentekeminen52,
  oulu: Tyoelamatietous21,
  jyvaskyla: Itsetuntemus12,
  vaasa: Tyoelamatietous22,
  turku: Elamantilanne41,
  helsinki: Tietojaopiskelusta31,
  lappeenranta: Valintojentekeminen51,
  tampere: TinderModule,
  rovaniemi: Elamantilanne42,
  maarianhamina: Lisatehtava13,
  inari: Lisatehtava33,
}

type Done = (result: Result) => void

interface Props {
  node: MapNode
  done: Done
  close: VoidFunction
}

const MiniGame: React.FC<Props> = ({ node, done, close }) => {
  const state = gameState.load(node.id)
  const classes = ['container', 'minigame', 'assignment', node.id]

  const themeName = node.customThemeName || THEME_NAMES[node.theme]
  const themeStyle: CSSProperties = {
    backgroundColor: THEME_COLORS[node.theme]
  }

  const Component = cityGameMap[node.id]

  return (
    <div className={classes.join(' ')}>
      <div className="theme-bar" style={themeStyle}>
        {themeName}
        <IonButton className="cancel" onClick={close} color="dark" shape="round" size="small">
          <IonIcon slot="icon-only" icon={closeIcon} />
        </IonButton>
      </div>

      <NodeContext.Provider value={node}>
        <Component state={state} done={done} close={close} />
      </NodeContext.Provider>
    </div>
  )
}

export default MiniGame
