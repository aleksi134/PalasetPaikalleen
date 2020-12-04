import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import gameState from '../GameState'
import './ResultsCard.scss'

interface Props { }

const ResultsCard: React.FC<Props> = () => {
  const [imgDimension, setImgDimensions] = useState<{ width: number, height: number } | null>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  const fontSize = imgDimension ? (imgDimension.width / 6) + '%' : 0
  const opacity = imgDimension ? 1 : 0
  const containerStyle = imgDimension ? {
    width: imgDimension.width + 'px',
    height: imgDimension.height + 'px'
  } : {}

  useEffect(() => {
    const interval = setInterval(() => {
      const width = imgRef.current?.clientWidth || 0
      const height = imgRef.current?.clientHeight || 0
      if (width > 0 && height > 0) {
        setImgDimensions({ width, height })
        clearInterval(interval)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])


  const isGameCompleted = gameState.isGameCompleted()

  const vahvuudet: string[] = gameState.load('kuopio')
  const voimavarapankki = gameState.load('kuopio')
  const arvot = gameState.load('kuopio')
  const valintojenTaustalla = gameState.load('kuopio')
  const koulutusalat = gameState.load('kuopio')
  const vaihtoehtolaskuri = gameState.load('kuopio')
  const tarkeat = gameState.load('kuopio')
  const kehittaa = gameState.load('kuopio')
  const score = 125//gameState.load('kuopio')


  return (
    <div className="results-card" style={containerStyle}>
      <img ref={imgRef} className="card-background" src="/assets/loppukortti.png" alt="loppukortti" />

      <div className="overlay-texts" style={{ fontSize, opacity }}>
        <div className="img-overlay vahvuudet">
          {vahvuudet.join(', ')}
          {/* {vahvuudet.map(x => <span>{x}, </span>)} */}
        </div>
        <div className="img-overlay voimavarapankki">
          {vahvuudet.join(', ')}
        </div>
        <div className="img-overlay arvot">
          {vahvuudet.join(', ')}
        </div>
        <div className="img-overlay valintojen-taustalla">
          {vahvuudet.join(', ')}
        </div>
        <div className="img-overlay koulutusalat">
          {vahvuudet.join(', ')}
        </div>
        <div className="img-overlay vaihtoehtolaskuri">
          {vahvuudet.join(', ')}
        </div>
        <div className="img-overlay tarkeat">
          {vahvuudet.join(', ')}
        </div>
        <div className="img-overlay kehittaa">
          {vahvuudet.join(', ')}
        </div>
        <div className="img-overlay score">
          {score}
        </div>
      </div>

    </div>
  )
}

export default ResultsCard
