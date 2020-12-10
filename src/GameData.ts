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
    greeting: 'Tämä on Kuopijjo, Puijon tornin kotikaupunki. Savonia-ammattikorkeakoulu ja Itä-Suomen yliopiston kampus ovat täällä. Lähellä sijaitsee myös Kajaanin ammattikorkeakoulu.'
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
    greeting: 'Moro, nää oot tullu just Ouluun. Pohjolan Piilaaksoon, jossa sijaitsee Oulun Ammattikorkeakoulu ja Oulun yliopisto.'
  },
  {
    id: 'jyvaskyla',
    name: 'Jyväskylä',
    adj: ['tampere', 'kuopio', 'vaasa'],
    theme: 'itsetuntemus',
    greeting: 'Terve, olet juuri saapunut Jyväskylään, täällä voi opiskella Jyväskylän ammattikorkeakoulussa ja Jyväskylän yliopistossa.'
  },
  {
    id: 'vaasa',
    name: 'Vaasa',
    adj: ['jyvaskyla'],
    theme: 'tyoelamatietous',
    greeting: 'Hejssan ja hei, tervetuloa Vaasaan, välkommen till Vasa. Täällä sijaitsee Vaasan yliopisto ja Vaasan ammattikorkeakoulu. Lähellä on myös Seinäjoen ammattikorkeakoulu.'
  },
  {
    id: 'turku',
    name: 'Turku',
    adj: ['helsinki', 'tampere'],
    theme: 'elamantilanne',
    greeting: 'Hei, tervetuloa Turkuun, linnan ja kirkkojen kaupunkiin, jossa on Turun ammattikorkeakoulu ja Turun yliopisto, men också finns det Åbo Akademin. Lähellä on myös Satakunnan ammattikorkeakoulu.'
  },
  {
    id: 'helsinki',
    name: 'Helsinki',
    adj: ['lappeenranta', 'turku'],
    theme: 'korkeakoulutietous',
    greeting: 'Pääkaupunkiseudulla sijaitsee useita yliopistoja ja ammattikorkeakouluja. Yliopistot ovat Aalto-yliopisto, Helsingin yliopisto, Taideyliopisto ja Svenska handelhögskolan, joiden lisäksi myös Maanpuolutuskorkeakoulu on täällä. Ammattikorkeakouluja ovat Diakonia-ammattikorkeakoulu, HAAGA-HELIA ammattikorkeakoulu, Humanistinen ammattikorkeakoulu, Laurea-ammattikorkeakoulu ja Metropolia Ammattikorkeakoulu. Också finns det Yrkeshögskolan Arcada och Yrkeshögskolan Novia.'
  },
  {
    id: 'lappeenranta',
    name: 'Lappeenranta',
    adj: ['helsinki'],
    theme: 'valintojentekeminen',
    greeting: 'Tervetuloa Lappeenrantaan, täällä sijaitsee Lappeenrannan-Lahden teknillinen yliopisto (LUT) ja Lab-ammattikorkeakoulu. Lähellä on myös Kaakkois-Suomen ammattikorkeakoulu.'
  },
  {
    id: 'tampere',
    name: 'Tampere',
    adj: ['jyvaskyla', 'turku'],
    theme: 'korkeakoulutietous',
    greeting: 'Moronääs, Tampereella on Tuni eli Tampereen yliopisto ja Tampereen ammattikorkeakoulu sekä Poliisiammattikorkeakoulu. Lähellä sijaitsee myös Hämeen ammattikorkeakoulu.'
  },
  {
    id: 'maarianhamina',
    name: 'Maarianhamina',
    adj: ['turku'],
    theme: 'itsetuntemus',
    isBonus: true,
    greeting: 'Hej, och välkommen till Marienhamn, här har vi Högskolan på Åland.',
    icon: helpOutline,
    customThemeName: 'Lisätehtävä: itsetuntemus'
  },
  {
    id: 'inari',
    name: 'Inari',
    adj: ['rovaniemi'],
    theme: 'korkeakoulutietous',
    isBonus: true,
    greeting: 'Inarissa pääsee nauttimaan Suomalaisen luonnon mystisimmistä elämyksistä: pirunpelloista, revontulista ja tundrasta. Tänne on hyvä tulla pohtimaan omaa tulevaisuuttaan, vaikka vain mielikuvamatkalle.',
    icon: helpOutline,
    customThemeName: 'Lisätehtävä: korkeakoulutietous'
  },
  {
    id: 'rovaniemi',
    name: 'Rovaniemi',
    adj: ['oulu'],
    theme: 'elamantilanne',
    greeting: 'Hei, tervetuloa Rovaniemelle, Jätkänkynttilän sillan kaupunkiin, jossa sijaitsee Lapin ammattikorkeakoulu ja Lapin yliopisto.'
  }
]

export const NodeContext = createContext(nodes[0])
