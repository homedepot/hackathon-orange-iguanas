import React, { Component } from 'react'
import { images } from '../assets/images'
export default class Image extends Component {
  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }

  render() {
    const { className, style } = this.props
    return (
      <img
        className={className}
        style={style}
        alt={this.props.alt}
        src={images[this.props.src]}
        onClick={this.handleClick}
      />
    )
  }
}
