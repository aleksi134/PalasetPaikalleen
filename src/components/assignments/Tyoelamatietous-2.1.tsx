import { IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'
import Collapsible from 'react-collapsible'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import AssignmentProgress from '../AssignmentProgress'
import MultiSelect from '../MultiSelect'

type State = string[]

interface Props {
  state: State
  done: (result: State) => void
  close: VoidFunction
}

const options = [
  'Vuorovaikutustaito',
  'Itsetuntemus',
  'Tunneälykkyys ja empatia',
  'Kyky ja tunnistaa ja kehittää omaa osaamista',
  'Verkostoitumiskyky',
  'Resilienssi eli muutosjoustavuus',
  'Yhteistyökyky',
  'Kyky toimia erilaisissa ympäristöissä ja kulttuureissa',
  'Kriittinen ajattelu ja luovuus',
  'Itseohjautuvuus',
]

const Assignment: React.FC<Props> = ({ state = [], done, close }) => {
  const [ result, setResult ] = useState<State>(state)

  const selectionsRequired = 3
  const selectedCount = Object.keys(result).length
  const isDone = selectedCount >= selectionsRequired

  return (
    <div>
      <AssignmentInstructions title='Tulevaisuuden työelämätaidot'>
        <p>Työelämä on jatkuvassa muutoksessa ja samoin ovat myös ne taidot, joita työelämässä vaaditaan. Omaa urapolkua pohdittaessa olisi tärkeää suunnata katse tämän hetken lisäksi myös tulevaan ja ennakoida, mitä tulevaisuuden työelämässä mahdollisesti vaaditaan. Tässä auttavat erinäiset ammattilaisten tekemät ennusteet. Selvityksen mukaan tulevaisuuden keskeisten työelämätaitojen kärkikymmenikkö olisi seuraavanlainen. </p>
        <p>Valitse itsellesi näistä taidoista kolme sellaista, jotka koet tärkeimmiksi ja joita haluaisit itsellesi kehittää.  </p>

        <Collapsible trigger="Mitä nämä työelämätaidot tarkoittavat?">
          <h2> 1. Vuorovaikutustaito </h2>
          <p> Tällä tarkoitetaan kykyä ja halua vaihtaa ajatuksia, kokemuksia, mielipiteitä tai tekoja toisten kanssa ja toimia yhdessä. Vuorovaikutustaidot ovat olennaisen tärkeitä kaikissa työelämän kohtaamisissa, olipa kyse sitten asiakkaiden kanssa tai työryhmän jäsenenä toimimisesta. </p>
          <h2> 2. Itsetuntemus </h2>
          <p> Itsetuntemus on tarkoittaa yksinkertaisimmillaan käsitystä siitä, mitkä ovat omat hallitsevat persoonallisuuden- ja luonteenpiirteet ja taipumukset. Työelämän kannalta itsetuntemuksessa on keskeistä omien vahvuuksien, valmiuksien, taitojen sekä kehittämisen kohteiden ja osaamisen vajeiden tunnistaminen. </p>
          <h2> 3. Tunneälykkyys ja empatia </h2>
          <p> Tunneäly on kykyä tunnistaa tunteiden merkitystä ja käyttää näitä tietoja hyväksi ongelmanratkaisussa. Empatialla puolestaan viitataan kykyyn ymmärtää mitä toinen ihminen kokee tämän näkökulmasta, eli itsensä asettamista toisen henkilön asemaan. Työelämässä tämä kytkeytyy toisten ihmisten kanssa toimimiseen erilaisissa tilanteissa niin asiakkaiden kuin työkavereidenkin kanssa toimittaessa. Tunneäly voi auttaa myös itsetuntemuksen lisäävästi ja auttaa sinua näin tunnistamaan millainen työntekijä tai työryhmän jäsen sinä olet, ja millaisilla työskentelytavoilla sinä työskentelet tehokkaasti. </p>
          <h2> 4. Kyky tunnistaa ja kehittää omaa osaamista </h2>
          <p> Tunnetko oman osaamisesi ja osaatko kertoa siitä myös ulospäin? Entä osaatko kehittää omaa osaamistasi ja tunnistatko osaamisesi mahdolliset kehitystarpeet? Osaamisen kehittäminen ja pitäminen ajan tasalla on tärkeä taito työelämässä, joko korostuu kehittyvien tietoverkkojen ja päivittyvien järjestelmien ollessa kiinteä osa työelämää. </p>
          <h2> 5.Verkostoitumiskyky </h2>
          <p> Kyky verkostoitua ja hyödyntää näitä verkostoja työelämässä kasvattaa merkitystään koko ajan. Kaikkea ei voi eikä tarvitse tietää tai osata itse, laajat ja tehokkaat verkostot mahdollistavat työkavereiden ja yhteistyökumppaneiden osaamisen hyödyntämisen ja toisaalta myös oman osaamisen tarjoamisen sekä markkinoimisen muiden käyttöön. </p>
          <h2> 6. Resilienssi eli muutosjoustavuus </h2>
          <p> Muuttuva työelämä vaatii meiltä kykyä joustaa ja mukautua vaihtuvien teknologioiden, tilanteiden ja ympäristöjen mukaan. Tähän taitoon kuuluu myös kyky sietää muutosta ja siitä seuraavaa epävarmuutta. Resilienssi auttaa myös selviytymään ja palautumaan vastoinkäymisistä sekä kehittymään niiden seurauksena. </p>
          <h2> 7. Yhteistyökyky </h2>
          <p> Yhteistyökyky tarkoittaa kykyä työskennelle muiden ihmisten kanssa tehokkaasti. Yhteistyökykyisen ihmisen kanssa on helppoa ja mukavaa työskennellä ja hän saa työyhteisössä asiat luistamaan kitkattomasti sekä osaa tarvittaessa ratkaista ja selvittää ongelmatilanteita tehokkaasti. </p>
          <h2> 8. Kyky toimia erilaisissa työympäristöissä ja kulttuureissa </h2>
          <p> Tulevaisuudessa työelämä vaatii meiltä yhä tehokkaampaa kykyä toimia erilaisissa työympäristöissä ja erilaisissa kulttuureissa. Tämä voi näkyä kansainvälisessä työskentelyssä, työpaikan monikulttuurisessa työyhteisössä ja monissa muissa tilanteissa. Tämä vaatii meiltä avarakatseisuutta sekä kiinnostusta toisenlaisia kulttuureja sekä ympäristöjä kohtaan, sekä taitoa ja halua sopeuttaa omaa toimintaamme näihin sekä toisaalta myös ottaa muita osaksi omaa työympäristöämme ja -kulttuuriamme. </p>
          <h2> 9. Kriittinen ajattelu ja luovuus </h2>
          <p> Kriittinen ajattelu auttaa meitä arvioimaan työssämme tietoa, tilanteita sekä menetelmiä tehokkaasti sekä havaitsemaan erilaiset taustalla vaikuttavat kontekstit, valtasuhteet ja ajattelutavat. Kriittinen ajattelu voi myös auttaa kohdistamaan uudelleen arvioivan katseen itseensä ja omiin toimintatapoihin. Luovuus puolestaan auttaa meitä soveltamaan osaamistamme, kokeilemaan ja luomaan rohkeasti uutta sekä ajattelemaan asioita laajemmin sekä joustavammin työssämme. </p>
          <h2> 10. Itseohjautuvuus </h2>
          <p> Itseohjautuvuudella tarkoitetaan ihmisen kykyä toimia ilman ulkopuolisen ohjauksen ja kontrollin tarvetta eli ihmisen kykyä ohjata ja johtaa itse itseään. Itseohjautuvuus tuo työntekijälle sekä vapautta että vastuuta, parhaillaan se mahdollistaa työn tekemisestä itselle mielekästä ja oman näköistä. Itseohjautuvuus kuitenkin vaatii työntekijältä kykyä huolehtia itse työnsä etenemisestä aikatauluissa pysymisestä sekä viime kädessä vastuun ottamista omasta työpanoksestaan ilman ulkopuolista valvontaa. </p>
        </Collapsible>
      </AssignmentInstructions>

      <MultiSelect options={options} selection={result} onChange={setResult} columns={1} />

      <AssignmentProgress required={selectionsRequired} selected={selectedCount} />
      <AssignmentFooter done={() => done(result)} close={close} isDone={isDone}>
        <IonCard>
          <IonItem>
            <IonLabel>Hyvä!</IonLabel>
          </IonItem>
          <IonCardContent>
            <p>Nyt tunnet tärkeimmät tulevaisuuden työelämätaidot ja osaat tunnistaa mitä näistä taidoista sinulta itseltäsi voisi löytyä tai mitä niistä haluat kehittää. Pidä nämä työelämätaidot mielessäsi kun otat seuraavan askeleen urasuunnittelusi polulla. </p>
          </IonCardContent>
        </IonCard>
      </AssignmentFooter>
    </div>
  )
}

export default Assignment
