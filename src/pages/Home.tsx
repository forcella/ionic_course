import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem } from '@ionic/react';
import React from 'react';
import { useLaunchesPastQuery } from '../generated/graphql';

const Home: React.FC = () => {
	const { data, loading, error } = useLaunchesPastQuery();
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Ionic APP</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				{error && error}
				{loading ? (
					<p>Loading...</p>
				) : (
					data &&
					data.launchesPast!.map((o) => (
						<IonItem key={o.id}>
							{o.mission_name} | {o.rocket!.rocket_name}
						</IonItem>
					))
				)}
			</IonContent>
		</IonPage>
	);
};

export default Home;
