
export const CITIES = [
	'helsinki',
	'lappeenranta',
	'kuopio'
] as const

export type City = typeof CITIES[number]
