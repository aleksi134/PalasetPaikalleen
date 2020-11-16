import { IonButton, IonCard, IonCardContent, IonInput, IonItem, IonItemDivider, IonLabel, IonList } from '@ionic/react'
import React, { useState } from 'react'
import { Result } from '../../GameState'
import AssignmentInstructions from '../AssignmentInstructions'
// import './Minigame.css'

interface Props {
  state: Result
  done: (result: Result) => void
}

const initialState = { text: '', number: null }

const MiniGame: React.FC<Props> = ({ state = initialState, done }) => {
  const [text, setText] = useState<string>(state.text)
  const [number, setNumber] = useState<number>(state.number)

  const saveAndClose = () => done({text, number})

  return (
      <div>

        <AssignmentInstructions
          title='Formeja alla'
          description='Alta löytyy täytettäviä formeja'
        />

      <IonList>
          <IonItemDivider>Default Input with Placeholder</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItemDivider>Input with clear button when there is a value</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItemDivider>Number type input</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>

          <IonItemDivider>Disabled input</IonItemDivider>
          <IonItem>
            <IonInput value={text} disabled></IonInput>
          </IonItem>

          <IonItemDivider>Readonly input</IonItemDivider>
          <IonItem>
            <IonInput value={text} readonly></IonInput>
          </IonItem>

          <IonItemDivider>Inputs with labels</IonItemDivider>

          <IonItem>
            <IonLabel>Default Label</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Floating Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="fixed">Fixed Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Stacked Label</IonLabel>
            <IonInput value={text}> </IonInput>
          </IonItem>
        </IonList>

        <IonButton className="done" onClick={saveAndClose}>Merkitse suoritetuksi</IonButton>
      </div>
  )
}

export default MiniGame
