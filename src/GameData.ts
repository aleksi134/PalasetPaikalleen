import { flag, helpOutline } from 'ionicons/icons'
import { createContext } from 'react'
import { City, Theme } from './Types'

export type MapNode = {
  id: City
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
    adj: ['joensuu', 'jyvaskyla'],
    theme: 'itsetuntemus',
    greeting: 'Tervehdys!'
  },
  {
    id: 'joensuu',
    adj: [],
    theme: 'itsetuntemus',
    greeting: 'Tervehdys!',
    icon: flag
  },
  {
    id: 'oulu',
    adj: ['rovaniemi', 'kuopio'],
    theme: 'tyoelamatietous',
    greeting: 'Tervehdys!'
  },
  {
    id: 'jyvaskyla',
    adj: ['tampere', 'kuopio', 'vaasa'],
    theme: 'tyoelamatietous',
    greeting: 'Tervehdys!'
  },
  {
    id: 'vaasa',
    adj: ['jyvaskyla'],
    theme: 'tietojaopiskelusta',
    greeting: 'Tervehdys!'
  },
  {
    id: 'turku',
    adj: ['helsinki', 'tampere'],
    theme: 'elamantilanne',
    greeting: 'Tervehdys!'
  },
  {
    id: 'helsinki',
    adj: ['lappeenranta', 'turku'],
    theme: 'elamantilanne',
    greeting: 'Tervehdys!'
  },
  {
    id: 'lappeenranta',
    adj: ['helsinki'],
    theme: 'valintojentekeminen',
    greeting: 'Tervehdys!'
  },
  {
    id: 'tampere',
    adj: ['jyvaskyla', 'turku'],
    theme: 'tietojaopiskelusta',
    greeting: 'Tervehdys!'
  },
  {
    id: 'maarianhamina',
    adj: ['turku'],
    theme: 'tietojaopiskelusta',
    isBonus: true,
    greeting: 'Tervehdys!',
    icon: helpOutline,
    customThemeName: 'Lisätehtävä: korkeakoulutietous'
  },
  {
    id: 'inari',
    adj: ['rovaniemi'],
    theme: 'itsetuntemus',
    isBonus: true,
    greeting: 'Tervehdys!',
    icon: helpOutline,
    customThemeName: 'Lisätehtävä: itsetuntemus'
  },
  {
    id: 'rovaniemi',
    adj: ['oulu'],
    theme: 'valintojentekeminen',
    greeting: 'Tervehdys!'
  },
]

export const NodeContext = createContext(nodes[0])
