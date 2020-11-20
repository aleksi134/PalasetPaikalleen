
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
  tietojaopiskelusta: 'Tietoja opiskelusta',
  elamantilanne: 'Elämäntilanne',
  valintojentekeminen: 'Valintojen tekeminene',
  bonus: 'Bonus'
}

export type City = typeof CITIES[number]
export type Theme = typeof THEMES[number]

export type Location = { x: number; y: number }
export type CityRecord<T> = { [key in City]: T }

export type Claim = { title: string, explanation: string, isCorrect: boolean }