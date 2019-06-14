import React, { Component } from 'react'
import ImageButton from '../Image/ImageButton'
import Image from '../Image'
import './Landing.css'
import Spin from 'react-reveal/Spin'
import LightSpeed from 'react-reveal/LightSpeed'

export default class Landing extends Component {
  state = {
    name: '',
    age: undefined,
    animation: {
      d: 'M60,10L60,90L140,90L140,10Z',
      yoyo: true,
      repeat: -1,
      duration: 1000
    }
  }

  handleSubmit = () => {
    return true
  }
  handleNameChange = () => {}
  handleAgeChange = () => {}

  render() {
    return (
      <div className="landing">
        <div className="landing-title">
          Hello!!!{' '}
          <LightSpeed forever={true}>

              <Image className="galaxy-image" src="logoGalaxy" />

          </LightSpeed>
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            My Name is:
            <input
              className="text-input"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              placeholder="enter your name"
            />
          </label>
          <label>
            And my age is
            <input
              type="text"
              className="text-input"
              value={this.state.age}
              onChange={this.handleAgeChange}
              placeholder="your age"
            />
            years old!
          </label>
        </form>
        <div className="wish-to">I wish to:</div>
        <div className="image-buttons">
          <ImageButton
            src="goSomewhere"
            txt1="GO"
            txt2="Somewhere"
            navigateTo="/enter-wish"
          />
          <ImageButton
            src="meetSomeone"
            txt1="MEET"
            txt2="Someone"
            navigateTo="/enter-wish"
          />
          <ImageButton
            src="beSomeone"
            txt1="BE"
            txt2="Someone"
            navigateTo="/enter-wish"
          />
          <ImageButton
            src="seeSomething"
            txt1="SEE"
            txt2="Something"
            navigateTo="/enter-wish"
          />
        </div>
      </div>
    )
  }
}
