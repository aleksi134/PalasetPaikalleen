import { City, CityRecord, Location } from '../Types'

export default function (node: SVGSVGElement, cities: readonly City[]): CityRecord<Location> {
  const [, , width, height] = node.getAttribute('viewBox')!.split(' ').map(parseFloat)

  return cities.reduce<any>((acc, city) => {
    const cityNode = node.querySelector(`.${city}`)!
    const cx = cityNode.getAttribute('cx')!
    const cy = cityNode.getAttribute('cy')!

    const loc: Location = {
      x: (parseFloat(cx) / width) * 100,
      y: (parseFloat(cy) / height) * 100,
    }

    return { ...acc, [city]: loc }
  }, {})
}
