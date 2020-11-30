
export const CITIES = [
	'rovaniemi',
	'oulu',
	'kuopio',
	'joensuu',
	'lappeenranta',
	'jyvaskyla',
	'tampere',
	'vaasa',
	'turku',
	'helsinki',
  'maarianhamina',
  'inari'
] as const

export const THEMES = [
  'itsetuntemus',
  'tyoelamatietous',
  'tietojaopiskelusta',
  'elamantilanne',
	'valintojentekeminen',
	'bonus'
] as const

export const THEME_COLORS: Record<Theme, string> = {
  itsetuntemus: '#4A69CF',
  tyoelamatietous: '#3AB844',
  tietojaopiskelusta: '#D03A5D',
  elamantilanne: '#D0D341',
  valintojentekeminen: '#A342C9',
  bonus: 'black'
}

export const THEME_COLOR_INACTIVE = '#E3E3E3'

export const THEME_NAMES: Record<Theme, string> = {
  itsetuntemus: 'Itsetuntemus',
  tyoelamatietous: 'Työelämätietous',
  tietojaopiskelusta: 'Korkeakoulutietous',
  elamantilanne: 'Elämäntilanne',
  valintojentekeminen: 'Valintojen tekeminen',
  bonus: 'Lisätehtävät'
}

export type City = typeof CITIES[number]
export type Theme = typeof THEMES[number]

export type Location = { x: number; y: number }
export type CityRecord<T> = { [key in City]: T }

export type Claim = { title: string, explanation: string, isCorrect: boolean }

export const numberNames = [
  'nolla',
  'yksi',
  'kaksi',
  'kolme',
  'neljä',
  'viisi',
  'kuusi',
  'seitsemän',
  'kahdeksan',
  'yhdeksän',
  'kymmenen',
]