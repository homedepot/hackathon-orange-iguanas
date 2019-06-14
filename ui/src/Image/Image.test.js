import React from 'react'
import ReactDom from 'react-dom'
import Image from './Image'

it('returns true', () => {
  const div = document.createElement('div')
  ReactDom.render(<Image />, div)
  ReactDom.unmountComponentAtNode(div)
})