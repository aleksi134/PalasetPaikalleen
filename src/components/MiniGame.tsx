import React, { CSSProperties, FC } from 'react'
import { MapNode } from '../GameData'
import { Result } from '../GameState'
import { CityRecord, THEME_COLORS, THEME_NAMES } from '../Types'
import Helsinki from './assignments/Helsinki'
import Kuopio from './assignments/Kuopio'
import Lappeenranta from './assignments/Lappeenranta'
import Template from './assignments/Template'
import './Minigame.scss'
import gameState from '../GameState'

const cityGameMap: CityRecord<FC<any>> = {
  rovaniemi: Template,
  oulu: Template,
  kuopio: Kuopio,
  joensuu: Template,
  lappeenranta: Lappeenranta,
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
}

const MiniGame: React.FC<Props> = ({ node, done }) => {
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
      <div className="theme-bar" style={themeStyle}>{themeName}</div>
      <CurrentGameComponent state={state} done={done} />
    </div>
  )
}

export default MiniGame
