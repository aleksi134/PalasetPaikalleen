import { IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react'
import React, { useMemo, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Occupation } from '../../data/alavaihtoehdot'
import gameState from '../../GameState'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import Calculator, { CalculatorResult } from '../calculator/Calculator'

export type Score = { occupation: string, score: number }

type State = Partial<Record<string, number>>

interface Props extends RouteComponentProps<any> {
  state: State,
  done: (result: State) => void
  close: VoidFunction
}

const Assignment: React.FC<Props> = ({ state = {}, done, close, history }) => {
  const occupationResults: Occupation[] = useMemo(() => gameState.load('tampere')?.result || [], [])
  const [result, setResult] = useState<CalculatorResult>({ scores: [], factors: [] })

  const isDone = (result?.scores?.length || 0) > 0

  const navigateToResults = () => {
    close()
    history.push('/page/Results')
  }

  return (
    <div>
      <AssignmentInstructions title='Unelmiesi opiskelupaikka'>
        <p>Urasuunnittelun polkusi on johtanut sinut valintojen äärelle. Itsetuntemus, opiskelu- ja työelämän tuntemus ja oman elämäntilanteesi huomioiminen ovat kaikki antaneet sinulle valintojen tekemiseen tarvittavaa tietoa. Nyt on aika pohtia sitä, mikä kiinnostavista aloista sopisi juuri sinulle parhaiten.  </p>
        <p>Tällä laskurilla voit kätevästi vertailla eri vaihtoehtoja painottaen eri vaikuttavien asioiden tärkeyttä. Laskuri on päätöksentekosi tukena toimiva laskentamalli. Voit käyttää laskuria apuna pohtiessasi valintaa eri koulutusalojen välillä, kun päätöksentekoon vaikuttaa yhtä aikaa monia tekijöitä. </p>
        <p>Laskurissa on valmiina aiemmin valitsemasi sinua kiinnostavat opiskelualat. Voit suorittaa laskelman näiden alojen välillä tai halutessasi voit vielä vaihtaa valitut alat. </p>
      </AssignmentInstructions>

      <Calculator occupations={occupationResults} onResult={setResult} />

      <AssignmentFooter done={() => done(result as any)} close={navigateToResults} isDone={isDone} doneText="Siirry tuloksiin">
        <IonCard>
          <IonItem>
            <IonLabel>Mahtavaa!</IonLabel>
          </IonItem>
          <IonCardContent>
            <p>Nyt olet saanut kaikki urasuunnittelun palaset paikalleen ja unelmiesi opiskelupaikka häämöttää horisontissa!  </p>
            <p>Olet kasvattanut itsetuntemustasi, vahvistanut tuntemustasi korkeakouluopiskeluun liittyvissä asioissa, perehtynyt työelämässä tarvittaviin taitoihin, kerännyt voimavaroja tulevaisuutta varten sekä löytänyt rohkeutta valintojen tekemiseen. Pidä nämä asiat mielessäsi ja tee rohkeasti oman näköisiäsi valintoja tulevaisuutta suunnitellessasi. </p>
          </IonCardContent>
        </IonCard>
      </AssignmentFooter>
    </div>
  )
}

export default withRouter(Assignment)
