
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
]

export const THEME_COLORS: Record<Theme, string> = {
  itsetuntemus: '#2686EC',
  tyoelamatietous: '#179976',
  tietojaopiskelusta: '#683E8B',
  elamantilanne: '#F36916',
  valintojentekeminen: '#79CAF2'
}

export const THEME_COLOR_INACTIVE = '#E3E3E3'

export const THEME_NAMES: Record<Theme, string> = {
  itsetuntemus: 'Itsetuntemus',
  tyoelamatietous: 'Työelämätietous',
  tietojaopiskelusta: 'Tietoja opiskelusta',
  elamantilanne: 'Elämäntilanne',
  valintojentekeminen: 'Valintojen tekeminene',
}

export type City = typeof CITIES[number]
export type Theme = typeof THEMES[number]

export type Location = { x: number; y: number }
export type CityRecord<T> = { [key in City]: T }