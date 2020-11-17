import {
  IonButton,
  IonCard,
  IonCardContent,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
} from '@ionic/react'
import { isNumber } from 'lodash'
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
  const [text, setText] = useState({
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  })
  const [number, setNumber] = useState<number>(state.number)

  const saveAndClose = () => done({ text, number })

<<<<<<< HEAD:src/components/minigames/Helsinki.tsx
  const [formData, setFormData] = useState([])
=======
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
>>>>>>> 0d316f4a58f3c814c1e4aaa0f52f6a48bd40b49b:src/components/assignments/Helsinki.tsx

  const inputSave = () => {
    let copyFormData = [...formData] as any
    copyFormData.push({ 'text from field': text, 'numbers': number })
    console.log(copyFormData)
    setFormData(copyFormData)
  }

  const saveOnClick = () => {
    inputSave()
    saveAndClose()
  }

  return (
    <div className="container minigame">
      <IonCard>
        <IonItem>
          <img
            style={{ width: '60px' }}
            src="assets/kuunteleva.png"
            alt="kuunteleva"
            slot="start"
          />
          <IonLabel>Formeja alla</IonLabel>
        </IonItem>

        <IonCardContent>
          <p>Alta löytyy täytettäviä formeja.</p>
        </IonCardContent>
      </IonCard>
      <IonList>
        <IonItemDivider>Input with clear button when there is a value</IonItemDivider>
        <IonItem>
          <IonInput
            value={text.text1}
            placeholder="Enter Input"
            onIonChange={(e) => setText((prev) => ({ ...prev, text1: e.detail.value! }))}
            clearInput
          ></IonInput>
        </IonItem>

        <IonItemDivider>Input with clear button when there is a value</IonItemDivider>
        <IonItem>
          <IonInput
            value={text.text2}
            placeholder="Enter Input"
            onIonChange={(e) => setText((prev) => ({ ...prev, text2: e.detail.value! }))}
            clearInput
          ></IonInput>
        </IonItem>

        <IonItemDivider>Input with clear button when there is a value</IonItemDivider>
        <IonItem>
          <IonInput
            value={text.text3}
            placeholder="Enter Input"
            onIonChange={(e) => setText((prev) => ({ ...prev, text3: e.detail.value! }))}
            clearInput
          ></IonInput>
        </IonItem>

        <IonItemDivider>Input with clear button when there is a value</IonItemDivider>
        <IonItem>
          <IonInput
            value={text.text4}
            placeholder="Enter Input"
            onIonChange={(e) => setText((prev) => ({ ...prev, text4: e.detail.value! }))}
            clearInput
          ></IonInput>
        </IonItem>

        <IonItemDivider>Number type input</IonItemDivider>
        <IonItem>
          <IonInput
            value={number}
            type="number"
            placeholder="Enter Number"
            onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}
          ></IonInput>
        </IonItem>
      </IonList>
      <IonButton className="done" onClick={saveOnClick}>
        Merkitse suoritetuksi
      </IonButton>
    </div>
  )
}

export default MiniGame
