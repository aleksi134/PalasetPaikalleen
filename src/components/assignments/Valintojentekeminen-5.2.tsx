import React, { useMemo, useState } from 'react'
import { Occupation } from '../../data/alavaihtoehdot'
import gameState from '../../GameState'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import Calculator from '../calculator/Calculator'

export type Score = { occupation: string, score: number }
type State = Partial<Record<string, number>>


interface Props {
  state: State,
  done: (result: State) => void
  close: VoidFunction
}

const Assignment: React.FC<Props> = ({ state = {}, done, close }) => {
  const occupationResults: Occupation[] = useMemo(() => gameState.load('tampere')?.result || [], [])
  const [result, setResult] = useState<Score[]>([])

  const isDone = result.length > 0

  return (
    <div>
      <AssignmentInstructions title='Laskuri'>
        <p>Urasuunnittelun polkusi on johtanut sinut valintojen äärelle. Itsetuntemus, opiskelu- ja työelämän tuntemus ja oman elämäntilanteesi huomioiminen ovat kaikki antaneet sinulle valintojen tekemiseen tarvittavaa tietoa. Nyt on aika pohtia sitä, mikä sinua kiinnostavista aloista sopisi juuri sinulle parhaiten.</p>
        <p>Tällä laskurilla voit kätevästi vertailla eri vaihtoehtoja painottaen eri vaikuttavien asioiden tärkeyttä. Laskuri on päätöksentekosi tukena toimiva laskentamalli. Voit käyttää laskuria apuna pohtiessasi valintaa eri koulutusalojen välillä, kun päätöksentekoon vaikuttaa yhtä aikaa monia tekijöitä.</p>
      </AssignmentInstructions>

      <Calculator occupations={occupationResults} onResult={setResult} />

      <AssignmentFooter done={() => done(result as any)} close={close} isDone={isDone} />
    </div>
  )
}

export default Assignment
