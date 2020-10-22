import { FC } from 'react'
import Kuopio from './components/minigames/Kuopio'
import Lappeenranta from './components/minigames/Lappeenranta'
import Helsinki from './components/minigames/Helsinki'
import { City } from './Types'

export type MapNode = {
	id: City

  location: {
    x: number // percentage
    y: number // percentage
	};

	game: FC<any>

	// List of adjacent nodes
	adj: City[]
}

export const nodes: MapNode[] = [
  {
    id: "kuopio",
    location: {
      x: 60,
      y: 60,
    },
		game: Kuopio,
		adj: ['lappeenranta']
  },
  {
    id: "lappeenranta",
    location: {
      x: 65,
      y: 81,
    },
    game: Lappeenranta,
		adj: ['kuopio', 'helsinki']
  },
  {
    id: "helsinki",
    location: {
      x: 40,
      y: 87,
		},
		game: Helsinki,
		adj: ['lappeenranta']
  },
]

class GameMap {
	nodes: MapNode[] = []
	adjList: Map<MapNode, MapNode[]> = new Map()
	pawnEl: HTMLElement
	currentLocation?: MapNode

  constructor(pawnEl: HTMLElement) {
		this.pawnEl = pawnEl
	}

  load(): void { }

	persist(): void { }
	
	canMove(): boolean {
		return true
	}

	move(node: MapNode): void {
		this.currentLocation = node
	}

}

export default GameMap