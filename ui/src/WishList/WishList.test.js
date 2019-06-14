import React from 'react'
import ReactDom from 'react-dom'
import WishList from './WishList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<WishList />, div)
  ReactDom.unmountComponentAtNode(div)
})