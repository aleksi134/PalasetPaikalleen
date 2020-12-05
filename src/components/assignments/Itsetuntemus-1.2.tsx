import { IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react'
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
        <p>Urasuunnittelun polulla sinun täytyy tehdä monenlaisia valintoja. Omat arvosi ohjaavat valintojasi, kuten esimerkiksi opiskelu- tai työpaikan valintaa. Arvot kertovat siitä, mitä pidämme tärkeimpänä ja yleensä ne myös kertovat siitä, minkälaiset asiat motivoivat meitä. Itsetuntemuksen kasvattamiseksi onkin tärkeää pohtia omia arvojaan.  </p>
        <p>Alle on listattu yleisiä työhön liittyviä arvoja ja toiveita. Miten tärkeäksi koet nämä arvot? Arvioi niiden tärkeyttä asteikolla 1-5.  </p>
        <p>Jos listalta puuttuu mielestäsi joku sinulle tärkeä arvo, voit lisätä siihen myös oman vaihtoehtosi.  </p>
      </AssignmentInstructions>

      <Sliders
        options={preDefinedOptions}
        result={result}
        onChange={setResult}
        customOptionTitle="Lisää oma arvosi listalle"
        customOptionPlaceHolder="Luonnon hyvinvoinnin edistäminen"
      />

      <AssignmentProgress required={selectionsRequired} selected={selectedCount} />
      <AssignmentFooter done={() => done(result)} close={close} isDone={isDone}>
        <IonCard>
          <IonItem>
            <IonLabel>Loistavaa!</IonLabel>
          </IonItem>
          <IonCardContent>
            <p>Nyt tunnistat paremmin omia arvojasi ja voit pohtia, miten ne vaikuttavat tekemiesi valintojen taustalla. Tieto sinulle tärkeistä arvoista auttaa, kun pohdit sopivia työn ja opiskelun mahdollisuuksia. Tuntemus arvoistasi ohjaa sinua kohti urasuunnittelupolkusi seuraavia askelia.  </p>
          </IonCardContent>
        </IonCard>
      </AssignmentFooter>
    </div>
  )
}

export default Assignment
