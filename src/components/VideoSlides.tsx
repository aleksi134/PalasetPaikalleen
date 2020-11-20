import { IonSlide, IonSlides } from '@ionic/react'
import { videocamOff } from 'ionicons/icons'
import React, { useRef } from 'react'
import './VideoSlides.scss'

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 1,
  // speed: 400
}

interface Props {
  urls: string[]
}

const VideoSlides: React.FC<Props> = ({ urls }) => {

  return (
    <div className="video-slides">
      <IonSlides pager={true} options={slideOpts}>
        {urls.map(url => (
          <IonSlide key={url}>
            <video controls src={url}></video>
          </IonSlide>
        ))}
      </IonSlides>
    </div>
  )
}

export default VideoSlides
