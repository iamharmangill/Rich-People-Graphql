import React from 'react'
import { Mutation } from 'react-apollo'
import { Button } from '@material-ui/core'
import { CARS, REMOVE_CAR } from '../queries'
import { filter } from 'lodash'

const RemoveCar = ({ id, year, make, model, price, ownerId }) => {
  return (
    <Mutation
      mutation={REMOVE_CAR}
      update={(store, { data: { removeCar } }) => {
        const { cars} = store.readQuery({ query: CARS })
        store.writeQuery({
          query: CARS,
          data: { cars: filter(cars, c => { return c.id !== removeCar.id }) }
        })
      }}
    >
      {removeCar => (
        <Button onClick={e => {
          e.preventDefault()
          removeCar({
            variables: {
              id
            },
            optimisticResponse: {
              __typename: 'Mutation',
              removeContact: {
                __typename: 'Car',
                id,
                year,
                make,
                model,
                price
              }
            }
          })
        }}
          variant='contained'
          color='secondary'
          style={{ margin: '5px' }}
        >
          Delete
        </Button>
      )}
    </Mutation>
  )
}

export default RemoveCar