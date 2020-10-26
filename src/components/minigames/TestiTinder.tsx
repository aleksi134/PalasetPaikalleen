import { IonButton, IonCard, IonCardContent, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import "./Minigame.css";
import TinderModule from "./TinderModule";

interface Props {
    // name: string;
    done: () => void;
}

const MiniGame: React.FC<Props> = ({ done }) => {
    return (
        <div className="container minigame">
            <IonCard>
                <IonItem>
                    <img style={{ width: "60px" }} src="assets/kuunteleva.png" alt="kuunteleva" slot="start" />
                    <IonLabel>Kohti korkeakoulua!</IonLabel>
                </IonItem>

                <IonCardContent>
                    <p>
                        Tässä on ammattikorkeakoulujen ja yliopistojen koulutusalat esittelyssä. Käy kortteja läpi
                        laittaen ne kolmeen korttipinoon (kyllä, ei ja ehkä -pinot) swaippaamalla. Swaippaa oikealle
                        kiinnostavat, ylös tai alas ehkä kiinnostavat ja vasemmalle ei kiinnostavat kortit.
                    </p>
                </IonCardContent>
            </IonCard>

            <TinderModule />

            <IonButton className="done" onClick={done}>
                Merkitse suoritetuksi
            </IonButton>
        </div>
    );
};

export default MiniGame;
