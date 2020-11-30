import { IonButton, IonCard, IonCardContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/react'
import { uniq } from 'lodash'
import React, { useState } from 'react'
import { numberNames } from '../../Types'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import AssignmentProgress from '../AssignmentProgress'
import MultiSelect from '../MultiSelect'

type Result = string[]

interface Props {
  state: string[]
  done: (result: Result) => void
  close: VoidFunction
}

const preDefinedOptions = [
  'sosiaalinen',
  'rohkea',
  'avoin',
  'ystävällinen',
  'kuunteleva',
  'pitkäjänteinen',
  'ahkera',
  'luova',
  'huumorintajuinen',
  'joustava',
  'ennakkoluuloton ',
  'huolellinen',
  'tarkka',
  'avarakatseinen',
  'myönteinen',
  'realistinen',
  'tiedonhaluinen',
  'päättäväinen',
  'itsevarma',
  'kunnianhimoinen',
  'luotettava',
  'vastuuntuntoinen',
  'innokas',
  'itsenäinen',
  'tarmokas',
  'rento',
  'rauhallinen',
  'suunnitelmallinen',
  'kohtelias'
]

const Assignment: React.FC<Props> = ({ state = [], done, close }) => {
  const uniqueOptions = uniq([...preDefinedOptions, ...state])

  const [options, setOptions] = useState<Result>(uniqueOptions)
  const [customOption, setCustomOption] = useState('')
  const [result, setResult] = useState<Result>(state)

  const addCustomOption = () => {
    setOptions([...options, customOption])
    setResult([...result, customOption])
    setCustomOption('')
  }

  const selectionsRequired = 5
  const isDone = result.length >= selectionsRequired

  return (
    <div>
      <AssignmentInstructions title='Vahvuudet'>
        <p>Meiltä kaikilta löytyy monenlaisia vahvuuksia ja osaamista. Niitä ei vain aina osaa heti tunnistaa tai sanallisesti kertoa. Mitkä ovat sinun vahvuutesi? Valitse annetuista vahvuuksista juuri sinua parhaiten kuvaavat tai jos listasta ei löydy mielestäsi sinua kuvaavia vahvuuksia, voit luoda omasi.</p>
        <p>Omien vahvuuksiesi pohtimisessa voi olla apua kun mietit:</p>
        <p>Mihin uppoudut vapaa-ajallasi?</p>
        <p>Minkä tehtävän tai asian tekemisestä nautit, vaikka siitä ei olisi sinulle mitään konkreettista hyötyä?</p>
        <p>Missä asiassa koet olevasi oikein hyvä?</p>
        <p>Kun tunnistat omat vahvuutesi ja lahjakkuutesi, voit hyödyntää niitä ammatin valinnassa, pääsykokeisiin valmistautumisessa, tulevissa opinnoissasi ja ihan jokapäiväisessä elämässäsi.</p>
      </AssignmentInstructions>

      <MultiSelect options={options} selection={result} onChange={setResult} />

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

      <AssignmentProgress required={selectionsRequired} selected={result.length} />

      <AssignmentFooter done={() => done(result)} close={close} isDone={isDone}>
        <IonCard>
          <IonItem>
            <IonLabel>Hienoa!</IonLabel>
          </IonItem>
          <IonCardContent>
            <p> Nyt tunnet ja tunnistat omat vahvuutesi. Muista että meiltä kaikilta löytyy omanlaisiamme vahvuuksia ja voimme oppia hyödyntämään niitä mitä erilaisimmissa tilanteissa. Vahvuudet auttavat sinua urasuunnittelusi polulla eteenpäin. </p>
          </IonCardContent>
        </IonCard>
      </AssignmentFooter>
    </div>
  )
}

export default Assignment
