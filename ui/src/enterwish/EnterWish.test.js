import React from 'react'
import {EnterWish} from './EnterWish'
import {shallow} from 'enzyme'
import axios from 'axios'

let component 
let props

jest.mock('axios', () => ({
  post: jest.fn( () =>  Promise.resolve())
}))

const renderComponent = () => {
  component = shallow(<EnterWish {...props} />)
}
beforeEach(() => {
  props = {
    store: {
      get: jest.fn( () => ({
        name: "", 
        age: undefined
      })),
      set: jest.fn()
    }
  }
  renderComponent()
})
it('renders without crashing', () => {
  expect(component).toBeTruthy()
})
describe('#handleChange', () => {
  let event
  let instance
  let inputs
  beforeEach(() => {
    event = {target: { value: undefined}}    
    instance = component.instance()
  })
  it('calls home town change', () => {
    event.target.value = 'Atlanta'
    const spy = jest.spyOn(instance, 'handleHometownChange')
    instance.forceUpdate()
    inputs = component.find('input')
    const homeTownInput = inputs.at(0)
    homeTownInput.simulate('change', event)
    expect(spy).toHaveBeenCalled()
  });
  it('calls illness field change', () => {
    event.target.value = 'dyslexia'
    const spy = jest.spyOn(instance, 'handleIllnessChange')
    instance.forceUpdate()
    inputs = component.find('input')
    const illnesInput = inputs.at(1)
    illnesInput.simulate('change', event)
    expect(spy).toHaveBeenCalled()
  });
  it('calls wish field change', () => {
    event.target.value = 'Go Somewhere'
    const spy = jest.spyOn(instance, 'handleWishChange')
    instance.forceUpdate()
    inputs = component.find('input')
    const wishInput = inputs.at(2)
    wishInput.simulate('change', event)
    expect(spy).toHaveBeenCalled()
  });

  it('calls wish details change', () => {
    event.target.value = 'go to disney'
    const spy = jest.spyOn(instance, 'handleWishDetailsChange')
    instance.forceUpdate()
    const wishDetails = component.find('textarea')
    wishDetails.simulate('change', event)
    expect(spy).toHaveBeenCalled()
  });

});

it('causes animation on galaxy image', () => {
  const animatedElement = component.find('Pulse')
  expect(animatedElement).toBeTruthy()
  expect(animatedElement.find('.galaxy-enter-wish')).toBeTruthy()
});

it('renders form with right number input and texarea', () => {
    expect(component.find('form')).toBeTruthy()
    expect(component.find('input').length).toEqual(4)
    expect(component.find('textarea').length).toEqual(1)
});

describe('#formSubmit', () => {
  it('post request being called', () => {
    const form = component.find('form')
    form.simulate('submit')
    expect(axios.post).toHaveBeenCalled()
  });
});