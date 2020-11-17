import { IonButton, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonRange } from '@ionic/react'
import { uniq } from 'lodash'
import React, { Fragment, useState } from 'react'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'

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
] as const

const Assignment: React.FC<Props> = ({ state = {}, done, cancel }) => {
  const uniqueOptions = uniq([...preDefinedOptions, ...Object.keys(state)])

  const [ options, setOptions ] = useState(uniqueOptions)
  const [ customOption, setCustomOption ] = useState('')
  const [ result, setResult ] = useState<State>(state)

  const setValue = (option: string, value: number) => {
    if (result[option] !== value)
      setResult({ ...result, [option]: value })
  }

  const addCustomOption = () => {
    setOptions([...options, customOption])
    setCustomOption('')
  }

  const isDone = true
  const saveAndClose = () => done(result)

  return (
    <div>
      <AssignmentInstructions title='Arvot'>
        <p> Itsetuntemuksessa on tärkeä pohtia omia arvoja. Alle on listattu yleisiä työhön liittyviä arvoja ja toiveita. Voisiko listaus olla tukena koulutusvalinnassa? Kuinka korkean arvosanan antaisit näille arvopareille ja -ryhmille? Lopussa valitse kolme sinulle tärkeintä paria tai ryhmää. </p>
        <p>Meiltä kaikilta löytyy monenlaisia vahvuuksia ja osaamista. Niitä ei vain aina osaa heti tunnistaa tai sanallisesti kertoa. Mitkä ovat sinun vahvuutesi? Valitse annetuista vahvuuksista juuri sinua parhaiten kuvaavat tai jos listasta ei löydy mielestäsi sinua kuvaavia vahvuuksia, voit luoda omasi.</p>
      </AssignmentInstructions>

      <IonList>
        {options.map(option =>
          <Fragment key={option}>
            <IonItemDivider>{option}</IonItemDivider>
            <IonItem>
              <IonRange min={1} max={5} snaps={true} step={1} color="secondary"
                value={result[option] || 1}
                onIonChange={e => setValue(option, e.detail.value as number)}>
                <IonLabel slot="start">1</IonLabel>
                <IonLabel slot="end">5</IonLabel>
              </IonRange>
            </IonItem>
          </Fragment>
        )}
      </IonList>

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
