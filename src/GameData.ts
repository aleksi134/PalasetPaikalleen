import { City, Theme } from './Types'

export type MapNode = {
  id: City
  adj: City[] // list of adjacent nodes
  theme: Theme,
  isBonus?: boolean

  // result type
  // isdone fn checker
}

export const nodes: MapNode[] = [
  {
    id: 'kuopio',
    adj: ['joensuu', 'jyvaskyla'],
    theme: 'itsetuntemus',
  },
  {
    id: 'joensuu',
    adj: ['kuopio'],
    theme: 'itsetuntemus',
  },
  {
    id: 'oulu',
    adj: ['rovaniemi', 'kuopio'],
    theme: 'tyoelamatietous',
  },
  {
    id: 'jyvaskyla',
    adj: ['tampere', 'kuopio', 'vaasa'],
    theme: 'tyoelamatietous',
  },
  {
    id: 'vaasa',
    adj: ['jyvaskyla'],
    theme: 'tietojaopiskelusta',
  },
  {
    id: 'turku',
    adj: ['helsinki', 'tampere'],
    theme: 'elamantilanne',
  },
  {
    id: 'helsinki',
    adj: ['lappeenranta', 'turku'],
    theme: 'elamantilanne',
  },
  {
    id: 'lappeenranta',
    adj: ['helsinki'],
    theme: 'valintojentekeminen',
  },
  {
    id: 'rovaniemi',
    adj: ['oulu'],
    theme: 'itsetuntemus',
  },
  {
    id: 'tampere',
    adj: ['jyvaskyla', 'turku'],
    theme: 'elamantilanne',
  },
  {
    id: 'maarianhamina',
    adj: [],
    theme: 'bonus',
    isBonus: true
  }
]
