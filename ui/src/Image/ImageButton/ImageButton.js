import Image from '../Image'
import React, { Component } from 'react'
import './ImageButton.css'
import {withRouter} from 'react-router-dom'
export class ImageButton extends Component {
  handleClick = () => {
    //route to enter wish page
    console.log('clicked')
    this.props.history.push(this.props.navigateTo)
  }
  render() {
    const { src, txt1, txt2, className } = this.props
    return (
      <div className="image-btn">
        <Image
          className={className}
          src={src}
          alt={`image-btn-${src}`}
          onClick={this.handleClick}
        ></Image>
        <div className="image-button-text1">{txt1}</div>
        <div className="image-button-text2">{txt2}</div>
      </div>
    )
  }
}
export default withRouter(ImageButton)


