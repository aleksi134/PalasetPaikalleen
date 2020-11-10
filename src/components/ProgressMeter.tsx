import React, { MouseEventHandler, RefObject, useEffect, useRef } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import gameState from '../GameState'
import { Theme, THEME_COLORS, THEME_COLOR_INACTIVE } from '../Types'
import './ProgressMeter.scss'

interface Props extends RouteComponentProps<any> {
  // onClick: Function
}

const ProgressMeter: React.FC<Props> = ({ history }) => {
  // const { progress } = useGameState()

  const svgRef = useRef<SVGSVGElement>(null)

  const refs: Record<Theme, RefObject<SVGPathElement>[]> = {
    itsetuntemus: [useRef(null), useRef(null)],
    tyoelamatietous: [useRef(null), useRef(null)],
    tietojaopiskelusta: [useRef(null), useRef(null)],
    elamantilanne: [useRef(null), useRef(null)],
    valintojentekeminen: [useRef(null), useRef(null)]
  }

  // TODO: optimization
  useEffect(() => {
    const progress = gameState.themeProgress

    for (const key in refs) {
      const [innerSector, outerSector] = refs[key].map(r => r.current)
      const themeProgress = progress[key]
      const color = THEME_COLORS[key]

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

      <svg ref={svgRef} version="1.1" viewBox="0 0 71.549 71.7" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>{`.cls-1{fill:#e8e8e8;stroke:#d3d3d3;}.cls-1,.cls-2{stroke-miterlimit:10;}.cls-2{fill:#2bb9cc;stroke:#000;}`}</style>
        </defs>
        <g transform="translate(-97.188 -91.906)">
          <g id="progress" transform="matrix(.26458 0 0 .26458 97.189 91.906)">
            <path ref={refs.itsetuntemus[1]} className="cls-1 active" d="m135.3 135.51 79.34-109.38a135 135 0 0 0-158.82 0.39l79.35 109z" />
            <path ref={refs.itsetuntemus[0]} className="cls-1" d="m133.81 137.02 59.505-82.035a101.25 101.25 0 0 0-119.12 0.2925l59.512 81.75z" />

            <path ref={refs.tyoelamatietous[1]} className="cls-1" d="m135 135.5v0.11l0.17-0.06-79.35-109a135.13 135.13 0 0 0-48.72 150.73l127.9-41.67z" />
            <path ref={refs.tyoelamatietous[0]} className="cls-1" d="m133.58 137.01v0.0825l0.1275-0.045-59.512-81.75a101.35 101.35 0 0 0-36.54 113.05l95.925-31.252z" />

            <path ref={refs.tietojaopiskelusta[1]} className="cls-1" d="m134.94 136 0.06-0.08v-0.31l-127.9 41.67a135 135 0 0 0 127.9 93.21v-134.57z" />
            <path ref={refs.tietojaopiskelusta[0]} className="cls-1" d="m133.54 137.39 0.045-0.06v-0.2325l-95.925 31.252a101.25 101.25 0 0 0 95.925 69.908v-100.93z" />

            <path ref={refs.elamantilanne[1]} className="cls-1" d="m136.53 134.04 126.94 41.137a133.31 133.31 0 0 0-48.832-149.04l-78.157 107.79z" />
            <path ref={refs.elamantilanne[0]} className="cls-1" d="m134.73 135.92 95.204 30.852a99.986 99.986 0 0 0-36.624-111.78l-58.618 80.84z" />

            <path ref={refs.valintojentekeminen[1]} className="cls-1" d="m136.71 134.23 0.10324 133.44a133.31 133.31 0 0 0 126.66-92.498l-126.66-41.024z" />
            <path ref={refs.valintojentekeminen[0]} className="cls-1" d="m134.87 136.06 0.0774 100.08a99.986 99.986 0 0 0 94.993-69.374l-94.997-30.768z"  />

            <circle className="cls-2" cx="135" cy="135.5" r="61.5" />
          </g>
        </g>
      </svg>


      <div className="text-wrapper">
        <span className="text">Unelmien<br />opiskelupaikka</span>
      </div>
    </div>
  )
}

export default withRouter(ProgressMeter)

