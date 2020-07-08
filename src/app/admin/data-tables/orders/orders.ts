import {Order} from '../../../shared/order';

export const ORDERS: Order[] = [
  {
    id: 1,
    status: 'Shipped',
    client: {
      firstName: 'Tomasz',
      lastName: 'Wiatrowski',
      email: 'tomaszwiatrowski9@gmail.com',
      address: {city: 'Warsaw', streetAndHouseNumber: 's 4', postCode: '00-000'},
    },
    products: [
      {id: 1, name: 'Honey 1', amount: 2, price: 30},
      {id: 2, name: 'Honey 2', amount: 1, price: 33},
      {id: 3, name: 'Honey 3', amount: 3, price: 35},
    ],
    totalPrice: 122,
    payment: {delivery: 'Courier', paymentMethod: 'Credit card', address: {city: 'Warsaw', streetAndHouseNumber: 's 4', postCode: '00-000'}},
    date: '08/06/2020'
  },
  {
    id: 2,
    status: 'New',
    client: {
      firstName: 'John',
      lastName: 'Marston',
      email: 'john@gmail.com',
      address: {city: 'Paris', streetAndHouseNumber: 's 1', postCode: '01-000'},
    },
    products: [
      {id: 1, name: 'Honey 12', amount: 2, price: 30},
      {id: 2, name: 'Honey 1', amount: 1, price: 33},
      {id: 3, name: 'Honey 4', amount: 3, price: 35},
    ],
    totalPrice: 111,
    payment: {delivery: 'Courier', paymentMethod: 'Credit card', address: {city: 'Warsaw', streetAndHouseNumber: 's 4', postCode: '00-000'}},
    date: '06/06/2020'
  },
  {
    id: 3,
    status: 'Delivered',
    client: {
      firstName: 'Arthur',
      lastName: 'Morgan',
      email: 'arthur@gmail.com',
      address: {city: 'New York', streetAndHouseNumber: 'a 4', postCode: '02-000'},
    },
    products: [
      {id: 1, name: 'Honey 1', amount: 2, price: 30},
      {id: 2, name: 'Honey 33', amount: 1, price: 33},
      {id: 3, name: 'Honey 3', amount: 3, price: 35},
    ],
    totalPrice: 99,
    payment: {delivery: 'Courier', paymentMethod: 'Credit card', address: {city: 'Warsaw', streetAndHouseNumber: 's 4', postCode: '00-000'}},
    date: '04/06/2020'
  },
  {
    id: 4,
    status: 'Shipped',
    client: {
      firstName: 'Tomasz',
      lastName: 'Wiatrowski',
      email: 'tomaszwiatrowski9@gmail.com',
      address: {city: 'Warsaw', streetAndHouseNumber: 's 4', postCode: '00-000'},
    },
    products: [
      {id: 1, name: 'Honey 1', amount: 2, price: 30},
      {id: 2, name: 'Honey 2', amount: 1, price: 33},
      {id: 3, name: 'Honey 3', amount: 3, price: 35},
    ],
    totalPrice: 654,
    payment: {delivery: 'Courier', paymentMethod: 'Credit card', address: {city: 'Warsaw', streetAndHouseNumber: 's 4', postCode: '00-000'}},
    date: '08/06/2020'
  },
  {
    id: 5,
    status: 'New',
    client: {
      firstName: 'John',
      lastName: 'Marston',
      email: 'john@gmail.com',
      address: {city: 'Paris', streetAndHouseNumber: 's 1', postCode: '01-000'},
    },
    products: [
      {id: 1, name: 'Honey 12', amount: 2, price: 30},
      {id: 2, name: 'Honey 1', amount: 1, price: 33},
      {id: 3, name: 'Honey 4', amount: 3, price: 35},
    ],
    totalPrice: 21,
    payment: {delivery: 'Courier', paymentMethod: 'Credit card', address: {city: 'Warsaw', streetAndHouseNumber: 's 4', postCode: '00-000'}},
    date: '06/06/2020'
  },
  {
    id: 6,
    status: 'Delivered',
    client: {
      firstName: 'Arthur',
      lastName: 'Morgan',
      email: 'arthur@gmail.com',
      address: {city: 'New York', streetAndHouseNumber: 'a 4', postCode: '02-000'},
    },
    products: [
      {id: 1, name: 'Honey 1', amount: 2, price: 30},
      {id: 2, name: 'Honey 33', amount: 1, price: 33},
      {id: 3, name: 'Honey 3', amount: 3, price: 35},
    ],
    totalPrice: 42,
    payment: {delivery: 'Courier', paymentMethod: 'Credit card', address: {city: 'Warsaw', streetAndHouseNumber: 's 4', postCode: '00-000'}},
    date: '04/06/2020'
  },
];
