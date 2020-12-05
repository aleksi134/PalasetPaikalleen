import { IonButton, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonRange } from '@ionic/react'
import { uniq } from 'lodash'
import React, { Fragment, useState } from 'react'
import CustomOption from './CustomOption'
import './Sliders.scss'

type Result = Partial<Record<string, number>>

interface Props {
  options: string[],
  result: Result,
  onChange: (result: Result) => void
  customOptionTitle?: string
  customOptionPlaceHolder?: string
  allowCustom?: boolean
}

const Sliders: React.FC<Props> = ({
  options,
  result = {},
  onChange,
  customOptionTitle,
  customOptionPlaceHolder,
  allowCustom = true
}) => {
  const uniqOptions = uniq([...options, ...Object.keys(result)])

  const updateValue = (option: string, value: number) => {
    if (result[option] !== value)
      onChange({ ...result, [option]: value })
  }

  const addCustomOption = (option: string) =>
    updateValue(option, 1)

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

      { allowCustom &&
        <CustomOption
          title={customOptionTitle}
          placeholder={customOptionPlaceHolder}
          onAdd={addCustomOption}
        />
      }
    </div>
  )
}

export default Sliders
