import { IonItem, IonItemDivider, IonLabel, IonList, IonRange } from '@ionic/react'
import { set } from 'lodash'
import React, { Fragment, useEffect } from 'react'
import { Factor, Probabilities } from './Calculator'

interface Props {
  occupations: string[]
  factors: Factor[]
  probabilities: Probabilities
  onChange: (change: Probabilities) => void
}

// const occupations = [
//   "viestintä",
//   "journalistiikka",
//   "sosiaalitieteet",
//   "graafinen suunnittelija",
//   "terveystieteet",
// ]

// const factors = [
//   {
//     "name": "Työn kiinnostavuus",
//     "score": 3,
//     "isChecked": true
//   },
//   {
//     "name": "Hyvä palkkaus",
//     "score": 0,
//     "isChecked": true
//   },
//   {
//     "name": "Hyvä työllisyystilanne",
//     "score": 0,
//     "isChecked": true
//   },
//   {
//     "name": "Arvojesi mukainen työ",
//     "score": 0,
//     "isChecked": true
//   },
//   {
//     "name": "asdf",
//     "score": 3,
//     "isChecked": true
//   }
// ]

const PropabilitySelector: React.FC<Props> = ({
  occupations = [],
  factors = [],
  probabilities = {},
  onChange
}) => {
  const updatePropability = (occupation: string, factor: Factor, probability: number) =>
    onChange(set(probabilities, [occupation, factor.name], probability))

  return (
    <div className="calculator-component probability-selector">

      <div className="calculator-instructions">
        <p>Seuraavaksi arvioi itse, kuinka suurella todennäköisyydellä itsellesi tärkeä tekijä toteutuu kussakin alavaihtoehdossa. Esimerkiksi jos yksi päätökseen vaikuttava tekijä on hyvä palkka, niin arvioi, kuinka suurella todennäköisyydellä tämä tekijä toteutuu vaihtoehtoina olevilla aloilla.  </p>
        <p>Todennäköisyydet arvioidaan asteikolla 1-5, missä 5 merkitsee erittäin suurta todennäköisyyttä toteutumiselle ja 1 erittäin pientä todennäköisyyttä.  </p>
      </div>


      <IonList>
        {occupations.map(occupation =>
          <Fragment key={occupation}>
            <IonItemDivider>
              <span className="occupation-name">{occupation}</span>
            </IonItemDivider>

            {factors.map(factor =>
              <IonItem key={factor.name} lines="none">
                <IonLabel slot="start">{factor.name}</IonLabel>
                <IonRange min={1} max={5} snaps={true} step={1} color="secondary"
                  value={probabilities?.[occupation]?.[factor.name] || 1}
                  onIonChange={e => updatePropability(occupation, factor, e.detail.value as number)}
                >
                  {/* <IonLabel slot="start">1</IonLabel>
                  <IonLabel slot="end">5</IonLabel> */}
                </IonRange>
              </IonItem>
            )}


          </Fragment>
        )}
      </IonList>

    </div>
  )
}

export default PropabilitySelector
