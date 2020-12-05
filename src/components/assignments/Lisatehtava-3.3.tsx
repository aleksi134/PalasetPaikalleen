import { IonButton, IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'
import Collapsible from 'react-collapsible'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import MultiSelectCorrect from '../MultiSelectCorrect'
import VideoSlides from '../VideoSlides'

type State = { title: string, isCorrect: boolean }[]

interface Props {
  state: State
  done: (result: State) => void
  close: VoidFunction
}

const options = [
  { title: 'Monimuoto-opiskelu korkeakoulussa', isCorrect: true },
  { title: 'Miten välivuoden voi hyödyntää tulevia opintoja tai korkeakouluhakua hyödyttävällä tavalla.', isCorrect: true },
  { title: 'Avoimen ammattikorkeakoulun opinnot', isCorrect: true },
  { title: 'Ilman korkeakoulupaikkaa jääminen', isCorrect: true },
  { title: 'Uuden koulutuspolun löytäminen', isCorrect: true },
  { title: 'Opintojen ja oman elämäntilanteen yhteensovittaminen', isCorrect: true },
  { title: 'Kelan tai Te-palveluiden työkokeilussa oleminen', isCorrect: false },
  { title: 'Päivä amk -opiskelijana tutustuminen opintoihin', isCorrect: false },
  { title: 'Yliopiston avoimille luennoille osanottaminen', isCorrect: false },
  { title: 'Ilman lukiota yliopistoon opiskelemaan', isCorrect: true },
  { title: 'Vapaaehtoistoiminnassa työskentely', isCorrect: false },
  { title: 'Ulkomailla opiskelu ja työskentely', isCorrect: false },
  { title: 'Oman elämänpolku tukena opinnoissa ja tulevassa ammatissa', isCorrect: true },
  { title: 'Väyläopinnot', isCorrect: false },
  { title: 'Itseohjautuvuus opinnoissa', isCorrect: true },
  { title: 'Työelämästä takaisin opiskelijaksi', isCorrect: true },
  { title: 'Kansanopistossa opiskelu', isCorrect: true },
  { title: 'Ohjaamo ja muut ohjaustoiminnan tukitoimijat', isCorrect: false },
]

// const correctCount = options.filter(o => o.isCorrect).length

const videos = [
  '/assets/videos/assignment-3.3/pinja.webm',
  '/assets/videos/assignment-3.3/mari2.webm',
  '/assets/videos/assignment-3.3/tyttilotta.webm',
  '/assets/videos/assignment-3.3/ina1.webm',
  '/assets/videos/assignment-3.3/ina2.webm',
]

const Assignment: React.FC<Props> = ({ state = [], done, close }) => {
  const [ result, setResult ] = useState<State>(state)

  const isDone = true

  return (
    <div>
      <AssignmentInstructions title="Mahdollisuuksien maailma" showBubble={false}>

        <p>Onko elämäntilanteesi sellainen, että perinteinen opiskelu ei juuri nyt sovi sinulle? Tai jäitkö ilman opiskelupaikkaa ja pohdit, miten hyödyntää välivuotesi niin, että se edesauttaa sinua tulevalla urapolullasi? </p>
        <p>Tutustu korkeakouluopiskelijoiden Pinjan, Marin, Tyttilotan ja Inan erilaisiin tarinoihin korkeakouluun hakemisesta, alanvaihdosta, monimuoto-opiskelusta sekä välivuoden hyödyntämisestä. </p>

        <p>Mitä näistä teemoista videoilla käsiteltiin? </p>

        <p>Tiedätkö mitä nämä mahdollisuudet pitävät sisällään ja voisiko niistä joku sopia sinun elämäntilanteeseesi juuri nyt? Tästä saat lisätietoa erilaisista opiskeluun ja työhön liittyvistä vaihtoehdoista</p>

        <Collapsible trigger="Lisätietoa erilaisista opiskeluun ja työhön liittyvistä vaihtoehdoista">
          <h2> Kelan tai Te-palveluiden koulutuskokeilussa oleminen </h2>
          <p> Työttömänä työnhakijana voi myös osallistua TE-palvelujen kautta koulutuskokeiluun. Koulutuskokeilussa tutustut koulutuksen sisältöön ja ammatin vaatimuksiin. Kokeilussa voit keskustella opettajien ja oppilaanohjaajien kanssa opiskeluun liittyvistä asioista sekä tutustua oppilaitokseen ja opiskeluun seuraamalla oppitunteja. Koulutuskokeilu kestää enintään 10 päivää. Kelan kautta voidaan myös joissain tilanteissa järjestää koulutuskokeilu. Koulutuskokeilu voi sopia henkilölle, jolla on sairauden tai vamman vuoksi erityisiä vaikeuksia koulutusalan valinnassa. </p>

          <h2>Päivä amk -opiskelijana tutustuminen opintoihin</h2>
          <p> Jos mielessä on useampi ala ammattikorkeakoulussa, joista on kiinnostunut tai haluaa nähdä ja tutustua tietyn alan opiskeluun tarkemmin, voi myös ilmoittautua mukaan päivä amk-opiskelijana -palveluun. Tätä kautta pääset päivän ajaksi tutustumaan kiinnostaviin opintoihin. Päivän aikana tutustut koulutusohjelmaan, opiskeluun ja opiskelijoihin sekä tietysti osallistut oppitunneille. </p>

          <h2> Yliopiston avoimille luennoille osanottaminen </h2>
          <p> Suomessa koulutus on pääosin avointa, joten voit mennä seuraamaan lähes minkä tahansa koulutusalan avoimia luentoja. Suosittelemme valitsemaan luennot, joissa ei ole ryhmätyöskentelyä, ja jotka antavat laajan kokonaiskuvan opiskeltavasta aiheesta. Tällaisia ovat esimerkiksi yliopistolla eri alojen ”johdatus” -kurssit. </p>

          <h2> Vapaaehtoistoiminnassa työskentely </h2>
          <p>Tarjolla on monenlaista vapaaehtoistoimintaa, jossa pääset vaikuttamaan ja auttamaan sinulle tärkeissä asioissa. Vapaaehtoistoiminta voi myös antaa sinulle monia työelämässä tarvittavia taitoja ja auttaa sellaisten valmiuksien kehittämisessä, joista on hyötyä esimerkiksi tulevissa opinnoissasi. Tutustu lähialueeltasi löytyviin vapaaehtoistoiminnan muotoihin ja lähde rohkeasti mukaan!</p>

          <h2> Ulkomailla opiskelu ja työskentely </h2>
          <p>Voit myös kehittää osaamistasi työskentelemällä tai opiskelemalla ulkomailla. Työkokemusten ja opintojen lisäksi saat samalla kansainvälistä kokemusta, tutustut eri kulttuuriympäristöihin ja kehität kielitaitoasi. Nämä kaikki ovat erittäin hyödyllisiä taitoja työmarkkinoilla niin kotimaassa kuin maailmanlaajuisestikin. Ulkomailla opiskelu voi myös tarjota mahdollisuuden sellaisiin opintoihin, joita Suomesta ei löydy tai sitten voi täydentää opintojasi ulkomailla suoritetuilla opinnoilla. Tutustu ulkomailla työskentelyn ja opiskelun mahdollisuuksiin, niin huomaat miten moninaiset mahdollisuudet sinulle avautuvat niin Euroopassa, kuin sen ulkopuolellakin. </p>

          <h2> Väyläopinnot </h2>
          <p>Väyläopinnot ovat määritellyn laajuinen kokonaisuus tietyn koulutuksen tutkintoon kuuluvia opintoja, jotka tuottavat hakukelpoisuuden korkeakoulututkintoon johtavaan koulutukseen. Suorittamasi opinnot voidaan hyväksilukea täysimääräisinä, jos tulet myöhemmin valituksi tutkinto-opiskelijaksi erillishaun tai yhteishaun valintakokeessa. Väyläopintoja on kuitenkin tarjolla vain tietyille aloille ja tiettyihin korkeakouluihin, joten tilanne kannattaa aina tarkistaa korkeakoulun omilta sivuilta. Väyläopinnoissa voi olla myös erilaisia käytäntöjä, joista myös tarjoaa lisätietoa kyseisen korkeakoulun verkkosivut sekä esimerkiksi Opintopolku-sivusto. </p>

          <h2> Ohjaamo ja muut ohjaustoiminnan tukitoimijat </h2>
          <p>Ohjaamo on kaikille alle 30-vuotiaille tarkoitettu paikka, jossa saa maksutonta apua ja tukea monenlaisiin asioihin opiskelusta ja työllistymisestä asumiseen ja kaikkeen näiden väliltä. Ohjaamo on paikka, josta saa apua työhön, koulutukseen ja arkeen liittyvissä asioissa. Ohjaamoita on jo yli 70 eri puolilla Suomea ja ne tarjoavat tietoa sekä ohjausta nopeasti ja asiakkaiden tarpeiden mukaan.  </p>
        </Collapsible>

      </AssignmentInstructions>

      <VideoSlides urls={videos} />

      <MultiSelectCorrect options={options} selection={result} onChange={setResult} columns={1} />

      <AssignmentFooter done={() => done(result)} close={close} isDone={isDone}>
        <IonCard>
          <IonItem>
            <IonLabel>Hienoa!</IonLabel>
          </IonItem>
          <IonCardContent>
            <p>Nyt olet tietoinen laajemmin niistä erilaisista mahdollisuuksista ja poluista, joilla opintoihin voi päästä sekä siitä, miten välivuoden voi hyödyntää tulevia opintojasi hyödyttävällä tavalla. Tämä tieto tuo varmuutta ja rohkeutta seuraavien askeleiden ottamiseen urasuunnittelusi polulla.</p>
          </IonCardContent>
        </IonCard>
      </AssignmentFooter>
    </div>
  )
}

export default Assignment
