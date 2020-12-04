import React from 'react'
import './MapSvg.scss'

interface Props {
  svgRefCallback: (node: SVGSVGElement) => void
}

const MapSvg: React.FC<Props> = ({ svgRefCallback }) => {

  return (
    <div className="results-svg">

    </div>
  )
}

export default MapSvg

