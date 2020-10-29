import { City, Theme } from './Types'

export type MapNode = {
  id: City
  adj: City[] // list of adjacent nodes
  theme: Theme,
  isBonus?: boolean
}

export const nodes: MapNode[] = [
  {
    id: 'rovaniemi',
    adj: ['oulu'],
    theme: 'itsetuntemus',
  },
  {
    id: 'oulu',
    adj: ['rovaniemi', 'kuopio'],
    theme: 'itsetuntemus',
  },
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
    id: 'lappeenranta',
    adj: ['helsinki'],
    theme: 'itsetuntemus',
  },
  {
    id: 'jyvaskyla',
    adj: ['tampere', 'kuopio', 'vaasa'],
    theme: 'itsetuntemus',
  },
  {
    id: 'tampere',
    adj: ['jyvaskyla', 'turku'],
    theme: 'itsetuntemus',
  },
  {
    id: 'vaasa',
    adj: ['jyvaskyla'],
    theme: 'itsetuntemus',
  },
  {
    id: 'turku',
    adj: ['helsinki', 'tampere'],
    theme: 'itsetuntemus',
  },
  {
    id: 'helsinki',
    adj: ['lappeenranta', 'turku'],
    theme: 'itsetuntemus',
  },
  {
    id: 'maarianhamina',
    adj: [],
    theme: 'itsetuntemus',
    isBonus: true
  }
]
