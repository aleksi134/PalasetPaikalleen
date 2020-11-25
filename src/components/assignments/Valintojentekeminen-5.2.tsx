import { IonButton } from '@ionic/react'
import React, { useState } from 'react'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'

type State = Partial<Record<string, number>>

interface Props {
  state: State,
  done: (result: State) => void
  cancel: VoidFunction
}

// const preDefinedOptions = [ ]

const Assignment: React.FC<Props> = ({ state = {}, done, cancel }) => {
  const [ result, setResult ] = useState<State>(state)

  const isDone = true
  const saveAndClose = () => done(result)

  return (
    <div>
      <AssignmentInstructions title='Laskuri'>
        <p>
          Tähän tulee laskuri.
        </p>

      </AssignmentInstructions>

      <AssignmentFooter isDone={isDone} />
      <IonButton disabled={!isDone} className="done" onClick={saveAndClose}>Merkitse suoritetuksi</IonButton>
    </div>
  )
}

export default Assignment
