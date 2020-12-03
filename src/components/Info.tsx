import { IonButton, IonCard, IonCardContent, IonIcon, IonItem, IonLabel, IonList } from '@ionic/react'
import * as htmlToImage from 'html-to-image'
import { ellipse } from 'ionicons/icons'
import React, { CSSProperties, useRef } from 'react'
import gameState from '../GameState'
import { THEME_COLORS } from '../Types'
import ProgressMeter from './ProgressMeter'
import './Info.scss'

interface Props { }

const Results: React.FC<Props> = () => {

  return (
    <div className="container info-container">

      <p>
        Pelin tehtävät perustuvat Korkeakoulustartti-hankkeen aikana kehitettyihin Palaset Paikalleen -uraohjausmallin tehtäviin. Lisätietoa uraohjausmallista sekä lisää tehtäviä löydät hankkeen Palaset Paikalleen –vaihtoehdoista valinnoiksi -julkaisusta:
        <br/><a href="https://vanha.karelia.fi/korkeakoulustartti/materiaalit/" target="_blank" rel="noopener noreferrer">https://vanha.karelia.fi/korkeakoulustartti/materiaalit/</a>
      </p>


      <h3>Tehtävien lähteitä</h3>

      <p>
        Lahjakkuus tehtävä perustuu Howard Gardnerin moniälykkyysteoriaan. Lisätietoja aiheesta löydät mm. täältä:
        <br /><a href="https://mielenihmeet.fi/howard-gardner-ja-monialykkyysteoria/" target="_blank" rel="noopener noreferrer">https://mielenihmeet.fi/howard-gardner-ja-monialykkyysteoria/</a>
      </p>

      <p>
        Tulevaisuuden työelämätaidot tehtävän listaus työelämätaitojen kärkikymmeniköstä perustuu Ilmarisen vuonna 2017 teettämän Future Score –testin tuloksiin. Tarkempaa tietoa aiheesta löydät osoitteesta:
        <br /><a href="https://www.sttinfo.fi/tiedote/uudistu-tai-katoa-mitka-ovat-tulevaisuuden-tarkeimmat-tyoelamataidot?publisherId=20853347&releaseId=63043558" target="_blank" rel="noopener noreferrer">https://www.sttinfo.fi/tiedote/uudistu-tai-katoa-mitka-ovat-tulevaisuuden-tarkeimmat-tyoelamataidot?publisherId=20853347&releaseId=63043558</a>
      </p>

      <p>
        Tietoa korkeakouluopiskelusta tehtävän lisätiedot perustuvat Opinpolku -sivuston tietoihin sekä eri korkeakoulujen verkkosivujen tietoihin:
        <br /><a href="https://opintopolku.fi/wp/fi/" target="_blank" rel="noopener noreferrer">https://opintopolku.fi/wp/fi/</a>
      </p>

      <p>
        Unelmien Opiskelupaikka -tehtävä perustuu Avosto.net verkkosivun laskuriin. Löydät sen tästä osoitteesta:
        <br /><a href="http://www.avosto.net/laskuri/" target="_blank" rel="noopener noreferrer">http://www.avosto.net/laskuri/</a>
      </p>

      <p>
        Mahdollisuuksien maailma tehtävän lisätiedot Kelan, Ohjaamon sekä TE-palveluiden verkkosivuilta.
      </p>

      <h3>Lisätietoa tarjoavia linkkejä</h3>

      <p>
        Karelia-ammattikorkeakoulu:&nbsp;
        <a href="https://www.karelia.fi/" target="_blank" rel="noopener noreferrer">https://www.karelia.fi/</a>
      </p>
      <p>
        Kela: &nbsp;
        <a href="https://www.kela.fi/" target="_blank" rel="noopener noreferrer">https://www.kela.fi/</a>
      </p>
      <p>
        Te-palvelut:&nbsp;
        <a href="https://www.te-palvelut.fi/te/fi/" target="_blank" rel="noopener noreferrer">https://www.te-palvelut.fi/te/fi/</a>
      </p>
      <p>
        Ohjaamo:&nbsp;
        <a href="https://ohjaamot.fi/etusivu" target="_blank" rel="noopener noreferrer">https://ohjaamot.fi/etusivu</a>
      </p>
      <p>
        Joensuun Erilaiset Oppijat:&nbsp;
        <a href="https://www.lukijose.fi/" target="_blank" rel="noopener noreferrer">https://www.lukijose.fi/</a>
      </p>
      <p>
        Etsivä nuorisotyö Joensuu:&nbsp;
        <a href="https://www.joensuu.fi/etsiva-nuorisotyo" target="_blank" rel="noopener noreferrer">https://www.joensuu.fi/etsiva-nuorisotyo</a>
      </p>
      <p>
        Ammattikorkeakouluun.fi:&nbsp;
        <a href="https://www.ammattikorkeakouluun.fi/" target="_blank" rel="noopener noreferrer">https://www.ammattikorkeakouluun.fi/</a>
      </p>
      <p>
        Opintopolku:&nbsp;
        <a href="https://opintopolku.fi/wp/fi/" target="_blank" rel="noopener noreferrer">https://opintopolku.fi/wp/fi/</a>
      </p>
      <p>
        Töissä.fi:&nbsp;
        <a href="https://toissa.fi" target="_blank" rel="noopener noreferrer">https://toissa.fi</a>
      </p>
      <p>
        Ammattibarometri:&nbsp;
        <a href="https://www.ammattibarometri.fi/" target="_blank" rel="noopener noreferrer">https://www.ammattibarometri.fi/</a>
      </p>

      <p>
        Lisätietoa Korkeakoulustartti-hankkeesta:&nbsp;
        <a href="https://vanha.karelia.fi/korkeakoulustartti/korkeakoulustartti/" target="_blank" rel="noopener noreferrer">https://vanha.karelia.fi/korkeakoulustartti/korkeakoulustartti/</a>
      </p>
      <p>
        Kokopitkät versiot pelissä käytetyistä videoista löydät täältä:&nbsp;
        <a href="https://vanha.karelia.fi/korkeakoulustartti/materiaalit/" target="_blank" rel="noopener noreferrer">https://vanha.karelia.fi/korkeakoulustartti/materiaalit/</a>
      </p>


    </div>
  )
}

export default Results
