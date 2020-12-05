import { IonButton, IonCard, IonCardContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/react'
import { uniq } from 'lodash'
import React, { useState } from 'react'
import { numberNames } from '../../Types'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import AssignmentProgress from '../AssignmentProgress'
import CustomOption from '../CustomOption'
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
  const [result, setResult] = useState<Result>(state)

  const addCustomOption = (option: string) => {
    setOptions([...options, option])
    setResult([...result, option])
  }

  const selectionsRequired = 5
  const isDone = result.length >= selectionsRequired

  return (
    <div>
      <AssignmentInstructions title='Vahvuudet'>
        <p>Omaa urasuunnittelua tehtäessä itsetuntemus on tärkeää. Ammatinvalintaa tehdessä on keskeistä tunnistaa omat vahvuudet, valmiudet, taidot sekä kehittämisen kohteet ja osaamisen vajeet, eikä tämä onnistu ilman riittävää tuntemusta itsestä.  </p>
        <p>Meiltä kaikilta löytyy monenlaisia vahvuuksia ja osaamista. Niitä ei vain aina osaa heti tunnistaa tai sanallisesti kertoa. Kun tunnistat omat vahvuutesi, voit hyödyntää niitä ammatin valinnassa, pääsykokeisiin valmistautumisessa, tulevissa opinnoissasi ja ihan jokapäiväisessä elämässäsi. Mitkä ovat sinun vahvuutesi?  </p>
        <p>Valitse annetuista vahvuuksista juuri sinua parhaiten kuvaavat tai jos listasta ei löydy mielestäsi sinua kuvaavia vahvuuksia, voit luoda omasi. </p>
      </AssignmentInstructions>

      <MultiSelect options={options} selection={result} onChange={setResult} />

      <CustomOption
        title="Lisää oma vahvuutesi listalle"
        placeholder="Esim. reipas"
        onAdd={addCustomOption}
      />

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
