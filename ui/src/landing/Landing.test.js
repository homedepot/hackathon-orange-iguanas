import React from 'react'
import Landing from './Landing'
import { shallow } from 'enzyme'

describe('Initial Render', () => {
  it('renders!', () => {
    const wrapper = shallow(<Landing />)

    expect(wrapper.text()).toEqual('HelloMy Name is:and my age isyears old!I wish to:<ImageButton /><ImageButton /><ImageButton /><ImageButton />')
  })
})
