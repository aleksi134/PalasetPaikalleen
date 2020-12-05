import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react'
import React, { useState } from 'react'
import './CustomOption.scss'

interface Props {
  onAdd: (option: string) => void
  title?: string
	placeholder?: string
}

const CustomOption: React.FC<Props> = ({ onAdd, title, placeholder }) => {
	const [customOption, setCustomOption] = useState('')

	const addOption = () => {
		onAdd(customOption)
		setCustomOption('')
	}

  return (
    <div className="custom-option">
      <IonList lines="none" className="ion-margin-vertical">
        <IonItem>
          <IonLabel>{title || 'Kirjoita oma'}</IonLabel>
        </IonItem>
        <IonItem lines="inset">
          <IonInput
            value={customOption}
            onIonChange={e => setCustomOption(e.detail.value!)}
            placeholder={placeholder || 'Esim. Puhelias'}> </IonInput>
          <IonButton
            disabled={customOption.length <= 3}
            size="default"
            slot="end"
            onClick={addOption as any}>
            Lisää
              </IonButton>
        </IonItem>
      </IonList>
    </div>
  )
}

export default CustomOption
