
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
	  'valintojentekeminen'
]

export type City = typeof CITIES[number]
export type Theme = typeof THEMES[number]

export type Location = { x: number; y: number }

export type CityRecord<T> = { [key in City]: T }