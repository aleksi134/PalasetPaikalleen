import { RefObject, useEffect } from 'react'

type Listener = (ev: TransitionEvent) => void

export const useTransitionEnd = <T extends HTMLElement>(
  ref: RefObject<T>,
  prop: string,
  callback: Listener,
) => {
  useEffect(() => {
    const element = ref.current

    const listener: Listener = (ev) => {
      if (ev.propertyName === prop) {
        callback(ev)
      }
    }

    if (element) {
      console.log('add listener')
      element.addEventListener('transitionend', listener)
    }

    return () => element?.removeEventListener('transitionend', listener)
  }, [ref, prop, callback])
}