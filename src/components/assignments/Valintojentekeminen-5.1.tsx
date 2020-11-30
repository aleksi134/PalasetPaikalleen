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
        <p>
          Tutki listaa, ja pohdi millä tavalla listan asiat voivat vaikuttaa valintoihin. Mistä oma alavalintasi kumpuaa?
          Merkitse asteikolla 1-5 miten voimakkaasti koet näiden asioiden vaikuttavan valintoihisi.
        </p>

        <Collapsible trigger="Esimerkkejä">
          <h2>Tuttuus</h2>
          <p>Valintaan vaikuttaa ammattien tuttuus ja ammatit voivat periytyvät perheissä. Valintaan voi vaikuttaa myös lukiossa opiskeltu aine ja kiinnostus sitä kohtaan esim. psykologia </p>
          <h2>Opiskelupaikkakunta</h2>
          <p>Valintaan voi vaikuttaa opiskelupaikkakunta. Uskallanko/Pystynkö muuttamaan toiselle paikkakunnalle? Onko paikkakunta liian kaukana perheestä/ystävistä/kavereista/muusta tukiverkostosta?</p>
          <h2>"Naisten ja miesten alat"</h2>
          <p>Uskallanko valita naisena miesvaltaisen ammatin tai päinvastoin? Suomessa puhutaan vielä niin sanotuista miesten ja naisten aloista, vaikka tällainen jako on nykyään perusteetonta. Media osaltaan myös ruokkii käsityksiämme sukupuolittuneista aloista.</p>
          <h2>Mielikuvat / tieto alasta</h2>
          <p>Onko valintaa tehtäessä tarpeeksi tietoa aloista ja ammateista. Mihin mielikuvaan tieto ja valinta perustuu?</p>
          <h2>Kaverit</h2>
          <p>Vaikuttaako kavereiden ja ystävien mielipiteet valintaani?</p>
          <h2>Vanhemmat</h2>
          <p>Painostavatko vanhempani minua tietylle alalle? Onko heillä haaveita tulevaisuuteni suhteen? Osaavatko vanhempani auttaa ja tukea valintaa tehtäessä?</p>
          <h2>Kutsumus</h2>
          <p>Onko minulla ollut jo pienestä pitäen selkeä päämäärä alavalinnan suhteen? Vaikuttaako valintaani vahva kutsumus tietylle alalle, esimerkiksi opettajaksi tai lääkäriksi</p>
          <h2>Arvot</h2>
          <p>Olenko tutustunut omiin arvoihini? Mitä ne ovat? Toteutanko omia arvojani suhteessa alavalintaan?</p>
          <h2>Omat taidot ja kiinnostus</h2>
          <p>Onko minulla jokin harrastus, josta voisi tulla ammatti vai haluanko jättää sen harrastuksekseni? Mitä taitoja olen saanut esimerkiksi harrastuksen tai työkokemukseni kautta, joita voin hyödyntää tulevassa ammatissa?</p>
        </Collapsible>

      </AssignmentInstructions>

      <Sliders options={preDefinedOptions} result={result} onChange={setResult} />

      <AssignmentProgress required={selectionsRequired} selected={selectedCount} />
      <AssignmentFooter done={() => done(result)} close={close} isDone={isDone} />
    </div>
  )
}

export default Assignment
