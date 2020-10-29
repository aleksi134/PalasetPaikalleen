import React, { useEffect, useRef } from 'react'
import { useGameState } from '../hooks/UseGameState'
import './ProgressMeter.scss'

interface Props {}

// const themes = {
//   itsetuntemus: {},
//   tyoelamatietous: {},
//   tietojaopiskelusta: {},
//   elamantilanne: {},
//   valintojentekeminen: {}
// }

const ProgressMeter: React.FC<Props> = () => {
  const { progress } = useGameState()
  const chartRef = useRef<HTMLCanvasElement>(null)

  const oneDone = Boolean(progress.helsinki)

  useEffect(() => {
    const canvas = chartRef.current!
    const ctx = canvas.getContext('2d')!

    const segments = 5
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const padding = canvas.height / 100
    const outerSegmentRadius = centerX - padding
    const innerSegmentRadius = centerX / 1.4
    const innerCircleRadius = centerX / 2.1
    const fullCirceRad = Math.PI * 2
    const segmentSize = fullCirceRad * (1 / segments)

    const defaultSegmentColor = '#E2E2E2'
    const innerCircleColor = '#28ABC0'
    const strokeColor = '#303030'

    drawOuterSegments()
    drawInnerSegments()
    drawDividers()
    drawInnerCircle()
    drawText()
    hideBorder()

    function drawOuterSegments() {
      let lastEnd = 0
      for (let i = 0; i < segments; i++) {
        drawSegment(lastEnd, lastEnd + segmentSize, outerSegmentRadius, defaultSegmentColor)
        lastEnd += segmentSize
      }
    }

    function drawInnerSegments() {
      let lastEnd = 0
      for (let i = 0; i < segments; i++) {
        const segmentColor = oneDone && i === 2 ? '#179976' : defaultSegmentColor
        // const segmentColor = defaultSegmentColor
        drawSegment(lastEnd, lastEnd + segmentSize, innerSegmentRadius, segmentColor)
        lastEnd += segmentSize
      }
    }

    function drawDividers() {
      let lastEnd = 0
      for (let i = 0; i < segments; i++) {
        drawDivider(lastEnd, lastEnd + segmentSize, strokeColor)
        lastEnd += segmentSize
      }
    }

    function drawInnerCircle() {
      ctx.fillStyle = innerCircleColor
      ctx.strokeStyle = strokeColor
      ctx.moveTo(centerX, centerY)
      ctx.beginPath()
      ctx.arc(centerX, centerY, innerCircleRadius, 0, fullCirceRad, false)
      ctx.fill()
      ctx.stroke()
    }

    function drawText() {
      ctx.fillStyle = '#FFF'
      ctx.font = 'bold 9px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('UNELMIEN', canvas.width / 2, canvas.height / 2.1)
      ctx.fillText('OPISKELUPAIKKA', canvas.width / 2, canvas.height / 1.85)
    }

    // TODO: hack
    function hideBorder() {
      ctx.strokeStyle = '#FFF'
      ctx.lineWidth = 2
      ctx.moveTo(centerX, centerY)
      ctx.beginPath()
      ctx.arc(centerX, centerY, outerSegmentRadius, 0, fullCirceRad, false)
      ctx.stroke()
    }

    function drawSegment (start: number, stop: number, radius: number, color: string) {
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, start, stop, false)
      ctx.lineTo(centerX, centerY)
      ctx.fill()
    }

    function drawDivider (start: number, stop: number, color: string) {
      ctx.lineWidth = 0.5
      ctx.strokeStyle = color
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, outerSegmentRadius, start, stop, false)
      ctx.lineTo(centerX, centerY)
      ctx.stroke()
    }

  })

  return (
    <div className="progress-meter">
      <canvas width="200" height="200" ref={chartRef}></canvas>
      {/* <div className="text-wrapper">
        <span className="text">Unelmien <br /> opiskelupaikka</span>
      </div> */}
    </div>
  )
}

export default ProgressMeter

