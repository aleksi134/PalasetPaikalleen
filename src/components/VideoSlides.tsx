import { IonButton, IonIcon, IonSlide, IonSlides } from '@ionic/react'
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons'
import React, { useCallback, useRef, useState } from 'react'
import Swiper from 'swiper'
import './VideoSlides.scss'

const slideOpts = {
  allowTouchMove: false
}

interface Props {
  urls: string[]
}

const VideoSlides: React.FC<Props> = ({ urls }) => {
  const [swiper, setSwiper] = useState<Swiper>()
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({})

  const slidesRef = async (ref: HTMLIonSlidesElement) => {
    if (ref) {
      const swpr: Swiper = await ref.getSwiper()
      setSwiper(swpr)
      // Make sure swiper updates
      setTimeout(() => { swpr.update() })
      setTimeout(() => { swpr.update() }, 2000)
    }
  }

  const videoRefCb = useCallback((url: string) => (ref: HTMLVideoElement) => {
    videoRefs.current[url] = ref
  }, [])

  const pauseVideos =  () => {
    Object.values(videoRefs.current).forEach(vid => {
      vid.pause()
      vid.currentTime = 0
    })
  }

  const playCurrent = () => {
    const vids = Object.values(videoRefs.current)
    vids[swiper?.activeIndex || 0].play()
  }

  const onVideoClick = (
    event: React.MouseEvent<HTMLVideoElement, MouseEvent> | React.TouchEvent<HTMLVideoElement>
  ) => {
    event.preventDefault()
    const vid: HTMLVideoElement = event.target as any
    vid.paused ? vid.play() : vid.pause()
  }

  // Just in case
  const onVideoPlay = () => swiper?.update()

  return (
    <div className="video-slides">

      <IonSlides
        pager={true}
        options={slideOpts}
        ref={slidesRef}
        onIonSlideWillChange={pauseVideos}
        onIonSlideDidChange={playCurrent}
      >

        {urls.map((url) => (
          <IonSlide key={url} className="video-wrapper">
            <video controls
              onTouchEnd={onVideoClick}
              onClick={onVideoClick}
              onPlay={onVideoPlay}
              src={url}
              ref={videoRefCb(url)}
            />
          </IonSlide>
        ))}

      </IonSlides>

      { swiper &&
        <div className="video-buttons">
          <IonButton onClick={() => swiper.slidePrev()} className="back">
            <IonIcon slot="icon-only" icon={chevronBackOutline} />
          </IonButton>
          <IonButton onClick={() => swiper.slideNext()} className="forward">
            <IonIcon slot="icon-only" icon={chevronForwardOutline} />
          </IonButton>
        </div>
      }

    </div>
  )
}

export default VideoSlides
