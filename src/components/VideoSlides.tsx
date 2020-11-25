import { IonButton, IonIcon, IonSlide, IonSlides } from '@ionic/react'
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons'
import React, { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import './VideoSlides.scss'

const slideOpts = {
  allowTouchMove: false
}

interface Props {
  urls: string[]
}

const VideoSlides: React.FC<Props> = ({ urls }) => {
  const [swiper, setSwiper] = useState<any>(null)
  const videoRefs = useRef<HTMLVideoElement[]>([])

  const slidesRef = useCallback(async (ref: HTMLIonSlidesElement) => {
    if (ref) {
      setSwiper(await ref.getSwiper())
      swiper?.update()
    }
  }, [])

  const videoRefCb = useCallback((ref) => {
    videoRefs.current.push(ref)
  }, [])

  const next = () => {
    videoRefs.current.forEach(vid => {
      vid.pause()
      vid.currentTime = 0
    })

    swiper?.slideNext()
  }
  const prev = () => {
    swiper?.slidePrev()
  }

  const onVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
    const vid: HTMLVideoElement = event.target as any
    console.log('videoclick', vid)
    vid.paused ? vid.play() : vid.pause()
  }

  return (
    <div className="video-slides">

      <IonSlides pager={true} options={slideOpts} ref={slidesRef}>
        {urls.map((url, index) => (
          <IonSlide key={url} className="video-wrapper">
            <video onClick={onVideoClick} controls src={url} ref={videoRefCb} />
          </IonSlide>
        ))}
      </IonSlides>

      <div className="video-buttons">
        <IonButton onClick={prev} className="back">
          <IonIcon slot="icon-only" icon={chevronBackOutline} />
        </IonButton>
        <IonButton onClick={next} className="forward">
          <IonIcon slot="icon-only" icon={chevronForwardOutline} />
        </IonButton>
      </div>

    </div>
  )
}

export default VideoSlides
