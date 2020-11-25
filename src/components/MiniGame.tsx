import React, { CSSProperties, FC, useCallback, useRef, useState } from 'react'
import { MapNode, NodeContext } from '../GameData'
import { Result } from '../GameState'
import { CityRecord, THEME_COLORS, THEME_NAMES } from '../Types'
import Template from './assignments/Template'
import './Minigame.scss'
import gameState from '../GameState'
import { IonButton, IonIcon, IonSlide, IonSlides, useIonViewDidEnter } from '@ionic/react'
import { close as closeIcon } from 'ionicons/icons'

import Itsetuntemus11 from './assignments/Itsetuntemus-1.1'
import Itsetuntemus12 from './assignments/Itsetuntemus-1.2'
import Tyoelamatietous21 from './assignments/Tyoelamatietous-2.1'
import Tyoelamatietous22 from './assignments/Tyoelamatietous-2.2'
import Tietojaopiskelusta31 from './assignments/Tietojaopiskelusta-3.1'
import Elamantilanne41 from './assignments/Elamantilanne-4.1'
import Elamantilanne42 from './assignments/Elamantilanne-4.2'
import Valintojentekeminen51 from './assignments/Valintojentekeminen-5.1'
import Valintojentekeminen52 from './assignments/Valintojentekeminen-5.2'
import Lisatehtava13 from './assignments/Lisatehtava-1.3'
import Lisatehtava33 from './assignments/Lisatehtava-3.3'

const cityGameMap: CityRecord<FC<any>[]> = {
  kuopio: [Itsetuntemus11],
  joensuu: [Itsetuntemus12],
  oulu: [Tyoelamatietous22],
  jyvaskyla: [Tyoelamatietous21],
  vaasa: [Tietojaopiskelusta31],
  turku: [Elamantilanne41],
  helsinki: [Elamantilanne42],
  lappeenranta: [Valintojentekeminen51],
  tampere: [Template],
  rovaniemi: [Valintojentekeminen52],
  maarianhamina: [Lisatehtava13, Lisatehtava33],
}

type Done = (result: Result) => void

interface Props {
  node: MapNode
  done: Done
  close: VoidFunction
}

const slideOpts = {
  allowTouchMove: false
}

const MiniGame: React.FC<Props> = ({ node, done, close }) => {
  const currentGameComponents = cityGameMap[node.id]
  const state = gameState.load(node.id)
  const classes = ['container', 'minigame', 'assignment', node.id]

  const [index, setIndex] = useState(0)
  const swiper = useRef<any>(null)

  const slidesRef = useCallback(async (slidesRef: HTMLIonSlidesElement) => {
    if (slidesRef) {
      swiper.current = await slidesRef.getSwiper()
    }
  }, [])

  const themeName = THEME_NAMES[node.theme]
  const themeStyle: CSSProperties = {
    backgroundColor: THEME_COLORS[node.theme]
  }

  const nextSlide = () => swiper.current?.slideNext()

  const saveAndClose = (index: number) => (res: any) => {
    // TODO multiple components
    done(res)

    if (index + 1 === currentGameComponents.length) {
      close()
    } else {
      nextSlide()
    }
  }

  const onSlideChange = useCallback(() => setIndex(swiper.current?.activeIndex || 0), [])

  const countIndicator = currentGameComponents.length > 1
    ? `(${index + 1} / ${currentGameComponents.length})` : ''

  const FirstComponent = currentGameComponents[0]

  // useIonViewDidEnter(() => {
  //   console.log('update')
  //   swiper.current.update()
  // })

  return (
    <div className={classes.join(' ')}>
      <div className="theme-bar" style={themeStyle}>
        {themeName} {countIndicator}
        <IonButton className="cancel" onClick={close} color="dark" shape="round" size="small">
          <IonIcon slot="icon-only" icon={closeIcon} />
        </IonButton>
      </div>

      <NodeContext.Provider value={node}>
        {currentGameComponents.length > 1 ?
          (
            // <IonSlides onIonSlideDidChange={onSlideChange} pager={false} options={slideOpts} ref={slidesRef as any}>
            //   {currentGameComponents.map((Component, index) =>
            //     <IonSlide key={index} /* order won't change */>
            //       <div style={{ height: '100%', width: '100%' }}>
            //         <Component state={state} done={saveAndClose(index)} cancel={close} />
            //       </div>
            //     </IonSlide>
            //   )}
            // </IonSlides>
            <div>
              {currentGameComponents.map((Component, index) =>
                <div key={index}>
                  <Component state={state} done={saveAndClose(index)} cancel={close} />
                </div>
              )}
            </div>
          ) : (
            <FirstComponent state={state} done={saveAndClose(index)} cancel={close} />
          )
        }
      </NodeContext.Provider>
    </div>
  )
}

export default MiniGame
