import React from 'react'
import ReactDom from 'react-dom'
import {EnterWish} from './EnterWish'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<EnterWish />, div)
  ReactDom.unmountComponentAtNode(div)
})