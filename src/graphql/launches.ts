import gql from 'graphql-tag'

export const LAUNCHES_PAST_QUERY = gql`
query LaunchesPast($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_local
      links {
        video_link
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }  
`