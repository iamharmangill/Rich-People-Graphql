import React from 'react'
import { Query } from 'react-apollo'

import { CARS } from '../queries'
import Car from './Car'

import { List, Container } from '@material-ui/core'

const Cars = () => (
  <Query query={CARS}>
    {({ loading, error, data }) => {
      console.log('data', data)
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error: {error.message}</p>
      return (
        <ul>
          {data.cars.map(({ id, year, make, model, price }) => (
            <Container>
              <List>
                <Car
                  key={id}
                  id={id}
                  year={year}
                  make={make}
                  model={model}
                  price={price}
                />
              </List>
            </Container>
          ))}
        </ul>
      )
    }}
  </Query>
)

export default Cars