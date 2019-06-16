import React from 'react'
import {Landing} from './Landing'
import { shallow } from 'enzyme'

let props
let component
const renderComponent = () => {
   component = shallow(<Landing {...props}/>)
}
describe('Initial Render', () => {
  beforeEach(() => {
    props = {
      store:{
        set: jest.fn()
      }
    }
    renderComponent()
  })

  it('renders page with right number of elements', () => {
    const imagebuttons = component.find('withRouter(ImageButton)')
    const inputText = component.find('input')
    expect(imagebuttons.length).toEqual(4)
    expect(inputText.length).toEqual(2)
    // expect(wrapper.text())
    // .toEqual('Hello!!!<LightSpeed />My Name is:And my age isyears old!I wish to:<withRouter(ImageButton) /><withRouter(ImageButton) /><withRouter(ImageButton) /><withRouter(ImageButton) />')
  })

  it('calls handle change when name input is changed', () => {
      const event = {
        target: {
          value: "Joe"
        }
      }
      const instance = component.instance()
      const spy = jest.spyOn(instance, 'handleNameChange')
      instance.forceUpdate()
      const inputs = component.find('input')
      const nameInput = inputs.at(0)
      nameInput.simulate('change', event)
      expect(spy).toHaveBeenCalled()
  });
  it('calls handle change when name input is changed', () => {
      const event = {
        target: {
          value: 5
        }
      }
      const instance = component.instance()
      const spy = jest.spyOn(instance, 'handleAgeChange')
      instance.forceUpdate()
      const inputs = component.find('input')
      const ageInput = inputs.at(1)
      ageInput.simulate('change', event)
      expect(spy).toHaveBeenCalled()

  })
})
