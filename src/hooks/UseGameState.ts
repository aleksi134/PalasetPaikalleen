import { useEffect, useState } from 'react'
import gameState, { State } from '../GameState'

export const useGameState = () => {
	const [ state, setState ] = useState<State>(gameState.state)

  useEffect(() => {
		const handleStateChange = (state: State) => setState(state)

    gameState.subscribe(handleStateChange)
    return () => gameState.unsubscribe(handleStateChange)
	}, [])

	return state
}