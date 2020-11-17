import React, { CSSProperties, FC } from 'react'
import { MapNode } from '../GameData'
import { Result } from '../GameState'
import { CityRecord, THEME_COLORS, THEME_NAMES } from '../Types'
import Helsinki from './assignments/Helsinki'
import Kuopio from './assignments/Kuopio'
import Itsetuntemus11 from './assignments/Itsetuntemus-1.1'
import Template from './assignments/Template'
import './Minigame.scss'
import gameState from '../GameState'
import { IonButton, IonIcon } from '@ionic/react'
import { close } from 'ionicons/icons'

const cityGameMap: CityRecord<FC<any>> = {
  rovaniemi: Template,
  oulu: Template,
  kuopio: Itsetuntemus11,
  joensuu: Template,
  lappeenranta: Template,
  jyvaskyla: Template,
  tampere: Template,
  vaasa: Template,
  turku: Template,
  helsinki: Helsinki,
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
  const classes = ['container', 'minigame', node.id]

  // USE EFFECT SET GAMESTATE?

  const themeName = THEME_NAMES[node.theme]
  const themeStyle: CSSProperties = {
    backgroundColor: THEME_COLORS[node.theme]
  }

  return (
    <div className={classes.join(' ')}>
      <div className="theme-bar" style={themeStyle}>{themeName}
        <IonButton className="cancel" onClick={cancel} color="dark" shape="round" size="small">
          <IonIcon slot="icon-only" icon={close} />
        </IonButton>
      </div>
      <CurrentGameComponent state={state} done={done} cancel={cancel} />
    </div>
  )
}

export default MiniGame
