import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
} from '@ionic/react'
import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { LAUNCHES_PAST_QUERY } from '../graphql/launches'

const Home: React.FC = () => {
  const { data, loading, error } = useQuery(LAUNCHES_PAST_QUERY)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic APP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.launchesPast.map((o: any) => (
            <IonItem key={o.id}>
              {o.mission_name} | {o.rocket.rocket_name}
            </IonItem>
          ))
        )}
      </IonContent>
    </IonPage>
  )
}

export default Home
