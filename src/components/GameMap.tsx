import { IonContent, IonModal } from '@ionic/react'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { MapNode, nodes } from '../GameData'
import gameState from '../GameState'
import { CITIES, CityRecord, Location } from '../Types'
import findCircleLocations from '../utils/findCircleLocations'
import './GameMap.css'
import MapSvg from './MapSvg'
import Helsinki from './minigames/Helsinki'
import Kuopio from './minigames/Kuopio'
import Lappeenranta from './minigames/Lappeenranta'
import Node from './Node'
import Pawn from './Pawn'

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

interface Props {
  name: string
}

const Home: React.FC<Props> = () => {
  const [showModal, setShowModal] = useState(false)
  const [currentNode, setCurrentNode] = useState<MapNode>(gameState.currentNode)
  const [circleLocations, setCircleLocations] = useState<CityRecord<Location>>()
  const [pawnLocation, setPawnLocation] = useState<Location | null>(null)

  const timeout = useRef<NodeJS.Timeout>()

  const closeModal = (result: any) => {
    setShowModal(false)
    console.log({result})
    gameState.save(currentNode.id, result)
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
    setCircleLocations(findCircleLocations(node, CITIES)) , [])

  useEffect(() => {
    if (circleLocations) setPawnLocation(circleLocations[currentNode.id])
  }, [circleLocations, currentNode.id])

  // useIonViewDidEnter(() => setShowModal('lappeenranta'))
  const CurrentGameComponent = cityGameMap[currentNode.id]

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
      </div>

      <IonModal isOpen={Boolean(showModal)} cssClass='minigame-modal'>
        <IonContent>
          {<CurrentGameComponent done={closeModal} state={gameState.load(currentNode.id)} />}
        </IonContent>
      </IonModal>
    </div>
  )
}

export default Home
