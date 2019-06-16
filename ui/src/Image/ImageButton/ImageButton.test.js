import React from 'react'
import {ImageButton} from './ImageButton'
import {shallow} from 'enzyme'

let component
let props

const renderComponent = () => {
  component = shallow(<ImageButton {...props} />)
}

beforeEach(() => {
  props = {
    history: {
      push: jest.fn()
    }
  }
  renderComponent()
})

it('renders image button', () => {
  expect(component.find('.image-btn').length).toEqual(1)
})

it('renders animated image', () => {
  const animatedElement = component.find('Tada')
   expect(animatedElement.length).toEqual(1)
   expect(animatedElement.find('Image')).toBeTruthy()
})
it('calls handleClick when image is clicked', () => {
  const instance = component.instance()
  const spy = jest.spyOn(instance, 'handleClick')
  instance.forceUpdate()
  const image = component.find('Image')
  image.simulate('click')
  expect(spy).toHaveBeenCalled()
})