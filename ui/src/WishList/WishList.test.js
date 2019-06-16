import React from 'react'
import { shallow } from 'enzyme'
import WishList from './WishList'
import axios from 'axios'

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          firstName: 'Sally',
          age: '12',
          hometown: 'Marietta',
          illness: 'Critical Illness 1',
          wishType: 'GO',
          wishDetail: 'disney world'
        }
      ]
    })
  )
}))

let component
let props
const renderComponent = () => {
  component = shallow(<WishList />)
}
beforeEach(() => {
  renderComponent()
})
it('renders without crashing', () => {
  expect(component).toBeTruthy()
})

it('mounts wishcard', () => {
  expect(component.find('WishCard').length).toEqual(1)
})
