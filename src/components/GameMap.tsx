import { IonContent, IonModal, useIonViewDidEnter } from '@ionic/react'
import React, { FC, useCallback, useRef, useState } from 'react'
import { MapNode, nodes } from '../GameData'
import gameState from '../GameState'
import { CITIES, CityRecord, Location } from '../Types'
import findCircleLocations from '../utils/findCircleLocations'
import './GameMap.scss'
import MapSvg from './MapSvg'
import MiniGame from './MiniGame'
import Node from './Node'
import Pawn from './Pawn'
import ProgressMeter from './ProgressMeter'

interface Props {
  name: string
}

const Home: React.FC<Props> = () => {
  const [showModal, setShowModal] = useState(false)
  const [currentNode, setCurrentNode] = useState<MapNode>(gameState.currentNode)
  const [circleLocations, setCircleLocations] = useState<CityRecord<Location>>()
  const pawnLocation = circleLocations?.[currentNode.id] || null

  const timeout = useRef<NodeJS.Timeout>()

  const done = (result: any) => {
    setShowModal(false)
    console.log({ result })
    gameState.save(currentNode.id, result)
  }

  const cancel = () => {
    setShowModal(false)
  }

  const onClickNode = (node: MapNode) => {
    if (timeout.current) clearTimeout(timeout.current)
    const isCurrentNode = currentNode.id === node.id

    if (gameState.canAdvance(node)) {
      setCurrentNode(node)
      gameState.move(node)
      const tms = isCurrentNode ? 0 : 1500
      timeout.current = setTimeout(() => setShowModal(true), tms)
    }
  }

  const svgRefCallback = useCallback((node: SVGSVGElement) =>
    setCircleLocations(findCircleLocations(CITIES, node)) , [])

  useIonViewDidEnter(() => setShowModal(true))

  return (
    <div className="container ion-padding">
      <p className="instructions">
        Klikkaa kartan palloja avataksesi tehtävän
      </p>


      <div className="map-container">
        {circleLocations && nodes.map(node =>
          <Node key={node.id} node={node} location={circleLocations[node.id]} onClick={onClickNode} />)}

        <MapSvg svgRefCallback={svgRefCallback} />
        <Pawn location={pawnLocation} />
        <ProgressMeter />
      </div>

      <IonModal isOpen={Boolean(showModal)} cssClass='minigame-modal'>
        <IonContent>
          <MiniGame node={currentNode} done={done} cancel={cancel} />
        </IonContent>
      </IonModal>
    </div>
  )
}

export default Home
