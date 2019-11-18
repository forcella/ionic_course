import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'
import { useLaunchesPastQuery, Launch } from '../generated/graphql'
import LaunchesItem from '../components/LauchesItem'
import Launches from '../components/Launches'

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Ionic APP</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <Launches />
    </IonContent>
  </IonPage>
)

export default Home
