import React from 'react'
import { numberNames } from '../Types'
import './AssignmentProgress.scss'

interface Props {
  required: number
  selected: number
  message?: string
}

const AssignmentProgress: React.FC<Props> = ({ required, selected, message }) => {
  const remaining = required - selected
  const isDone = remaining <= 0
  const remainingNumber = numberNames[remaining]

  // const messageString = message
  //   ?
  //   : Valitse vielä ainakin {remainingNumber}.

  return (
    <div className="assignment-progress">
      {!isDone
        ? <p>Valitse vielä ainakin {remainingNumber}.</p>
        : <p>Valmis! Voit merkitä tehtävän suoritetuksi.</p>
      }
    </div>
  )
}

export default AssignmentProgress

