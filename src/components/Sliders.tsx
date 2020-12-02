import { IonButton, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonRange } from '@ionic/react'
import { uniq } from 'lodash'
import React, { Fragment, useState } from 'react'
import './Sliders.scss'

type Result = Partial<Record<string, number>>

interface Props {
  options: string[],
  result: Result,
  onChange: (result: Result) => void
}

const Sliders: React.FC<Props> = ({ options, result = {}, onChange }) => {
  const uniqOptions = uniq([...options, ...Object.keys(result)])

  const [customOption, setCustomOption] = useState('')

  const updateValue = (option: string, value: number) => {
    if (result[option] !== value)
      onChange({ ...result, [option]: value })
  }

  const addCustomOption = () => {
    updateValue(customOption, 1)
    setCustomOption('')
  }

  return (
    <div className="sliders">
      <IonList>
        {uniqOptions.map(option =>
          <Fragment key={option}>
            <IonItemDivider>{option}</IonItemDivider>
            <IonItem lines="none">
              <IonRange min={1} max={5} step={1} snaps={true} pin={true} color="secondary"
                value={result[option] || 1}
                onIonChange={e => updateValue(option, e.detail.value as number)}>
                {/* <IonLabel slot="start">1</IonLabel>
                <IonLabel slot="end">5</IonLabel> */}
              </IonRange>
            </IonItem>
          </Fragment>
        )}
      </IonList>

      <IonList lines="none" className="ion-margin-vertical">
        <IonItem>
          <IonLabel><strong>Kirjoita oma</strong></IonLabel>
        </IonItem>
        <IonItem lines="inset">
          <IonInput
            value={customOption}
            onIonChange={e => setCustomOption(e.detail.value!)}
            placeholder="Esim. Puhelias"> </IonInput>
          <IonButton disabled={customOption.length <= 3} size="default" slot="end" onClick={addCustomOption as any}>Lisää</IonButton>
        </IonItem>
      </IonList>
    </div>
  )
}

export default Sliders
