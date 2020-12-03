import { IonCheckbox, IonItem, IonItemDivider, IonLabel, IonList } from '@ionic/react'
import React from 'react'
import { Occupation } from '../../data/alavaihtoehdot'
// import CustomOption from '../CustomOption'

interface Props {
  occupations: Occupation[]
  selection: Record<string, boolean>
  onChange: (selection: Record<string, boolean>) => void
}

const OccupationsSelector: React.FC<Props> = ({ occupations = [], selection = {}, onChange }) => {

  const toggleOccupation = (occupation: Occupation, isChecked: boolean) =>
    onChange({ ...selection, [occupation.name]: isChecked })

  // const addCustomOption = (option: string) =>
  //   onChange({ ...selection, [option]: true })

  return (
    <div className="calculator-component occupations-selector">

      <div className="calculator-instructions">
        <p>Alla näet korkeakoulukortit-tehtävässä sinua kiinnostaneet opiskelualat. Valitse niistä mieleisesi.</p>
      </div>

      <IonList>
        <IonItemDivider>Ammatit</IonItemDivider>
        {occupations.map((occupation, i) => (
          <IonItem key={occupation.name}>
            <IonLabel>{occupation.name}</IonLabel>
            <IonCheckbox
              slot="end"
              value={occupation.name}
              checked={Boolean(selection?.[occupation.name])}
              onIonChange={e => toggleOccupation(occupation, e.detail.checked)}
            />
          </IonItem>
        ))}
      </IonList>

      {/* <CustomOption placeholder="Esim. Liikuntatieteet" onAdd={addCustomOption} /> */}
    </div>
  )
}

export default OccupationsSelector
