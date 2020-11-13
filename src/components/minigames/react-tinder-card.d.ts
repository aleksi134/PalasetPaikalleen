declare module 'react-tinder-card' {
    import * as React from 'react'
    import TinderCard from 'react-tinder-card'
    export interface TinderCardProps {
        className: string
        onSwipe: (dir: React.SetStateAction<string | undefined>) => void // (dir: React.SetStateAction<string | undefined>) => swiped(dir, occupation.name, occupation.institute, occupation.theme)
        onCardLeftScreen: () => void
        key: string
    }
    let TinderCard: React.FC<TinderCardProps>
    export default TinderCard
}