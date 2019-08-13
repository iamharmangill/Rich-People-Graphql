import { gql } from 'apollo-server'
import { find, remove } from 'lodash'

const contacts = [
  {
      id: '1',
      firstName: 'Steve',
      lastName: 'Jobs'
    },
    {
      id: '2',
      firstName: 'Elon',
      lastName: 'Musk'
    },
    {
      id: '3',
      firstName: 'Jeff',
      lastName: 'Bezos'
    }
]

const cars = [
  {
    id: '1',
    year: '2019',
    make: 'Toyota',
    model: 'Supra',
    price: '60000',
    ownerId: '1'
  },
  {
    id: '2',
    year: '2003',
    make: 'Honda',
    model: 'Civic',
    price: '30000',
    ownerId: '1'
  },
  {
    id: '3',
    year: '1996',
    make: 'Toyota',
    model: '4Runner',
    price: '40000',
    ownerId: '1'
  },
  {
    id: '4',
    year: '2015',
    make: 'Tesla',
    model: 'Model 3',
    price: '50000',
    ownerId: '2'
  },
  {
    id: '5',
    year: '2013',
    make: 'Tesla',
    model: 'Model S',
    price: '900000',
    ownerId: '2'
  },
  {
    id: '6',
    year: '2014',
    make: 'Tesla',
    model: 'Model X',
    price: '100000',
    ownerId: '2'
  },
  {
    id: '7',
    year: '2014',
    make: 'McLaren ',
    model: 'F1',
    price: '33000000',
    ownerId: '3'
  },
  {
    id: '8',
    year: '2005',
    make: 'Lexus',
    model: 'LFA',
    price: '495000',
    ownerId: '3'
  },
  {
    id: '9',
    year: '2012',
    make: 'Mercedes',
    model: 'GLK',
    price: '800000',
    ownerId: '3'
  }
]

const typeDefs = gql`
  type Contact {
    id: String!
    firstName: String
    lastName: String
  }

  type Query {
    contacts: [Contact]
    cars: [Car]
  }

  type Mutation {
    addContact(id: String!, firstName: String!, lastName: String!): Contact
    updateContact(id: String!, firstName: String!, lastName: String!): Contact
    updateCar(id: String!, year: String!, make: String!, model: String! price: String!): Car
    removeContact(id: String!): Contact
    removeCar(id: String!): Car
  }

  type Car {
    id: String!
    year: String
    make: String
    model: String
    price: String
    ownerId: String
  }
`

const resolvers = {
  Query: {
    contacts: () => contacts,
    cars: () => cars
  },
  Mutation: {
    addContact: (root, args) => {
      const newContact = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName
      }
      contacts.push(newContact)
      return newContact
    },
    updateContact: (root, args) => {
      const contact = find(contacts, { id: args.id })
      if (!contact) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }

      contact.firstName = args.firstName
      contact.lastName = args.lastName
      return contact
    },
    updateCar: (root, args) => {
      const car = find(cars, { id: args.id })
      if (!car) {
        throw new Error(`Couldn't find car with id ${args.id}`)
      }

      car.year = args.year
      car.make = args.make
      car.model = args.model
      car.price = args.price
      return car
    },
    removeContact: (root, args) => {
      const removedContact = find(contacts, { id: args.id })
      if (!removedContact) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }
      remove(contacts, c => { return c.id === removedContact.id })
      return removedContact
    },
    removeCar: (root, args) => {
      const removedCar = find(cars, { id: args.id })
      if (!removedCar) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }
      remove(cars, c => { return c.id === removedCar.id })
      return removedCar
    }
  }
}

export { typeDefs, resolvers }