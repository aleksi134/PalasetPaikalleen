import { MapNode, nodes } from './GameMap'
import { City } from './Types'
import { keyBy } from 'lodash'

// Localstorage game state key
const STATE_KEY = 'PALASET_PAIKALLEEN_GAME'
const STARTING_LOCATION: City = 'kuopio'

export type Result = any

type State = {
  currentLocation: City
  progress: { [key in City]?: any }
}

class GameState {
  state: State
  nodes: Record<City, MapNode>

  constructor(nodes: MapNode[]) {
    this.state = this.loadState()
    this.nodes = keyBy(nodes, n => n.id) as any
  }

  get progress() {
    return this.state.progress
  } 

  get currentLocation() {
    return this.state.currentLocation
  }

  move(node: MapNode) {
    this.state.currentLocation = node.id
    this.persistState()
  }

  save(key: City, result: Result): Result {
    this.progress[key] = result
    this.persistState()
    return result
  }

  load(key: City): Result {
    return this.progress[key]
  }

  isCompleted(node: MapNode): boolean {
    return Boolean(this.progress[node.id])
  }

  canAdvance(node: MapNode): boolean {
    if (node.id === this.currentLocation) {
      return true 
    }

    const ret = this.nodes[node.id].adj
      .some(city => Boolean(this.progress[city]))

    return ret
  }

  private persistState(): void {
    localStorage.setItem(STATE_KEY, JSON.stringify(this.state))
  }

  private loadState(): State {
    const state: State = JSON.parse(localStorage.getItem(STATE_KEY) || '{}')

    state.currentLocation = state.currentLocation || STARTING_LOCATION
    state.progress = state.progress || {}

    return state
  }
}

export default new GameState(nodes)