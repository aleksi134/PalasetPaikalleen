import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react'
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons'
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

   const isAnswerCorrect = (claim: Claim) =>
     result[claim.title]

  return (
    <div className="claims">
      { options.map((option, index) =>

        <IonCard key={option.title + index} className="claim">
          <IonCardHeader>
            <IonCardTitle>Väittämä</IonCardTitle>
          </IonCardHeader>

          {
            !showButtons(option) &&
            < div className="icons">
              {isAnswerCorrect(option)
                ? <IonIcon icon={checkmarkCircleOutline} className="right" />
                : <IonIcon icon={closeCircleOutline} className="wrong" />
              }
            </div>
          }

          <IonCardContent>
            <div className="claim"> {option.title} </div>

            <div className={`explanation ${option.isCorrect ? 'correct' : 'incorrect'} ${showExplanation(option) ? 'visible' : 'hidden'}`}>
              {option.explanation}
            </div>

            {
              showButtons(option) &&
              <div className="buttons">
                <IonButton onClick={() => onChange(option, true)} className="right">Oikein</IonButton>
                <IonButton onClick={() => onChange(option, false)} className="wrong">Väärin</IonButton>
              </div>
            }
          </IonCardContent>
        </IonCard>
      )}

    </div>
  )
}

export default Claims
