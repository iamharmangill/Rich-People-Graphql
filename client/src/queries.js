import { gql } from 'apollo-boost'

export const GET_CONTACTS = gql`
  {
    contacts {
      id
      firstName
      lastName
    }
  }
`

export const ADD_CONTACT = gql`
  mutation AddContact($id: String!, $firstName: String!, $lastName: String!) {
    addContact(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const CARS = gql`
  {
    cars {
      id
      year
      make
      model
      price
      ownerId
    }
  }
`

export const UPDATE_CONTACT = gql`
  mutation UpdateContact($id: String!, $firstName: String!, $lastName: String!) {
    updateContact(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const UPDATE_CAR = gql`
  mutation UpdateCar($id: String!, $make: String!, $model: String!) {
    updateCar(id: $id, make: $make, model: $model) {
      id
      make
      model
    }
  }
`

export const REMOVE_CONTACT = gql`
  mutation RemoveContact($id: String!) {
    removeContact(id: $id) {
      id
      firstName
      lastName
    }
  }
`

export const REMOVE_CAR = gql`
  mutation RemoveCar($id: String!) {
    removeCar(id: $id) {
      id
      year
      make
      model
      price
      ownerId
    }
  }
`