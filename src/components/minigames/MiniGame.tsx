import React, { CSSProperties, FC } from 'react'
import { MapNode } from '../../GameData'
import { Result } from '../../GameState'
import { CityRecord, THEME_COLORS, THEME_NAMES } from '../../Types'
import Helsinki from './Helsinki'
import Kuopio from './Kuopio'
import Lappeenranta from './Lappeenranta'
import './Minigame.scss'
import gameState from '../../GameState'

const cityGameMap: CityRecord<FC<any>> = {
  rovaniemi: Lappeenranta,
  oulu: Lappeenranta,
  kuopio: Kuopio,
  joensuu: Lappeenranta,
  lappeenranta: Lappeenranta,
  jyvaskyla: Lappeenranta,
  tampere: Lappeenranta,
  vaasa: Lappeenranta,
  turku: Lappeenranta,
  helsinki: Helsinki,
  maarianhamina: Helsinki,
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
      <div className="theme" style={themeStyle}>{themeName}</div>
      <CurrentGameComponent state={state} done={done} />
    </div>
  )
}

export default MiniGame
