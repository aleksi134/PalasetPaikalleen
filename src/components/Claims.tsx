import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react'
import { isBoolean } from 'lodash'
import React from 'react'
import { Claim } from '../Types'
import './Claims.scss'

interface Props {
  options: Claim[]
  result: Record<string, boolean>
  onChange: (claim: Claim, answer: boolean) => any
}

const Claims: React.FC<Props> = ({ options, result = {}, onChange }) => {

  const showExplanation = (claim: Claim) =>
    isBoolean(result[claim.title])

  const showButtons = (claim: Claim) =>
    !isBoolean(result[claim.title])

  const showResult = Object.keys(result).length === options.length
  const rightCount = Object.values(result).filter(a => a).length

  return (
    <div className="claims">
      { options.map((option, index) =>

        <IonCard key={option.title + index} className="claim">
          <IonCardHeader>
            <IonCardTitle>Väittämä</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <div> {option.title} </div>

            {
              showExplanation(option) &&
              <div className={`explanation ${option.isCorrect ? 'correct' : 'incorrect'}`}>
                {option.explanation}
              </div>
            }

            {
              showButtons(option) &&
              <div className="buttons">
                <IonButton onClick={() => onChange(option, true)} color="success">Oikein</IonButton>
                <IonButton onClick={() => onChange(option, false)} color="danger">Väärin</IonButton>
              </div>
            }
          </IonCardContent>
        </IonCard>

      )}

      {
        showResult &&
        <IonCard className="results">
          <IonCardHeader>
            <IonCardTitle>Erinomaista!</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p className="result">
              Sait { rightCount } / { options.length } oikein
            </p>
            Nyt olet laajentanut tietämystäsi korkeakouluopiskelusta ja hakuun sekä opintoihin liittyvistä mahdollisuuksista. Tieto korkeakoulutuksesta antaa rohkeutta tehdä omannäköisiä valintoja urapolullasi ja ottaa seuraavat askeleet kohti unelmiesi opiskelupaikkaa.
          </IonCardContent>
        </IonCard>
      }

    </div>
  );
};

export default Claims
