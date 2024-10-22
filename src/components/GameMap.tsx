import { IonContent, IonModal } from '@ionic/react'
import React, { useCallback, useEffect, useRef, useState } from 'react'
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
  const pawnRef = useRef<{ jump: any }>(null)

  const isMounted = useRef(true)
  useEffect(() => () => { isMounted.current = false }, [])


  const timeout = useRef<NodeJS.Timeout>()

  const done = (result: any) => {
    pawnRef.current?.jump({ timeout: 500 })
    console.log({ result })
    gameState.save(currentNode.id, result)
  }

  const closeModal = useCallback(() => {
    if (isMounted.current) setShowModal(false)
  }, [])

  const onClickNode = (node: MapNode) => {
    if (timeout.current) clearTimeout(timeout.current)
    const isCurrentNode = currentNode.id === node.id

    if (gameState.canAdvance(node)) {
      pawnRef.current?.jump()
      gameState.move(node)
      setCurrentNode(node)
      const tms = isCurrentNode ? 0 : 1500
      timeout.current = setTimeout(() => setShowModal(true), tms)
    }
  }

  const svgRefCallback = useCallback((node: SVGSVGElement) =>  {
    if (node) setCircleLocations(findCircleLocations(CITIES, node))
  }, [])

  // useIonViewDidEnter(() => setTimeout(() => setShowModal(true)))

  return (
    <div className="container ion-padding">
      <p className="instructions">
        Klikkaa kartan palloja avataksesi tehtävän. <br />
        Avaa ensimmäinen tehtävä täppäämällä pelinappulaa.
      </p>

      <div className="map-container">
        {circleLocations && nodes.map(node =>
          <Node key={node.id} node={node} location={circleLocations[node.id]} onClick={onClickNode} />)}

        <MapSvg svgRefCallback={svgRefCallback} />
        <Pawn location={pawnLocation} ref={pawnRef as any} />
        <ProgressMeter />
      </div>

      <IonModal isOpen={Boolean(showModal)} onDidDismiss={closeModal} cssClass='minigame-modal'>
        <IonContent>
          <MiniGame node={currentNode} done={done} close={closeModal} />
        </IonContent>
      </IonModal>
    </div>
  )
}

export default Home
