import React, { MouseEventHandler, RefObject, useEffect, useRef } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import gameState from '../GameState'
import { Theme, THEME_COLORS, THEME_COLOR_INACTIVE } from '../Types'
import './ProgressMeter.scss'

type ProgressTheme = Exclude<Theme, 'bonus'>

interface Props extends RouteComponentProps<any> {
  // onClick: Function
}

const ProgressMeter: React.FC<Props> = ({ history }) => {
  // const { progress } = useGameState()

  const svgRef = useRef<SVGSVGElement>(null)

  const refs: Record<ProgressTheme, RefObject<SVGPathElement>[]> = {
    itsetuntemus: [useRef(null), useRef(null)],
    tyoelamatietous: [useRef(null), useRef(null)],
    tietojaopiskelusta: [useRef(null), useRef(null)],
    elamantilanne: [useRef(null), useRef(null)],
    valintojentekeminen: [useRef(null), useRef(null)]
  }

  // TODO: optimization
  useEffect(() => {
    const { bonus, ...progress } = gameState.themeProgress

    for (const key in refs) {
      const [innerSector, outerSector] = refs[key as ProgressTheme].map(r => r.current)
      const themeProgress = progress[key as ProgressTheme]
      const color = THEME_COLORS[key as ProgressTheme]

      if (!innerSector || !outerSector) return

      if (themeProgress === 0) {
        innerSector.style.fill = THEME_COLOR_INACTIVE
        outerSector.style.fill = THEME_COLOR_INACTIVE
      }

      if (themeProgress >= 1)
        innerSector.style.fill = color

      if (themeProgress >= 2)
        outerSector.style.fill = color
    }

  })

  // useEffect(() => {
  //   svgRef.current?.animate([
  //     { transform: 'scale(1)' },
  //     { transform: 'scale(1.5)' },
  //     { transform: 'scale(1)' }
  //   ], {
  //     duration: 1000,
  //     iterations: 1,
  //     delay: 1000,
  //     easing: 'ease'
  //   });
  // }, [])

  const navigateToResults: MouseEventHandler = (e) => {
    e.preventDefault()
    history.push('/page/Results')
  }

  return (
    <div onClick={navigateToResults} className="progress-meter">

      <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271 271">
        <defs>
          <style>{`.cls-1{fill:#e8e8e8;stroke:#d3d3d3;}.cls-1,.cls-2{stroke - miterlimit:10;}.cls-2{fill:#2bb9cc;stroke:#000;}`}</style>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="progress">
            <path ref={refs.itsetuntemus[1]} className="cls-1" d="M135,37a98,98,0,0,1,58,18.91l21.61-29.78a135,135,0,0,0-158.82.39L77.12,55.8A98.06,98.06,0,0,1,135,37Z" />
            <path ref={refs.itsetuntemus[0]} className="cls-1" d="M77.12,55.8l58,79.75.13,0L193,55.91A98.5,98.5,0,0,0,77.12,55.8Z" />

            <path ref={refs.tyoelamatietous[1]} className="cls-1" d="M36.5,135.5A98.36,98.36,0,0,1,77.12,55.8L55.82,26.52A135.13,135.13,0,0,0,7.1,177.28l34.26-11.17A98.3,98.3,0,0,1,36.5,135.5Z" />
            <path ref={refs.tyoelamatietous[0]} className="cls-1" d="M135,135.5v.11l.17-.06-58-79.75A98.58,98.58,0,0,0,41.36,166.11L135,135.61Z" />

            <path ref={refs.tietojaopiskelusta[1]} className="cls-1" d="M41.36,166.11,7.1,177.28A135,135,0,0,0,135,270.49V234A98.53,98.53,0,0,1,41.36,166.11Z" />
            <path ref={refs.tietojaopiskelusta[0]} className="cls-1" d="M134.94,136l.06-.08v-.31l-93.64,30.5A98.53,98.53,0,0,0,135,234V135.92Z" />

            <path ref={refs.elamantilanne[1]} className="cls-1" d="M214.64,26.13,193,55.91a98.59,98.59,0,0,1,35.74,109.81L264,177.12a135.12,135.12,0,0,0-49.31-151Z" />
            <path ref={refs.elamantilanne[0]} className="cls-1" d="M135.93,135.19l-.09,0-.19.26,93.68,30.4a98.55,98.55,0,0,0-35.81-110l-57.68,79.32Z" />

            <path ref={refs.valintojentekeminen[1]} className="cls-1" d="M135,234v36.49h.5A135.06,135.06,0,0,0,264,177.12l-35.18-11.4A98.53,98.53,0,0,1,135,234Z" />
            <path ref={refs.valintojentekeminen[0]} className="cls-1" d="M136.15,135.38l-.06-.08-.3-.1-.2,98.49a98.54,98.54,0,0,0,93.69-67.82L136.09,135.3Z" />

            <circle className="cls-2" cx="133" cy="135.5" r="61.5" />

            <text x="100" y="128" fontSize="13" fill="white">UNELMIEN</text>
            <text x="80" y="148" fontSize="13" fill="white">OPISKELUPAIKKA</text>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default withRouter(ProgressMeter)

