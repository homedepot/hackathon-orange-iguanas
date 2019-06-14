import Image from '../Image'
import React, {Component} from 'react'

export default class ImageButton extends Component{
  handleClick = () => {
    //route to enter wish page
    this.history.push(this.props.navigateTo)
  }
  render(){
    const {src, txt} = this.props
    return <div className="image-button">
      <Image src={src} alt={`image-btn-${src}`}></Image>
      <div className="image-button-text">{txt}</div>
    </div>
  }
}