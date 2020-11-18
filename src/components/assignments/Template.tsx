import { IonButton } from '@ionic/react'
import React from 'react'
import AssignmentInstructions from '../AssignmentInstructions'


interface Result { }

interface Props {
  state: Result
  done: (result: Result) => void
  cancel: VoidFunction
}

const Assignment: React.FC<Props> = ({ state, done, cancel }) => {
  const saveAndClose = () => done(state || 'todo')

  return (
    <div className="assignment">
      <AssignmentInstructions
        title='Title'
        description='Description'
      />

      <IonButton className="done" onClick={saveAndClose}>Merkitse suoritetuksi</IonButton>
    </div>
  )
}

export default Assignment
