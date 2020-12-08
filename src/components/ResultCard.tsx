import { isArray, orderBy } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import gameState from '../GameState'
import { CalculatorResult } from './calculator/Calculator'
import './ResultsCard.scss'

const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const mapSpans = (input: string[], capitalizeAll = false) =>
  isArray(input) ? input.map((s, i) =>
    <span key={i}>{(capitalizeAll || i === 0) ? capitalize(s) : s}</span>) : []

const mapScores = (input: Record<string, number> = {}, take: number) =>
  orderBy(Object.entries(input || {}), ([key, value]) => value)
    .reverse()
    .slice(0, take)
    .map(([key], i) => <span key={i}>{capitalize(key)}</span>)

const ResultsCard: React.FC = () => {
  const [imgDimension, setImgDimensions] = useState<{ width: number, height: number } | null>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  const fontSize = imgDimension ? (imgDimension.width / 6.5) + '%' : 0
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


  const vahvuudet = mapSpans(gameState.load('kuopio'))
  const voimavarapankki = mapSpans(gameState.load('rovaniemi'))
  const tyoelamataidot = mapSpans(gameState.load('oulu')).slice(0, 5)

  const arvot = mapScores(gameState.load('jyvaskyla'), 5)
  const valintojenTaustalla = mapScores(gameState.load('lappeenranta'), 5)

  const _calculatorResult: CalculatorResult = gameState.load('joensuu') || { scores: [], factors: [] }

  const koulutusalat = mapSpans(_calculatorResult.scores.map(r => r.occupation).slice(0, 5), true)

  const vaihtoehtolaskuri = <React.Fragment>
    <span className="occupation">{capitalize(_calculatorResult.scores[0]?.occupation)}</span>
    {_calculatorResult.factors.slice(0, 5).map((f, i) => <span key={i} className="factor">{f.name}</span>)}
  </React.Fragment>

  return (
    <div className="results-card" style={containerStyle}>
      <img ref={imgRef} className="card-background" src="/assets/loppukortti3.png" alt="loppukortti" />

      <div className="overlay-texts" style={{ fontSize, opacity }}>
        <div className="img-overlay vahvuudet"> {vahvuudet} </div>
        <div className="img-overlay voimavarapankki"> {voimavarapankki} </div>
        <div className="img-overlay arvot list"> {arvot} </div>
        <div className="img-overlay valintojen-taustalla list"> {valintojenTaustalla} </div>
        <div className="img-overlay koulutusalat list"> {koulutusalat} </div>
        <div className="img-overlay vaihtoehtolaskuri list"> {vaihtoehtolaskuri} </div>
        <div className="img-overlay tyoelamataidot list"> {tyoelamataidot} </div>
      </div>

    </div>
  )
}

export default ResultsCard
