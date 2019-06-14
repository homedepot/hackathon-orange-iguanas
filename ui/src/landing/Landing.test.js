import React from 'react'
import Landing from './Landing'
import { shallow } from 'enzyme'

describe('Initial Render', () => {
  it('renders!', () => {
    const wrapper = shallow(<Landing />)

    expect(wrapper.text()).toEqual('Hello!!! <Image />My Name is:And my age isyears old!I wish to:<withRouter(ImageButton) /><withRouter(ImageButton) /><withRouter(ImageButton) /><withRouter(ImageButton) />')
  })
})
