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
    greeting: 'Tervehdys!',
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
    greeting: 'Tervehdys!'
  },
  {
    id: 'turku',
    name: 'Turku',
    adj: ['helsinki', 'tampere'],
    theme: 'elamantilanne',
    greeting: 'Tervehdys!'
  },
  {
    id: 'helsinki',
    name: 'Helsinki',
    adj: ['lappeenranta', 'turku'],
    theme: 'korkeakoulutietous',
    greeting: 'Tervehdys!'
  },
  {
    id: 'lappeenranta',
    name: 'Lappeenranta',
    adj: ['helsinki'],
    theme: 'valintojentekeminen',
    greeting: 'Tervehdys!'
  },
  {
    id: 'tampere',
    name: 'Tampere',
    adj: ['jyvaskyla', 'turku'],
    theme: 'korkeakoulutietous',
    greeting: 'Tervehdys!'
  },
  {
    id: 'maarianhamina',
    name: 'Maarianhamina',
    adj: ['turku'],
    theme: 'itsetuntemus',
    isBonus: true,
    greeting: 'Tervehdys!',
    icon: helpOutline,
    customThemeName: 'Lisätehtävä: korkeakoulutietous'
  },
  {
    id: 'inari',
    name: 'Inari',
    adj: ['rovaniemi'],
    theme: 'korkeakoulutietous',
    isBonus: true,
    greeting: 'Tervehdys!',
    icon: helpOutline,
    customThemeName: 'Lisätehtävä: itsetuntemus'
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
