import React from 'react'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'
import './App.css'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <h1>Rich People and Cars Graphql</h1>
        <AddContact/>
        <Contacts />
      </div>
    </ApolloProvider>
  )
}

export default App
