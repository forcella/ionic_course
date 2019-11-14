import ApolloClient from 'apollo-boost'
import { LAUNCHES_PAST_QUERY } from './graphql/launches'

const uri = process.env.REACT_APP_API_URL
console.log(uri)
const client = new ApolloClient({ uri })

client
  .query({ query: LAUNCHES_PAST_QUERY })
  .then(result => console.log(result))
  .catch(error => console.log(error))

export { client }
