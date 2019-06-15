import React from 'react'
import {Landing} from './Landing'
import { shallow } from 'enzyme'

let props

describe('Initial Render', () => {
  beforeEach(() => {
    props = {
      store:{
        set: jest.fn()
      }
    }
  })
  it('renders!', () => {
    const wrapper = shallow(<Landing {...props}/>)

    expect(wrapper.text())
    .toEqual('Hello!!!<LightSpeed />My Name is:And my age isyears old!I wish to:<withRouter(ImageButton) /><withRouter(ImageButton) /><withRouter(ImageButton) /><withRouter(ImageButton) />')
  })
})
