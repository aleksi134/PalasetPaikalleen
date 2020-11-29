import { IonButton } from '@ionic/react'
import React, { useState } from 'react'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'

type State = Partial<Record<string, number>>

interface Props {
  state: State,
  done: (result: State) => void
  close: VoidFunction
}

// const preDefinedOptions = [ ]

const Assignment: React.FC<Props> = ({ state = {}, done, close }) => {
  const [ result, setResult ] = useState<State>(state)

  const isDone = true

  return (
    <div>
      <AssignmentInstructions title='Laskuri'>
        <p>
          Tähän tulee laskuri.
        </p>

      </AssignmentInstructions>

      <AssignmentFooter done={() => done(result)} close={close} isDone={isDone}>
      </AssignmentFooter>
    </div>
  )
}

export default Assignment
