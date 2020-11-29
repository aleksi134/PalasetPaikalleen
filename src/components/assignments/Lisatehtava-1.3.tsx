import React, { useState } from 'react'
import Collapsible from 'react-collapsible'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import Sliders from '../Sliders'

type State = Partial<Record<string, number>>

interface Props {
  state: State
  done: (result: State) => void
  close: VoidFunction
}

const preDefinedOptions = [
  'Loogis-matemaattinen lahjakkuus',
  'Kielellinen lahjakkuus',
  'Musiikillinen lahjakkuus ',
  'Kinesteettis-liikunnallinen lahjakkuus',
  'Avaruudellinen ja visuaalinen lahjakkuus',
  'Interpersoonallinen lahjakkuus',
  'Intrapersoonallinen lahjakkuus',
  'Luonnon ymmärtämisen kyky',
]

const Assignment: React.FC<Props> = ({ state = {}, done, close }) => {
  const [ result, setResult ] = useState<State>(state)

  const saveAndClose = () => done(result)

  return (
    <div>
      <AssignmentInstructions title='Lahjakkuus'>

        <p>Lahjakkuutesi vaikuttavat siihen, minkälainen ammatti sinulle voisi parhaiten sopia ja minkälaisen työn tekemisessä voisit parhaiten hyödyntää sinulle omimpia lahjakkuuden lajeja. Howard Gardnerin kehittämän moniälykkyysteorian mukaan on olemassa useampia kuin vain yksi älykkyyden laji. Nämä eri älykkyyden lajit liittyvät lahjakkuuksiimme ja niiden avulla voikin olla hyvä pohtia sitä, minkä tyyppisissä asioissa olet erityisen hyvä.</p>
        <p>Toiset meistä voivat olla matemaattisesti lahjakkaita, kun taas toisilla lahjakkuus näkyy sosiaalisuudessa tai vaikkapa taiteellisuudessa. Nämä lahjakkuuksien lajit eivät kuitenkaan ole toisiaan poissulkevia. Missä sinä olet erityisen hyvä? Täydennä kykyprofiilisi oheisella tehtävällä ja ota selvää!</p>

        <ul>
          <li>Loogis-matemaattinen lahjakkuus</li>
          <li>Kielellinen lahjakkuus</li>
          <li>Musiikillinen lahjakkuus </li>
          <li>Kinesteettis-liikunnallinen lahjakkuus</li>
          <li>Avaruudellinen ja visuaalinen lahjakkuus</li>
          <li>Interpersoonallinen lahjakkuus</li>
          <li>Intrapersoonallinen lahjakkuus</li>
          <li>Luonnon ymmärtämisen kyky</li>
        </ul>

        <Collapsible trigger="Mitä nämä lahjakkuuksien lajit tarkoittavat?">

          <h2> Matemaattis-looginen lahjakkuus </h2>

          <ul>
            <li>Kyky ymmärtää abstrakteja suhteita (loogisia ja matemaattisia ongelmia)</li>
            <li>Kyky käsitellä numeroita tehokkaasti, analysoida ongelmia loogisesti, tutkia ongelmia tieteellisesti</li>
            <li>Mysteerien ratkaiseminen, numerot ja monimutkaiset laskutoimitukset, taulukointi, aivopähkinät</li>
          </ul>
          <p>Tätä on mm. matemaatikoiden, tiedemiesten, insinöörien ja loogikkojen älykkyys </p>

          <h2> Kielellinen lahjakkuus </h2>
          <ul>
            <li>Tärkeä vieraiden kielten oppimisessa</li>
            <li>Kielellisesti älykkäät ihmiset vaikuttavat luonnollisilta selittäessään asioita, opettaessaan tai suostutellessaan ihmisiä, sillä he käyttävät kieltä hyvin täsmällisesti.</li>
            <li>Lukeminen, tarinoiden kertominen, elokuvien katsominen, kirjoittaminen, taide, vieraiden kielten opettelu</li>
          </ul>
          <p> Tätä älykkyyttä on muun muassa lakimiehillä, kirjailijoilla, runoilijoilla, opettajilla, koomikoilla ja puhujilla </p>

          <h2> Musiikillinen lahjakkuus </h2>
          <ul>
            <li>Kyky havaita musiikin muotoja ja säveltää, tulkita, muuttaa ja arvioida kaikenlaista musiikkia ja ääniä.</li>
            <li>Herkkyys rytmille, sävelille ja soinnuille sekä luonnon ja ympäristön äänille</li>
            <li>Laulaminen, musiikin kuuntelu, soittaminen, konserteissa käyminen, musiikin luominen, jne.</li>
          </ul>
          <p> Tätä älykkyyttä on musiikin ystävillä esimerkiksi säveltäjillä, laulajilla, ääniteknikoilla, muusikoilla, musiikinopettajilla </p>

          <h2> Kinesteettis-liikunnallinen lahjakkuus </h2>
          <ul>
            <li>Kyky käyttää kehoa ilmaistakseen ideoita, oppiakseen, ratkaistakseen ongelmia, suorittaakseen tehtäviä tai luodakseen tuotteita</li>
            <li>Oppivat fyysisiä taitoja helposti ja nopeasti, rakastavat liikkua ja urheilla</li>
            <li>Osaavat tanssia kauniisti, näytellä ja imitoida muiden ihmisten ilmeitä ja maneereja</li>
            <li>Ajattelevat liikkuessaan ja oppivat paremmin ollessaan liikkeessä</li>
          </ul>
          <p> Tätä älykkyyttä on mm. urheilijoilla, balleriinoilla, näyttelijöillä, kirurgeilla, käsityöläisillä, keksijöillä, mekaanikoilla ja muilla teknisen alan ammattilaisilla. </p>

          <h2> Avaruudellinen ja visuaalinen lahjakkuus </h2>
          <ul>
            <li>Kyky muokata ja hahmottaa 2- ja 3 –ulotteisia kuvia.</li>
            <li>Kykyä ymmärtää, käsitellä ja muokata sekä isojen että pienten tilojen sommittelua.</li>
            <li>Helpompi muistaa valokuvia ja esineitä kuin sanoja.</li>
            <li>Piirtäminen, maalaaminen, videopelien pelaaminen, karttojen lukeminen, erilaisten mallien tekeminen</li>
          </ul>
          <p>Tällaista on arkkitehtien, lentäjien, purjehtijoiden, shakinpelaajien, kirurgien ja taiteilijoiden älykkyys. Tätä älykkyyttä on myös taidemaalareilla, graafisilla suunnittelijoilla ja kuvanveistäjillä.</p>

          <h2> Interpersoonallinen lahjakkuus </h2>
          <ul>
            <li>Kyky keskittyä asioihin, jotka ovat tärkeitä muille ihmisille.</li>
            <li>Muistaa toisten kiinnostuksen kohteet, motivaatiot, henkilökohtaisen tarinan ja aikomukset, kyky ennakoida ihmisten päätöksiä, tunteita ja toimia</li>
            <li>Tykkäävät keskustella, oppia ryhmissä tai pareittain ja tehdä töitä tai muita asioita ihmisten kanssa.</li>
            <li>Viettävät paljon aikaa auttaen ihmisiä ja osallistuen vapaaehtoistoimintaan, ovat hyviä sovittelijoita ristiriitatilanteissa</li>
            <li>Ovat hyviä kommunikoijia, verbaalisesti ja kehonkielellä.</li>
          </ul>
          <p> Tätä älykkyyttä on mm. opettajilla, terapeuteilla, neuvonantajilla, poliitikoilla ja myyjillä </p>

          <h2> Intrapersoonallinen lahjakkuus </h2>
          <ul>
            <li>Eksistentiaalinen älykkyys tai ”suurten kysymysten” älykkyys.</li>
            <li>Taipumus ajatella asioita kysymyksinä ja etsiä havaintokokemuksen ylittäviä vastauksia.</li>
            <li>Tällaiset ihmiset ajattelevat esimerkiksi: Miksi elämää on? Miksi kuolemaa on?</li>
            <li>Miksi sotia käydään?  Mitä tulevaisuudessa tapahtuu? Mitä rakkaus on?</li>
          </ul>
          <p> Tätä älykkyyttä on mm. filosofeilla, ajattelijoilla, hengellisistä tai henkisistä asioista kiinnostuneilla henkilöillä </p>

          <h2> Luonnon ymmärtämisen kyky </h2>
          <ul>
            <li>Herkkyyttä luonnossa esiintyviä muotoja ja maapallon geologisia ominaisuuksia kohtaan.</li>
            <li>Retkeily, lemmikkieläinten hoitaminen, ihmisten, eläinten, kasvien ja esineiden nimien opetteleminen ja luokitteleminen</li>
          </ul>
          <p>
            Tätä älykkyyttä on mm. luonnontieteilijöillä ja yhteiskuntatieteilijöillä, runoilijoilla ja taiteilijoilla.
            He osaavat poimia yksityiskohtia ja hyödyntää sekä kehittää havainnointikykyjään työssään
          </p>

          <p>
            Hienoa! Nyt olet tutustunut omiin lahjakkuuksiisi ja tehnyt itsellesi lahjakkuusprofiilin. Pidä nämä lahjakkuutesi lajit mielessä, kun etenet urasuunnittelun polulla.
          </p>

        </Collapsible>
      </AssignmentInstructions>

      <Sliders options={preDefinedOptions} result={result} onChange={setResult} />

      <AssignmentFooter done={() => done(result)} close={close} isDone={true}>
      </AssignmentFooter>
    </div>
  )
}

export default Assignment
