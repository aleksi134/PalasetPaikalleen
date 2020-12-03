
import { uniq } from 'lodash'

export type Occupation = {
  name: string
  url: string
  institute: 'Ammattikorkeakoulu' | 'Yliopisto'
  field: string
}

export const occupations: Occupation[] = [
  {
    name: 'tulkki',
    url: 'assets/tinder-img/tulkki.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Humanistinen ala',
  },

  {
    name: 'yhteisöpedagogi',
    url: 'assets/tinder-img/yhteispedagogi.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Kasvatusala',
  },

  {
    name: 'tradenomi',
    url: 'assets/tinder-img/tradenomi.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Kauppa ja hallinto (liiketalous, johdon assistenttityö ja kielet)',
  },

  {
    name: 'agrologi',
    url: 'assets/tinder-img/agrologi.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Maa- ja metsätalous',
  },
  {
    name: 'hortonomi',
    url: 'assets/tinder-img/hortonomi.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Maa- ja metsätalous',
  },
  {
    name: 'metsätalousinsinööri',
    url: 'assets/tinder-img/metstalous_insinri.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Maa- ja metsätalous',
  },
  {
    name: 'ympäristösuunnittelija',
    url: 'assets/tinder-img/ymprist_suunnittelija.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Maa- ja metsätalous',
  },

  {
    name: 'restonomi',
    url: 'assets/tinder-img/restonomi.png',
    institute: 'Ammattikorkeakoulu',
    field:
      'Palvelualat (kauneudenhoito, kirjasto- ja tietopalvelut, liikenne ja kuljetus, liikunta, matkailu, merenkulku, turvallisuus)',
  },
  {
    name: 'poliisi',
    url: 'assets/tinder-img/poliisi.png',
    institute: 'Ammattikorkeakoulu',
    field:
      'Palvelualat (kauneudenhoito, kirjasto- ja tietopalvelut, liikenne ja kuljetus, liikunta, matkailu, merenkulku, turvallisuus)',
  },
  {
    name: 'estenomi',
    url: 'assets/tinder-img/estenomi.png',
    institute: 'Ammattikorkeakoulu',
    field:
      'Palvelualat (kauneudenhoito, kirjasto- ja tietopalvelut, liikenne ja kuljetus, liikunta, matkailu, merenkulku, turvallisuus)',
  },
  {
    name: 'liikunnanohjaaja',
    url: 'assets/tinder-img/liikunnanohjaaja.png',
    institute: 'Ammattikorkeakoulu',
    field:
      'Palvelualat (kauneudenhoito, kirjasto- ja tietopalvelut, liikenne ja kuljetus, liikunta, matkailu, merenkulku, turvallisuus)',
  },
  {
    name: 'merikapteeni',
    url: 'assets/tinder-img/merikapteeni.png',
    institute: 'Ammattikorkeakoulu',
    field:
      'Palvelualat (kauneudenhoito, kirjasto- ja tietopalvelut, liikenne ja kuljetus, liikunta, matkailu, merenkulku, turvallisuus)',
  },

  {
    name: 'sosionomi',
    url: 'assets/tinder-img/sosionomi.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Sosiaaliala',
  },

  {
    name: 'artenomi',
    url: 'assets/tinder-img/artenomi.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Taiteet ja kulttuuri',
  },
  {
    name: 'konservaattori',
    url: 'assets/tinder-img/konservaattori.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Taiteet ja kulttuuri',
  },
  {
    name: 'kulttuurintuottaja',
    url: 'assets/tinder-img/kulttuurintuottaja.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Taiteet ja kulttuuri',
  },
  {
    name: 'kuvataiteilija',
    url: 'assets/tinder-img/kuvataiteilija.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Taiteet ja kulttuuri',
  },
  {
    name: 'medianomi',
    url: 'assets/tinder-img/medianomi.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Taiteet ja kulttuuri',
  },
  {
    name: 'muotoilija',
    url: 'assets/tinder-img/muotoilija.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Taiteet ja kulttuuri',
  },
  {
    name: 'musiikkipedagogi',
    url: 'assets/tinder-img/musiikkipedagogi.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Taiteet ja kulttuuri',
  },
  {
    name: 'muusikko',
    url: 'assets/tinder-img/muusikko.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Taiteet ja kulttuuri',
  },
  {
    name: 'tanssinopettaja',
    url: 'assets/tinder-img/tanssinopettaja.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Taiteet ja kulttuuri',
  },
  {
    name: 'teatteri-ilmaisun ohjaaja',
    url: 'assets/tinder-img/teatteriilmaisun_ohjaaja.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Taiteet ja kulttuuri',
  },
  {
    name: 'vestonomi',
    url: 'assets/tinder-img/vestonomi.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'insinööri (AMK)',
    url: 'assets/tinder-img/insinri_amk.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },
  {
    name: 'laboratorioanalyytikko',
    url: 'assets/tinder-img/laboratorio_analyytikko.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },
  {
    name: 'rakennusmestari',
    url: 'assets/tinder-img/rakennusmestari.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },
  {
    name: 'rakennusarkkitehti',
    url: 'assets/tinder-img/rakennusarkkitehti.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'ensihoitaja',
    url: 'assets/tinder-img/ensihoitaja.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'bioanalyytikko',
    url: 'assets/tinder-img/bioanalyytikko.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'apuvälineteknikko',
    url: 'assets/tinder-img/apuvlineteknikko.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'geronomi',
    url: 'assets/tinder-img/geronomi.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'fysioterapeutti',
    url: 'assets/tinder-img/fysioterapeutti.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'hammasteknikko',
    url: 'assets/tinder-img/hammasteknikko.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'jalkaterapeutti',
    url: 'assets/tinder-img/jalkaterapeutti.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'kuntoutuksen ohjaaja',
    url: 'assets/tinder-img/kuntoutuksen_ohjaaja.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'kätilö',
    url: 'assets/tinder-img/ktil.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'optometristi',
    url: 'assets/tinder-img/optometristi.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'osteopaatti',
    url: 'assets/tinder-img/osteopaatti.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'naprapaatti',
    url: 'assets/tinder-img/naprapaatti.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'röntgenhoitaja',
    url: 'assets/tinder-img/rntgenhoitaja.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'sairaanhoitaja',
    url: 'assets/tinder-img/sairaanhoitaja.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'suuhygienisti',
    url: 'assets/tinder-img/suuhygienisti.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'terveydenhoitaja',
    url: 'assets/tinder-img/terveydenhoitaja.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },
  {
    name: 'toimintaterapeutti',
    url: 'assets/tinder-img/toimintaterapeutti.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Terveys ja hyvinvointi',
  },

  {
    name: 'tradenomi (tietojenkäsittely)',
    url: 'assets/tinder-img/tradenomi.png',
    institute: 'Ammattikorkeakoulu',
    field: 'Tietojenkäsittely, tieto- ja viestintätekniikka (ICT) ja kirjasto- ja tietopalvelut',
  },

  {
    name: 'historia',
    url: 'assets/tinder-img/historia.png',
    institute: 'Yliopisto',
    field: 'Humanistiset alat ja teologia',
  },
  {
    name: 'arkeologia',
    url: 'assets/tinder-img/arkeologia.png',
    institute: 'Yliopisto',
    field: 'Humanistiset alat ja teologia',
  },
  {
    name: 'filosofia',
    url: 'assets/tinder-img/filosofia.png',
    institute: 'Yliopisto',
    field: 'Humanistiset alat ja teologia',
  },
  {
    name: 'folkloristiikka',
    url: 'assets/tinder-img/folkloristiikka.png',
    institute: 'Yliopisto',
    field: 'Humanistiset alat ja teologia',
  },
  {
    name: 'kansatiede (etnologia)',
    url: 'assets/tinder-img/kansatiede_etnologia.png',
    institute: 'Yliopisto',
    field: 'Humanistiset alat ja teologia',
  },
  {
    name: 'kulttuurihistoria',
    url: 'assets/tinder-img/kulttuurihistoria.png',
    institute: 'Yliopisto',
    field: 'Humanistiset alat ja teologia',
  },

  {
    name: 'taidehistoria',
    url: 'assets/tinder-img/taidehistoria.png',
    institute: 'Yliopisto',
    field: 'Humanistiset alat ja teologia',
  },

  {
    name: 'uskontotiede',
    url: 'assets/tinder-img/uskontotiede.png',
    institute: 'Yliopisto',
    field: 'Humanistiset alat ja teologia',
  },

  {
    name: 'teologia',
    url: 'assets/tinder-img/teologia.png',
    institute: 'Yliopisto',
    field: 'Humanistiset alat ja teologia',
  },

  {
    name: 'kasvatustiede ja aikuiskasvatustiede',
    url: 'assets/tinder-img/kasvatustiede_jaaikuiskasvatustiede.png',
    institute: 'Yliopisto',
    field: 'Kasvatusala',
  },
  {
    name: 'kotitalousopettaja',
    url: 'assets/tinder-img/kotitalousopettaja.png',
    institute: 'Yliopisto',
    field: 'Kasvatusala',
  },
  {
    name: 'käsityönopettaja',
    url: 'assets/tinder-img/ksitynopettaja.png',
    institute: 'Yliopisto',
    field: 'Kasvatusala',
  },

  {
    name: 'varhaiskasvatuksen opettaja',
    url: 'assets/tinder-img/varhaiskasvatuksen_opettaja.png',
    institute: 'Yliopisto',
    field: 'Kasvatusala',
  },

  {
    name: 'luokanopettaja',
    url: 'assets/tinder-img/luokanopettaja.png',
    institute: 'Yliopisto',
    field: 'Kasvatusala',
  },

  {
    name: 'opinto-ohjaaja',
    url: 'assets/tinder-img/opintoohjaaja.png',
    institute: 'Yliopisto',
    field: 'Kasvatusala',
  },

  {
    name: 'erityisopettaja ja erityisluokanopettaja',
    url: 'assets/tinder-img/erityisopettaja_jaerityisluokanopettaja.png',
    institute: 'Yliopisto',
    field: 'Kasvatusala',
  },

  {
    name: 'liikunnanopettaja',
    url: 'assets/tinder-img/liikunnanopettaja.png',
    institute: 'Yliopisto',
    field: 'Kasvatusala',
  },

  {
    name: 'puheviestintä, puheterapeutti, logopedia',
    url: 'assets/tinder-img/puheterapeuttipuheviestint_logopedia.png',
    institute: 'Yliopisto',
    field: 'Kasvatusala',
  },

  {
    name: 'musiikkikasvatus',
    url: 'assets/tinder-img/musiikkikasvatus.png',
    institute: 'Yliopisto',
    field: 'Kasvatusala',
  },

  {
    name: 'kuvataidekasvatus',
    url: 'assets/tinder-img/kuvataidekasvatus.png',
    institute: 'Yliopisto',
    field: 'Kasvatusala',
  },

  {
    name: 'kieltenopettaja',
    url: 'assets/tinder-img/kielten_opettaja.png',
    institute: 'Yliopisto',
    field: 'Kasvatusala',
  },

  {
    name: 'kauppatieteet',
    url: 'assets/tinder-img/kauppatieteet.png',
    institute: 'Yliopisto',
    field: 'Kauppa, hallinto ja oikeustiede',
  },

  {
    name: 'oikeustieteet',
    url: 'assets/tinder-img/oikeustieteet.png',
    institute: 'Yliopisto',
    field: 'Kauppa, hallinto ja oikeustiede',
  },

  {
    name: 'hallintotieteet',
    url: 'assets/tinder-img/hallintotieteet.png',
    institute: 'Yliopisto',
    field: 'Kauppa, hallinto ja oikeustiede',
  },

  {
    name: 'politiikkatieteet ja valtio-oppi',
    url: 'assets/tinder-img/politiikkatieteetja_valtiooppi.png',
    institute: 'Yliopisto',
    field: 'Kauppa, hallinto ja oikeustiede',
  },

  {
    name: 'taloustiede',
    url: 'assets/tinder-img/taloustiede.png',
    institute: 'Yliopisto',
    field: 'Kauppa, hallinto ja oikeustiede',
  },
  {
    name: 'ympäristöpolitiikka',
    url: 'assets/tinder-img/ympristpolitiikka.png',
    institute: 'Yliopisto',
    field: 'Kauppa, hallinto ja oikeustiede',
  },

  {
    name: 'matemaattisten aineiden opettaja',
    url: 'assets/tinder-img/matemaattistenaineiden_opettaja.png',
    institute: 'Yliopisto',
    field: 'Luonnontieteet, matematiikka ja tilastotiede',
  },

  {
    name: 'matematiikka ja tilastotiede',
    url: 'assets/tinder-img/matematiikkaja_tilastotiede.png',
    institute: 'Yliopisto',
    field: 'Luonnontieteet, matematiikka ja tilastotiede',
  },

  {
    name: 'fysiikka',
    url: 'assets/tinder-img/fysiikka.png',
    institute: 'Yliopisto',
    field: 'Luonnontieteet, matematiikka ja tilastotiede',
  },

  {
    name: 'kemia',
    url: 'assets/tinder-img/kemia.png',
    institute: 'Yliopisto',
    field: 'Luonnontieteet, matematiikka ja tilastotiede',
  },

  {
    name: 'biologia',
    url: 'assets/tinder-img/biologia.png',
    institute: 'Yliopisto',
    field: 'Luonnontieteet, matematiikka ja tilastotiede',
  },

  {
    name: 'ympäristötiede',
    url: 'assets/tinder-img/ympristtiede.png',
    institute: 'Yliopisto',
    field: 'Luonnontieteet, matematiikka ja tilastotiede',
  },

  {
    name: 'maantiede',
    url: 'assets/tinder-img/maantiede.png',
    institute: 'Yliopisto',
    field: 'Luonnontieteet, matematiikka ja tilastotiede',
  },

  {
    name: 'teknis-luonnontieteellinen',
    url: 'assets/tinder-img/teknis_luonnontieteellinen.png',
    institute: 'Yliopisto',
    field: 'Luonnontieteet, matematiikka ja tilastotiede',
  },

  {
    name: 'biokemia',
    url: 'assets/tinder-img/biokemia.png',
    institute: 'Yliopisto',
    field: 'Luonnontieteet, matematiikka ja tilastotiede',
  },

  {
    name: 'geotiede',
    url: 'assets/tinder-img/geotiede.png',
    institute: 'Yliopisto',
    field: 'Luonnontieteet, matematiikka ja tilastotiede',
  },

  {
    name: 'molekyylibiotieteet',
    url: 'assets/tinder-img/molekyylibiotieteet.png',
    institute: 'Yliopisto',
    field: 'Luonnontieteet, matematiikka ja tilastotiede',
  },
  {
    name: 'biolääketiede',
    url: 'assets/tinder-img/biolketiede.png',
    institute: 'Yliopisto',
    field: 'Luonnontieteet, matematiikka ja tilastotiede',
  },

  {
    name: 'farmaseutti',
    url: 'assets/tinder-img/farmaseutti.png',
    institute: 'Yliopisto',
    field: 'Farmasia, hammaslääketiede ja lääketiede',
  },
  {
    name: 'proviisori',
    url: 'assets/tinder-img/proviisori.png',
    institute: 'Yliopisto',
    field: 'Farmasia, hammaslääketiede ja lääketiede',
  },

  {
    name: 'hammaslääkäri',
    url: 'assets/tinder-img/hammaslkri.png',
    institute: 'Yliopisto',
    field: 'Farmasia, hammaslääketiede ja lääketiede',
  },

  {
    name: 'lääkäri',
    url: 'assets/tinder-img/lkri.png',
    institute: 'Yliopisto',
    field: 'Farmasia, hammaslääketiede ja lääketiede',
  },

  {
    name: 'eläinlääkäri',
    url: 'assets/tinder-img/elinlkri.png',
    institute: 'Yliopisto',
    field: 'Maatalous- ja metsätiede, eläinlääketiede',
  },

  {
    name: 'metsätiede',
    url: 'assets/tinder-img/metstiede.png',
    institute: 'Yliopisto',
    field: 'Maatalous- ja metsätiede, eläinlääketiede',
  },

  {
    name: 'maataloustieteet',
    url: 'assets/tinder-img/maataloustieteet.png',
    institute: 'Yliopisto',
    field: 'Maatalous- ja metsätiede, eläinlääketiede',
  },

  {
    name: 'elintarviketieteet',
    url: 'assets/tinder-img/elintarviketieteet.png',
    institute: 'Yliopisto',
    field: 'Maatalous- ja metsätiede, eläinlääketiede',
  },

  {
    name: 'maanpuolustuskorkeakoulu / upseeri',
    url: 'assets/tinder-img/maanpuolustuskorkeakoulu_upseeri.png',
    institute: 'Yliopisto',
    field: 'Palvelualat (liikuntatiede, sotilasala)',
  },

  {
    name: 'liikuntatieteet',
    url: 'assets/tinder-img/liikuntatieteet.png',
    institute: 'Yliopisto',
    field: 'Palvelualat (liikuntatiede, sotilasala)',
  },

  {
    name: 'psykologia',
    url: 'assets/tinder-img/psykologia.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'vieraat kielet',
    url: 'assets/tinder-img/vieraat_kielet.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'kieliasiantuntija',
    url: 'assets/tinder-img/kieliasiantuntija.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'kääntäjä',
    url: 'assets/tinder-img/kntj.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'Suomen kieli ja kirjallisuus',
    url: 'assets/tinder-img/suomen_kieli_ja_kirjallisuus.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'kirjallisuustiede',
    url: 'assets/tinder-img/kirjallisuustiede.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'mediatutkimus',
    url: 'assets/tinder-img/mediatutkimus.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'informaatiotutkimus',
    url: 'assets/tinder-img/imformaatiotutkimus.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'sosiaalitieteet',
    url: 'assets/tinder-img/sosiaalitieteet.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'sosiaalityö',
    url: 'assets/tinder-img/sosiaality.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'journalistiikka',
    url: 'assets/tinder-img/journalistiikka.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'viestintä',
    url: 'assets/tinder-img/viestint.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'graafinen suunnittelija',
    url: 'assets/tinder-img/graafinen_suunnittelija.png',
    institute: 'Yliopisto',
    field: 'Sosiaalitieteet, journalistiikka ja viestintä',
  },

  {
    name: 'kulttuurintutkimus',
    url: 'assets/tinder-img/kulttuurintutkimus.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'Saamelainen kulttuuri',
    url: 'assets/tinder-img/saamelainen_kulttuuri.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'elokuva-ala',
    url: 'assets/tinder-img/elokuvaala.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'lavastaja',
    url: 'assets/tinder-img/lavastaja.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'kuvataiteilija (yliopisto)',
    url: 'assets/tinder-img/kuvataiteilija-yliopisto.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'näyttelijä',
    url: 'assets/tinder-img/nyttelij.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'ohjaaja',
    url: 'assets/tinder-img/ohjaaja.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'dramaturgi',
    url: 'assets/tinder-img/dramaturgi.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'tanssija',
    url: 'assets/tinder-img/tanssija.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'valo- ja äänisuunnittelija',
    url: 'assets/tinder-img/valo_nisuunnittelija.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'muusikko (yliopisto)',
    url: 'assets/tinder-img/muusikko-yliopisto.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'musiikkitieteet',
    url: 'assets/tinder-img/musiikkitieteet.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'vaatesuunnittelija',
    url: 'assets/tinder-img/vaatesuunnittelija.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'muotoilu',
    url: 'assets/tinder-img/muotoilu.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'sisustus- ja tekstiilimuotoilu',
    url: 'assets/tinder-img/sisustus_ja_tekstiilimuotoilu.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'teollinen muotoilu',
    url: 'assets/tinder-img/teollinen_muotoilu.png',
    institute: 'Yliopisto',
    field: 'Taiteet ja kulttuuri',
  },

  {
    name: 'sähkötekniikka',
    url: 'assets/tinder-img/shktekniikka.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'ympäristötekniikka',
    url: 'assets/tinder-img/ympristtekniikka.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'tuotantotalous',
    url: 'assets/tinder-img/tuotantotalous.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'bioteknologia ja bioinformaatioteknologia',
    url: 'assets/tinder-img/bioteknologia_ja_bioinformaatioteknologia.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'arkkitehti',
    url: 'assets/tinder-img/arkkitehti.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'rakennettu ympäristö',
    url: 'assets/tinder-img/rakennettu_ymprist.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'rakennustekniikka ja yhdyskuntatekniikka',
    url: 'assets/tinder-img/rakennustekniikkaja_yhdyskuntatekniikka.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'maisema-arkkitehti',
    url: 'assets/tinder-img/maisemaarkkitehti.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'prosessitekniikka',
    url: 'assets/tinder-img/prosessitekniikka.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },
  {
    name: 'konetekniikka',
    url: 'assets/tinder-img/konetekniikka.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'energiatekniikka',
    url: 'assets/tinder-img/energiatekniikka.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'tietojohtaminen',
    url: 'assets/tinder-img/tietojohtaminen.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'kemiantekniikka',
    url: 'assets/tinder-img/kemiantekniikka.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'materiaalitekniikka',
    url: 'assets/tinder-img/materiaalitekniikka.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'laskennallinen tekniikka ja analytiikka',
    url: 'assets/tinder-img/laskennallinen_tekniikka_ja_analytiikka.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'automaatiotekniikka',
    url: 'assets/tinder-img/automaatiotekniikka.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'sisustusarkkitehti',
    url: 'assets/tinder-img/sisustusarkkitehti.png',
    institute: 'Yliopisto',
    field: 'Tekniikka, teollisuus ja rakentaminen',
  },

  {
    name: 'tietojenkäsittelytiede',
    url: 'assets/tinder-img/tietojenksittelytiede.png',
    institute: 'Yliopisto',
    field: 'Tietojenkäsittely, tietotekniikka (ICT) ja informaatiotutkimus',
  },
  {
    name: 'tietotekniikka',
    url: 'assets/tinder-img/tietotekniikka.png',
    institute: 'Yliopisto',
    field: 'Tietojenkäsittely, tietotekniikka (ICT) ja informaatiotutkimus',
  },

  {
    name: 'informaatioverkostot',
    url: 'assets/tinder-img/informaatioverkostot.png',
    institute: 'Yliopisto',
    field: 'Tietojenkäsittely, tietotekniikka (ICT) ja informaatiotutkimus',
  },

  {
    name: 'elektroniikka ja tietoliikennetekniikka',
    url: 'assets/tinder-img/elektroniikka_jatietoliikennetekniikka.png',
    institute: 'Yliopisto',
    field: 'Tietojenkäsittely, tietotekniikka (ICT) ja informaatiotutkimus',
  },

  {
    name: 'terveystieteet',
    url: 'assets/tinder-img/terveystieteet.png',
    institute: 'Yliopisto',
    field: 'Terveys- ja hyvinvointi',
  },

  {
    name: 'yhteiskuntatutkimus',
    url: 'assets/tinder-img/yhteiskuntatutkimus.png',
    institute: 'Yliopisto',
    field: 'Yhteiskuntatieteet',
  },

  {
    name: 'yhteiskuntapolitiikka',
    url: 'assets/tinder-img/yhteiskuntapolitiikka.png',
    institute: 'Yliopisto',
    field: 'Yhteiskuntatieteet',
  },
  {
    name: 'matkailututkimus',
    url: 'assets/tinder-img/matkailututkimus.png',
    institute: 'Yliopisto',
    field: 'Yhteiskuntatieteet',
  },
]

export const uniqueFields = uniq(occupations.map(o => o.field))

export const getIndexedOccupations = (names: string[]): Record<string, Occupation> =>
  occupations
    .filter((o) => names.includes(o.name))
    .reduce((acc, o) => ({ ...acc, [o.name]: o }), {})