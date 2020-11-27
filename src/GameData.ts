import { createContext } from 'react'
import { City, Theme } from './Types'

export type MapNode = {
  id: City
  adj: City[] // list of adjacent nodes
  theme: Theme,
  isBonus?: boolean
  greeting: string

  // result type
  // isdone fn checker
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
    greeting: 'Tervehdys!'
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
    theme: 'bonus',
    isBonus: true,
    greeting: 'Tervehdys!'
  },
  {
    id: 'rovaniemi',
    adj: ['oulu'],
    theme: 'valintojentekeminen',
    greeting: 'Tervehdys!'
  },
]

export const NodeContext = createContext(nodes[0])
