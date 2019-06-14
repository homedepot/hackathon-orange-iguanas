import React from 'react'
import ReactDom from 'react-dom'
import {ImageButton} from './ImageButton'

it('returns true', () => {
  const div = document.createElement('div')
  ReactDom.render(<ImageButton />, div)
  ReactDom.unmountComponentAtNode(div)
})