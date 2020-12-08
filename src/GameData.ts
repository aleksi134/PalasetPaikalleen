import { flag, helpOutline } from 'ionicons/icons'
import { createContext } from 'react'
import { City, Theme } from './Types'

export type MapNode = {
  id: City
  name: string
  adj: City[] // list of adjacent nodes
  theme: Theme,
  isBonus?: boolean
  greeting: string
  icon?: string // ionicon

  // Show instead of theme name
  customThemeName?: string
}

export const nodes: MapNode[] = [
  {
    id: 'kuopio',
    name: 'Kuopio',
    adj: ['joensuu', 'jyvaskyla'],
    theme: 'itsetuntemus',
    greeting: 'Tämä on Kuopijjo, Puijon-tornin kotikaupunki. Savoania-ammattikorkeakoulu ja Itä-Suomen yliopiston kampus.'
  },
  {
    id: 'joensuu',
    name: 'Joensuu',
    adj: [],
    theme: 'valintojentekeminen',
    greeting: 'Joensuussa on Itä-Suomen yliopiston kampus ja Karelia-ammattikorkeakoulu.',
    icon: flag
  },
  {
    id: 'oulu',
    name: 'Oulu',
    adj: ['rovaniemi', 'kuopio'],
    theme: 'tyoelamatietous',
    greeting: 'Moro, nää oot tullu just Ouluun. Pohjolan Piilaaksoon! Oulussa on yliopisto ja ammattikorkeakoulu.'
  },
  {
    id: 'jyvaskyla',
    name: 'Jyväskylä',
    adj: ['tampere', 'kuopio', 'vaasa'],
    theme: 'itsetuntemus',
    greeting: 'Terve, olet juuri saapunut Jyväksylään, täällä voi opiskella ammattikorkeakoulussa ja yliopistossa.'
  },
  {
    id: 'vaasa',
    name: 'Vaasa',
    adj: ['jyvaskyla'],
    theme: 'tyoelamatietous',
    greeting: 'Hejssan ja hei, tervetuloa Vaasaan, välkommen till Vasa! Meillä on Vaasan yliopisto ja Vaasan ammattikorkeakoulu. Lähellä Seinäjoella on myös ammattikorkeakoulu.'
  },
  {
    id: 'turku',
    name: 'Turku',
    adj: ['helsinki', 'tampere'],
    theme: 'elamantilanne',
    greeting: 'Hei, tervetuloa Turkuun, linnan ja kirkkojen kaupunkiin! Turun yliopisto ja Turun ammattikorkeakoulu, men också finns det Åbo Akademin.'
  },
  {
    id: 'helsinki',
    name: 'Helsinki',
    adj: ['lappeenranta', 'turku'],
    theme: 'korkeakoulutietous',
    greeting: 'Pääkaupunkiseudulla sijaitsee useita yliopistoja ja ammattikorkeakouluja. Yliopistot ovat Aalto, Helsingin Yliopisto, Taide yliopisto, Svenska Handelhögskolan, lisäksi myös Maanpuolutuskorkeakoulu. Ammattikorkeakouluja ovat Metropolia, Haaga-Helia, Laurea, Centria, Humanistinen Ammattikorkeakoulu, Diakonia-ammattikorkeakoulu, också finns det yrkeshögskolor Arcada och Novia.'
  },
  {
    id: 'lappeenranta',
    name: 'Lappeenranta',
    adj: ['helsinki'],
    theme: 'valintojentekeminen',
    greeting: 'Tervetuloa Lappeenraantaan, täällä sijaitsee Lappeenrannan-Lahden tekninen yliopisto (LUT) ja Lab-ammattikorkeakoulu.'
  },
  {
    id: 'tampere',
    name: 'Tampere',
    adj: ['jyvaskyla', 'turku'],
    theme: 'korkeakoulutietous',
    greeting: 'Moronääs, Tampereella on Tuni eli Tampereen yliopiston ja ammatitkorkeakoulun yhteinen korkeakoulusäätiö.'
  },
  {
    id: 'maarianhamina',
    name: 'Maarianhamina',
    adj: ['turku'],
    theme: 'itsetuntemus',
    isBonus: true,
    greeting: 'Hej, och välkomna på Marienhamn, här har vi Högskolan på Åland.',
    icon: helpOutline,
    customThemeName: 'Lisätehtävä: itsetuntemus'
  },
  {
    id: 'inari',
    name: 'Inari',
    adj: ['rovaniemi'],
    theme: 'korkeakoulutietous',
    isBonus: true,
    greeting: 'Inarissa pääsee nauttimaan Suomalaisen luonnon mystimisimmistä elämyksistä: pirunpellot, revontulet ja tundra.',
    icon: helpOutline,
    customThemeName: 'Lisätehtävä: korkeakoulutietous'
  },
  {
    id: 'rovaniemi',
    name: 'Rovaniemi',
    adj: ['oulu'],
    theme: 'elamantilanne',
    greeting: 'Hei, tervetuloa Rovaniemelle, Jätkänkynttilän sillan kaupunkiin, jossa sijaitsee Rovaniemen ammattikorkeakoulu ja Lapin yliopisto. Vieressä muuten sijaitsee myös Kemi-Tornion ammattikorkeakoulu.'
  }
]

export const NodeContext = createContext(nodes[0])
