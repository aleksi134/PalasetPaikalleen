import { IonContent, IonModal, useIonViewDidEnter } from '@ionic/react'
import React, { useRef, useState } from 'react'
import { MapNode, nodes } from '../GameMap'
import './Map.css'
import Pawn from './Pawn'
import gameState from '../GameState'
import Node from './Node'

interface Props {
  name: string
}

const Home: React.FC<Props> = () => {
  const startingNode = nodes.find(n => n.id === gameState.currentLocation)

  const [showModal, setShowModal] = useState<string | false>(false)
  const [currentNode, setCurrentNode] = useState<MapNode>(startingNode as any)

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
      timeout.current = setTimeout(() => setShowModal(node.id), tms)
    }
  }

  // useIonViewDidEnter(() => setShowModal('lappeenranta'))

  return (
    <div className="container">
      <p className="instructions">
        Klikkaa kartan palloja avataksesi tehtävän
      </p>

      <div className="map-container">
        {nodes.map(node => <Node key={node.id} node={node} onClick={onClickNode} />)}
        <img className="map" src="assets/finland-map.png" alt="Suomen kartta" />
        <Pawn location={currentNode.location} />
      </div>

      <IonModal isOpen={Boolean(showModal)} cssClass='minigame-modal'>
        <IonContent>
          {<currentNode.game done={closeModal} state={gameState.load(currentNode.id)} />}
        </IonContent>
      </IonModal>
    </div>
  )
}

export default Home
