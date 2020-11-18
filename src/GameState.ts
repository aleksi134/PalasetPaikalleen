import { MapNode, nodes } from './GameData'
import { City, CityRecord, Theme, THEMES } from './Types'
import { keyBy } from 'lodash'

// Localstorage game state key
const STATE_KEY = 'PALASET_PAIKALLEEN_GAME'
const STARTING_LOCATION: City = 'kuopio'

export type Result = any

export type State = {
  currentLocation: City
  progress: CityRecord<any>
}

type Subscription = (state: State) => void

class GameState {
  state: State
  nodes: Record<City, MapNode>

  subscriptions: Subscription[] = []

  constructor(nodes: MapNode[]) {
    this.state = this.loadState()
    this.nodes = keyBy(nodes, (n) => n.id) as any
  }

  get progress() {
    return this.state.progress
  }

  get currentLocation(): City {
    return this.state.currentLocation
  }

  get currentNode(): MapNode {
    return this.nodes[this.currentLocation]
  }

  get themeProgress(): Record<Theme, number> {
    const nodes = Object.values(this.nodes)

    return THEMES.reduce((acc, theme) => {
      const count = nodes.filter((n) => n.theme === theme && this.isCompleted(n)).length
      return { ...acc, [theme]: count }
    }, {}) as any
  }

  subscribe(fn: Subscription): void {
    this.subscriptions.push(fn)
    fn(this.state)
  }

  unsubscribe(fn: Subscription) {
    const index = this.subscriptions.indexOf(fn)
    if (index > -1) {
      this.subscriptions.slice(index, 1)
    }
  }

  move(node: MapNode) {
    this.state.currentLocation = node.id
    this.stateChanged()
  }

  save(key: City, result: Result): Result {
    this.progress[key] = result
    this.stateChanged()
    return result
  }

  load(key: City): Result {
    return this.progress[key]
  }

  isCompleted(node: MapNode): boolean {
    return Boolean(this.progress[node.id])
  }

  canAdvance(node: MapNode): boolean {
    if (node.id === this.currentLocation) return true

    if (node.isBonus)
      return Object.values(this.nodes)
        .filter((n) => !n.isBonus)
        .every((node) => Boolean(this.progress[node.id]))

    return this.nodes[node.id].adj.some((city) => Boolean(this.progress[city]))
  }

  private stateChanged(): void {
    this.subscriptions.forEach((sub) => sub(this.state))
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