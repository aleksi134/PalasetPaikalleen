import { IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'
import Collapsible from 'react-collapsible'
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
  'Tuttuus',
  'Opiskelupaikkakunta',
  'Naisten ja miesten alat',
  'Mielikuvat / tieto alasta',
  'Kaverit',
  'Vanhemmat',
  'Kutsumus',
  'Arvot',
  'Omat taidot ja kiinnostus',
]

const Assignment: React.FC<Props> = ({ state = {}, done, close }) => {
  const [ result, setResult ] = useState<State>(state)

  const selectionsRequired = 3
  const selectedCount = Object.keys(result).length
  const isDone = selectedCount >= selectionsRequired

  return (
    <div>
      <AssignmentInstructions title='Valintojen taustalla'>
        <p>Opiskelun ja uravalintojen taustalla voi olla monia asioita, joista on hyvä tulla tietoiseksi. Emme aina itse tiedosta millaiset tekijät vaikuttavat valintojemme taustalla ja miten ne voivat ohjata, rohkaista ja toisaalta myös rajoittaa opiskelu tai työpaikkojen valintaa. Mistä oma alavalintasi tai tietyn opiskelualan kiinnostavuus kumpuaa? </p>
        <p>Tutki listaa ja merkitse asteikolla 1-5 miten voimakkaasti koet näiden asioiden vaikuttavan valintoihisi.  </p>

        <Collapsible trigger="Esimerkkejä valintojen taustatekijöistä">
          <h2> Tuttuus </h2>
          <p> Valintaan vaikuttaa ammattien tuttuus ja ammatit voivat periytyvät perheissä. Valintaan voi vaikuttaa myös aiemmin opiskeltu aine ja kiinnostus sitä kohtaan esim. psykologia. </p>

          <h2> Opiskelupaikkakunta </h2>
          <p> Valintaan voi vaikuttaa opiskelupaikkakunta. Uskallanko tai pystynkö muuttamaan toiselle paikkakunnalle? Onko paikkakunta liian kaukana perheestä, ystävistä, kavereista tai muusta tukiverkostosta? Vai vaikuttaako valintaan nimenomaan halu nähdä maailmaa ja itsenäistyä? </p>

          <h2> "Naisten ja miesten alat" </h2>
          <p> Uskallanko valita naisena miesvaltaisen ammatin tai päinvastoin? Suomessa puhutaan vielä niin sanotuista miesten ja naisten aloista, vaikka tällainen jako on nykyään perusteetonta. Media voi osaltaan myös ruokkia käsityksiämme sukupuolittuneista aloista. </p>

          <h2> Mielikuvat ja tieto alasta </h2>
          <p> Onko valintaa tehtäessä tarpeeksi tietoa aloista ja ammateista? Perustuuko valinta mielikuvaan vai tietoon alasta? </p>

          <h2> Kaverit </h2>
          <p> Vaikuttavatko kavereiden ja ystävien mielipiteet valintaani? </p>

          <h2> Vanhemmat </h2>
          <p> Rohkaisevatko vanhempani tietylle alalle? Onko heillä haaveita tulevaisuuteni suhteen? Osaavatko vanhempani auttaa ja tukea valintaa tehtäessä? </p>

          <h2> Kutsumus </h2>
          <p> Onko minulla ollut jo pienestä pitäen selkeä päämäärä alavalinnan suhteen? Vaikuttaako valintaani vahva kutsumus tietylle alalle, esimerkiksi opettajaksi tai lääkäriksi? </p>

          <h2> Arvot </h2>
          <p> Olenko tutustunut omiin arvoihini? Mitä ne ovat? Toteutanko omia arvojani suhteessa alavalintaan? </p>

          <h2> Omat taidot ja kiinnostus </h2>
          <p> Onko minulla jokin harrastus, josta voisi tulla ammatti vai haluanko jättää sen harrastuksekseni? Mitä taitoja olen saanut esimerkiksi harrastuksen tai työkokemukseni kautta, joita voin hyödyntää tulevassa ammatissa?  </p>
        </Collapsible>

      </AssignmentInstructions>

      <Sliders options={preDefinedOptions} result={result} onChange={setResult} allowCustom={false} />

      <AssignmentProgress required={selectionsRequired} selected={selectedCount} />
      <AssignmentFooter done={() => done(result)} close={close} isDone={isDone}>
        <IonCard>
          <IonItem>
            <IonLabel>Mainiota!</IonLabel>
          </IonItem>
          <IonCardContent>
            <p>Nyt olet perehtynyt valintojesi taustalla vaikuttaviin tekijöihin ja tullut tietoisemmaksi niistä. Nyt hahmotat selkeämmin, miten ne voivat vaikuttaa opiskelu- ja työalojesi valintaan. Pidä nämä vaikuttavat tekijät mielessäsi, mutta suuntaa rohkeasti kohti juuri sinulle sopivalta tuntuvia valintoja ja ota seuraava askel urasuunnittelusi polulla.  </p>
          </IonCardContent>
        </IonCard>
      </AssignmentFooter>
    </div>
  )
}

export default Assignment
