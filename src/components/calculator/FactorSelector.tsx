import { IonCheckbox, IonItem, IonItemDivider, IonList, IonRange } from '@ionic/react'
import React from 'react'
import CustomOption from '../CustomOption'
import { Factor } from './Calculator'

interface Props {
  factors: Factor[]
  onChange: (selection: Factor[]) => void
}

const FactorSelector: React.FC<Props> = ({ factors = [], onChange }) => {

  const toggleFactor = ({ name }: Factor, isChecked: boolean = true) =>
    onChange(factors.map(f => f.name === name ? { ...f, isChecked } : f))

  const updateFactorScore = ({ name }: Factor, score: number) =>
    onChange(factors.map(f => f.name === name ? { ...f, score } : f))

  const addCustomFactor = (name: string) =>
    onChange([...factors, { name, score: 0, isChecked: true }])

  return (
    <div className="calculator-component factor-selector">

      <div className="calculator-instructions">
        <p> Seuraavaksi valitaan ne tekijät, joiden perusteella valinta tehdään. Päätökseen vaikuttavat tekijät voivat olla alojen yhteydessä esimerkiksi työn kiinnostavuus, hyvä palkkaus, hyvä työllisyystilanne, arvojesi mukainen työ, joustavat työajat tai jokin muu valintaan vaikuttava vaihtoehto. </p>
        <p> Seuraavaksi arvioidaan tekijöiden tärkeys asteikolla 1-5 siten, että mitä tärkeämpi mielestäsi jokin tekijä on, sitä suuremman numeron (painokertoimen) se saa. </p>
      </div>

      <IonList>
        {factors.map(factor => (
          <React.Fragment key={factor.name}>
            <IonItemDivider>{factor.name}</IonItemDivider>
            <IonItem key={factor.name} lines="none">
              <IonRange disabled={!factor.isChecked} min={1} max={5} step={1} snaps={true} pin={true} color="secondary"
                value={factor.score}
                onIonChange={e => updateFactorScore(factor, e.detail.value as number)}>
              </IonRange>
              <IonCheckbox
                slot="end"
                value={factor.name}
                checked={factor.isChecked}
                onIonChange={e => toggleFactor(factor, e.detail.checked)}
              />
            </IonItem>
          </React.Fragment>
        ))}
      </IonList>

      <CustomOption placeholder="Esim. Työn kiinnostavuus" onAdd={addCustomFactor} />

    </div>
  )
}

export default FactorSelector
