import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react'
import { star, trophy } from 'ionicons/icons'
import React, { useMemo } from 'react'
import Collapsible from 'react-collapsible'
import { getIndexedOccupations } from '../../data/alavaihtoehdot'
import { Score } from '../assignments/Valintojentekeminen-5.2'

interface Props {
  occupations: string[]
  scores: Score[]
}

const CalculatorResults: React.FC<Props> = ({ occupations = [], scores }) => {
  const indexedOccupations = useMemo(() => getIndexedOccupations(occupations), [occupations])

  return (
    <div className="calculator-component calculator-results">

      <div className="calculator-instructions">
        <p> Taulukkoon on koottu kaikki laskentamallissa mukana olevat tekijät. Tulos-sarakkeessa näkyvät eri vaihtoehtojesi saamat pistemäärät. Mitä korkeampi pistemäärä sitä paremmin vaihtoehto vastaa vaatimuksiasi. </p>
        <p> Jos tulos on yllättävä, voit miettiä ovatko tekijöiden painokertoimet tai niiden toteutumisarviot aivan kohdallaan. Voit palata takaisin askel kerrallaan, muuttaa arvoja ja katsoa sitten, miten muutokset vaikuttavat lopputulokseen. Voit halutessasi myös lisätä tai poistaa vaikuttavia tekijöitä ja katsoa, vaikuttavatko ne tulokseen. </p>
      </div>

      <div className="cards">
        {scores.map(({ occupation, score }, index) =>
          <IonCard className="occupation-card" key={occupation}>

            {index === 0 &&
              <IonIcon icon={trophy} className="trophy" />
            }

            <div className="score-container">
              <IonIcon icon={star} />
              <span className="score">{score}</span>
            </div>

            <IonCardHeader>
              <IonCardSubtitle>{indexedOccupations[occupation].field}</IonCardSubtitle>
              <IonCardTitle>{occupation}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <Collapsible trigger="Näytä kortti">
                <img src={indexedOccupations[occupation].url} alt="ala" />
              </Collapsible>
            </IonCardContent>
          </IonCard>
        )}
      </div>
    </div>
  )
}

export default CalculatorResults
