import React, { Fragment } from 'react'
import { Launch, useLaunchesPastQuery } from '../generated/graphql'
import LaunchesItem from './LauchesItem'

const Launches: React.FC = () => {
  const { data, loading, error } = useLaunchesPastQuery({
    variables: { limit: 12, offset: 0 },
  })
  return (
    <Fragment>
      {error && error}
      {loading ? (
        <p>Loading...</p>
      ) : (
        data &&
        data.launchesPast!.map(launch => (
          <LaunchesItem key={launch.id} launch={launch as Launch} />
        ))
      )}
    </Fragment>
  )
}
export default Launches
