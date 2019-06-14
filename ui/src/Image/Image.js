import React, { Component } from 'react'
import { images } from 'assets/images'
import { any, object, string } from 'prop-types'

export default class Image extends Component {
  static propTypes = {
    source: any,
    className: string,
    alt: string,
    style: object,
  }

  handleClick = (event) => {
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
        src={images[this.props.source]}
        onClick={this.handleClick}
      />
    )
  }
}
