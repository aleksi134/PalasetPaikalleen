import { IonIcon, IonItem, IonLabel, IonList } from '@ionic/react'
import { ellipse } from 'ionicons/icons'
import React from 'react'
import { THEME_COLORS } from '../Types'

interface Props { }

const ColorInstructions: React.FC<Props> = () => {
  return (
    <IonList lines="none" className="color-instructions ion-padding-bottom">
      <IonItem>
        <IonLabel>Itsetuntemus</IonLabel>
        <IonIcon slot="end" icon={ellipse} style={{ color: THEME_COLORS.itsetuntemus }} />
      </IonItem>
      <IonItem>
        <IonLabel>Työelämätietous</IonLabel>
        <IonIcon slot="end" icon={ellipse} style={{ color: THEME_COLORS.tyoelamatietous }} />
      </IonItem>
      <IonItem>
        <IonLabel>Korkeakoulutietous</IonLabel>
        <IonIcon slot="end" icon={ellipse} style={{ color: THEME_COLORS.korkeakoulutietous }} />
      </IonItem>
      <IonItem>
        <IonLabel>Elämäntilanne</IonLabel>
        <IonIcon slot="end" icon={ellipse} style={{ color: THEME_COLORS.elamantilanne }} />
      </IonItem>
      <IonItem>
        <IonLabel>Valintojen tekeminen</IonLabel>
        <IonIcon slot="end" icon={ellipse} style={{ color: THEME_COLORS.valintojentekeminen }} />
      </IonItem>
    </IonList>
  )
}

export default ColorInstructions
