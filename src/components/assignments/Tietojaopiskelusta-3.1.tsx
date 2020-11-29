import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react'
import React, { useState } from 'react'
import { Claim } from '../../Types'
import AssignmentFooter from '../AssignmentFooter'
import AssignmentInstructions from '../AssignmentInstructions'
import Claims from '../Claims'

type State = Record<string, boolean>

interface Props {
  state: State
  done: (result: State) => void
  close: VoidFunction
}

const claims: Claim[] = [
  {
    title: 'Korkeakouluopinnoissa on sekä yhteisiä opintoja että itsenäistä työskentelyä.',
    explanation: 'Oikein. Näiden suhde vaihtelee koulutusmuodon ja valitun alan mukaan. Esimerkiksi yliopistossa, jossa opiskelu on yleensä itsenäisempää, osallistut kuitenkin yhteisille luennoille, ryhmätyöskentelyyn sekä seminaareihin.',
    isCorrect: true
  },
  {
    title: 'Korkeakouluopiskelusta täytyy selvitä täysin itsenäisesti. Opiskelija selvittää kaikki opintoihin kuuluvat asiat itse ja huolehtii kaikista opintojen etenemiseen liittyvistä asioistaan.',
    explanation: 'Väärin. Korkeakouluopiskelu on itsenäistä ja siinä opiskelijalla on paljon vastuuta. Kaikkea ei kuitenkaan tarvitse selvittää itse ja tukea sekä neuvontaa on aina tarjolla. Oppilaitoksesta riippuen apunasi ovat mm. tuutorit, opettajat, opinto-ohjaajat ja opiskelijapalveluiden henkilökunta.',
    isCorrect: false
  },
  {
    title: 'Opiskelun lisäksi korkeakoulujen opiskelijaelämään kuuluu paljon muutakin toimintaa.',
    explanation: 'Oikein. Opiskelun vastapainoksi on tarjolla monenlaista tekemistä. Opiskelijakunnat ja järjestöt järjestävät säännöllisesti erilaisia tapahtumia, lisäksi tarjolla on monenlaista vapaamuotoisempaa liikunta- ja muuta harrastetoimintaa. Nämä auttavat sinua irtautumaan opinnoista sopivasti ja tuovat hienon mahdollisuuden tutustua opiskelutovereihisi oman ryhmäsi ulkopuolella ja kokeilla vaikkapa täysin uutta harrastusta. Lähde rohkeasti mukaan tarjolla olevaan toimintaan!',
    isCorrect: true
  },
  {
    title: 'Ammattikorkeassa sinun pitää aina olla kontaktiopetuksessa, yliopistossa voit itse päättää milloin opiskelet.',
    explanation: 'Väärin. Kontaktiopetuksen määrä vaihtelee aina koulutusalan mukaan. Yliopistossa on yleensä ottaen enemmän itsenäistä ja etänä tapahtuvaa opiskelua, mutta tämäkin vaihtelee alan mukaan. Molemmat opiskelumuodot mahdollistavat omien opintojen suunnittelua ja tarjoavat mahdollisuuden myös aikatauluttaa opintojaan itse. Omat valinnat opintojen painotuksissa vaikuttavat kontaktiopetuksen ja itsenäisen työskentelyn määrään.',
    isCorrect: false
  },
  {
    title: 'Korkeakouluun ei ole muita reittejä kuin pääsykokeen läpäiseminen.',
    explanation: 'Väärin. Kevään 2020 yhteishausta lähtien valtaosa opiskelijoista ammattikorkeakouluihin valitaan ammatillisen perustutkinnon ja ylioppilastutkinnon perusteella. Loput opiskelupaikat täytetään valintakokeen perusteella. Kevään 2020 yhteishausta alkaen myös valtaosa opiskelijoista yliopistoihin valitaan ylioppilastutkintotodistuksen perusteella. Loput opiskelupaikat täytetään valintakokeen tai todistuksen ja valintakokeen perusteella. Jos sinulla ei ole yo-todistusta, sinut voidaan valita opiskelemaan valintakokeen perusteella. Lisäksi mahdollisuutena on myös esimerkiksi Väylä-opintojen suorittaminen, sekä avoimen amk:n ja yliopiston tarjoamat opinnot. Avoimen amk:n ja yliopiston opetus on korkeakoulujen opetussuunnitelmien mukaista, kaikille avointa opetusta koulutuksesta ja iästä riippumatta ja siinä voit suorittaa yksittäisiä opintojaksoja tai laajempia kokonaisuuksia. ',
    isCorrect: false
  },
  {
    title: 'Avoimessa suoritetut opinnot voivat nopeuttaa valmistumistasi päästessäsi opiskelemaan.',
    explanation: 'Oikein. Suorittamasi tutkintoon kuuluvat opinnot voidaa  lukea sinulle hyväksi, mikäli ne ovat tutkinnolle ja opintojaksoille asetettujen tavoitteiden mukaisia. Aikaisempien ja muualla suoritettujen opintojen hyväksilukeminen vaihtelee eri korkeakouluissa, tiedekunnissa ja koulutuksissa. Avoimen opinnot ovat korkeakoulujen opetussuunnitelman mukaisia Avoimessa suoritetut opinnot ovat siis samankaltaisia opintoja, joita tekisit osana tutkintoakin, joten ne ovat erinomainen tapa tutustua korkeakoulunopiskeluun ja selvittää sopivatko kyseiset opinnot sinulle. Avoimen opinnot ovat maksullisia, mutta eivät kovin kalliita. ',
    isCorrect: true
  },
  {
    title: 'Yliopisto-opiskelu sisältää pelkkää teoriaa eikä käytännön tekemistä ole',
    explanation: 'Väärin. Alasta riippuen opinnot yliopistossa voivat sisältää hyvinkin paljon käytännön tekemistä, esimerkiksi laboratoriotyöskentelyn tai opetusharjoittelujen muodossa. Yliopisto-opintoihin kuuluu myös harjoittelua, joten myös työelämään pääsee tutustumaan, kartuttamaan osaamistaan sekä esittelemään opintojen aikana hankittuja valmiuksia. Tämä sama pätee myös ennakkoluuloihin siitä, että ammattikorkean opinnot keskittyisivät pelkästään käytännön tekemiseen. Myös AMK:ssa tutustut opiskelemasi alan teoriaan käytännön tekemisen ohella.',
    isCorrect: false,
  },
  {
    title: 'Yksi tutkinto valmistaa sinut aina vain yhteen alaan.',
    explanation: 'Väärin. Samalla tutkinnolla voi työskennellä hyvinkin erilaisissa tehtävissä. Voit myös työskennellä samankaltaisissa tehtävissä eri vaatimustasoilla, riippuen esimerkiksi aiemmasta työkokemuksestasi alalla. Monet tutkinnot ovat myös niin sanottuja generalistisia tutkintoja, jotka tarjoavat pätevyyden hyvin monipuolisiin asiantuntijatehtäviin laajalla skaalalla. Myös oma opintojen aikainen kiinnostuksesi, erikoistumisopinnot, sivuaineet, työharjoittelusi ja moni muu tekijä voivat vaikuttaa niihin tehtäviin, joissa voit valmistuttuasi työskennellä.',
    isCorrect: false
  },
  {
    title: 'Ammattikorkeakoulututkinnon voi suorittaa myös töiden ohessa.',
    explanation: 'Oikein. Monimuoto-opiskeluna suoritettava amk-tutkinto sopii hyvin sinulle esimerkiksi juuri silloin, jos olet jo työelämässä etkä voi osallistua perinteiseen päiväopetukseen. Monimuoto-opiskelussa opiskeltavalla tutkinnolla voit täydentää aikaisempaa koulutustasi ja työkokemustasi. Voit täydentää aikaisemmin suoritetun opistoasteen tai ammatillisen korkea-asteen tutkintosi amk-tutkinnoksi noin 1–2,5 vuodessa tai voit opiskella itsellesi uuden ammatin ns. pitkässä tutkintoon johtavassa koulutuksessa 3,5–4,5 vuodessa. Jotkut koulutukset voivat vaatia jonkin tietyn aiemman tutkinnon suorittamista (esim. merkonomi 🡪 tradenomi).',
    isCorrect: true
  },
  {
    title: 'Opintojen kesto on aina tutkinnossa määritelty vuosimäärä ja tutkinnon sisällöt ovat valmiiksi päätettyjä.  ',
    explanation: 'Väärin. Voit itse vaikuttaa korkeakouluopintojesi suunnitteluun ja aikataulutukseen. Monet tutkintojen osista ovat kiinteitä, mutta sinulla on myös paljon valinnan mahdollisuuksia siihen, miten opintosi painottuvat. Voit tietyissä kohdin nopeuttaa opintojasi ja tarvittaessa myös hidastaa tahtiasi sopimaan paremmin elämäntilanteeseesi. Valinnaisten opintojen laajuus voi myös vaikuttaa opintojesi kestoon, esimerkiksi jos päätät yliopistossa opiskella useampia sivuaineita.',
    isCorrect: false
  }
]

const Assignment: React.FC<Props> = ({ state = {}, done, close }) => {
  const [result, setResult] = useState<State>(state)

  const onAnswer = (claim: Claim, answer: boolean) =>
    setResult({ ...result, [claim.title]: answer === claim.isCorrect })

  const isDone = Object.keys(result).length === claims.length
  const rightCount = Object.values(result).filter(a => a).length

  return (
    <div>
      <AssignmentInstructions title='Tietoja opiskelusta'>
        <p> Millaista korkeakoulussa opiskelu on käytännössä? Mitä se vaatii sinulta? </p>
        <p> Urasuunnittelua tehdessä on myös hyvä tietää ja tiedostaa, millaista opiskelu on yliopistossa tai ammattikorkeakoulussa. Kun perehdyt siihen, millaisia tutkinnot ja eri opiskelumuodot ovat pääset lähemmäksi päätöstä siitä, millainen opiskelumuoto, -ala ja koulutus parhaiten soveltuu juuri sinulle. Miten hyvin tunnet korkeakouluopiskelun maailmaa? Tiedätkö mitä seuraavista väittämistä pitävät paikkaansa ja mitkä eivät puolestaan pidä paikkaansa? </p>
      </AssignmentInstructions>

      <Claims options={claims} result={result} onChange={onAnswer} />

      <AssignmentFooter done={() => done(result)} close={close} isDone={isDone}>
        <IonCard className="results">
          <IonCardHeader>
            <IonCardTitle>Erinomaista!</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p className="result ion-padding">
              Sait {rightCount} / {claims.length} oikein
            </p>
            Nyt olet laajentanut tietämystäsi korkeakouluopiskelusta ja hakuun sekä opintoihin liittyvistä mahdollisuuksista. Tieto korkeakoulutuksesta antaa rohkeutta tehdä omannäköisiä valintoja urapolullasi ja ottaa seuraavat askeleet kohti unelmiesi opiskelupaikkaa.
          </IonCardContent>
        </IonCard>
      </AssignmentFooter>

    </div>
  )
}

export default Assignment
