import React from 'react'
import { Launch } from '../generated/graphql'
import { IonCard, IonHeader } from '@ionic/react'

import styles from './LaunchesItem.module.scss'
import { crop } from '../utils/utils'

interface Props {
  launch: Launch
}

const LaunchesItem: React.FC<Props> = props => {
  const { launch } = props
  return (
    <IonCard button className={styles.card}>
      <IonHeader>
        <img src={launch.links.flickr_images[0]} className={styles.img} />
        <h2 className={styles.cardTitle}>{crop(launch.mission_name, 15)}</h2>
        <p className={styles.cardSubtitle}>{launch.rocket.rocket_name}</p>
      </IonHeader>
    </IonCard>
  )
}

export default LaunchesItem
