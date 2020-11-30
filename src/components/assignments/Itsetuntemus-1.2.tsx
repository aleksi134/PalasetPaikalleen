import React, { useState } from 'react'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import AssignmentProgress from '../AssignmentProgress'
import Sliders from '../Sliders'

type State = Partial<Record<string, number>>

interface Props {
  state: State,
  done: (result: State) => void
  close: VoidFunction
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

const Assignment: React.FC<Props> = ({ state = {}, done, close }) => {
  const [ result, setResult ] = useState<State>(state)

  const isDone = true
  const selectedCount = Object.keys(result).length
  const selectionsRequired = 3

  return (
    <div>
      <AssignmentInstructions title='Arvot'>
        <p> Itsetuntemuksessa on tärkeä pohtia omia arvoja. Alle on listattu yleisiä työhön liittyviä arvoja ja toiveita. Voisiko listaus olla tukena koulutusvalinnassa? Kuinka korkean arvosanan antaisit näille arvopareille ja -ryhmille? </p>
      </AssignmentInstructions>

      <Sliders options={preDefinedOptions} result={result} onChange={setResult} />

      <AssignmentProgress required={selectionsRequired} selected={selectedCount} />
      <AssignmentFooter done={() => done(result)} close={close} isDone={isDone} />
    </div>
  )
}

export default Assignment
