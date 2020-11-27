import { IonButton } from '@ionic/react'
import React, { useState } from 'react'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import Sliders from '../Sliders'

type State = Partial<Record<string, number>>

interface Props {
  state: State,
  done: (result: State) => void
  cancel: VoidFunction
}

const preDefinedOptions = [
  'Turvallisuus ja pysyvyys',
  'Itsenäisyys ja vapaus',
  'Luovuus ja yritteliäisyys',
  'Asiantuntijuus, erityisosaaminen ja oppiminen',
  'Johtaminen, vastuu ja motivoiminen',
  'Työ ihmisten kanssa ja hyvinvoinnin edistäminen',
  'Omistautuminen ja työyhteisön arvoihin sitoutuminen',
  'Haasteet, vaihtelu ja monipuolisuus',
  'Elämän eri osa-alueiden tasapaino',
  'Sijainti ja sitoutuminen maantieteelliseen paikkaan',
  'Arvovalta, menestys ja tunnustuksen saaminen',
  'Valta, päätöksenteko ja toiminnan johtaminen',
  'Hyvä palkka ja työsuhde-edut',
  'Työnkuvan ja toimintatapojen selkeys',
]

const Assignment: React.FC<Props> = ({ state = {}, done, cancel }) => {
  const [ result, setResult ] = useState<State>(state)

  const isDone = true
  const saveAndClose = () => done(result)

  return (
    <div>
      <AssignmentInstructions title='Arvot'>
        <p> Itsetuntemuksessa on tärkeä pohtia omia arvoja. Alle on listattu yleisiä työhön liittyviä arvoja ja toiveita. Voisiko listaus olla tukena koulutusvalinnassa? Kuinka korkean arvosanan antaisit näille arvopareille ja -ryhmille? </p>
      </AssignmentInstructions>

      <Sliders options={preDefinedOptions} result={result} onChange={setResult} />

      {/*
      {
        isDone &&
        <IonCard>
          <IonItem>
            <IonLabel>Hienoa!</IonLabel>
          </IonItem>
          <IonCardContent>
            <p> Nyt tunnet ja tunnistat omat vahvuutesi. Muista että meiltä kaikilta löytyy omanlaisiamme vahvuuksia ja voimme oppia hyödyntämään niitä mitä erilaisimmissa tilanteissa. Vahvuudet auttavat sinua urasuunnittelusi polulla eteenpäin. </p>
          </IonCardContent>
        </IonCard>
      } */}

      <AssignmentFooter isDone={isDone} />
      <IonButton disabled={!isDone} className="done" onClick={saveAndClose}>Merkitse suoritetuksi</IonButton>
    </div>
  )
}

export default Assignment
