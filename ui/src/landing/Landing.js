import React, { Component } from 'react'
import ImageButton from '../Image/ImageButton'
import Image from '../Image'
import './Landing.css'
import LightSpeed from 'react-reveal/LightSpeed'
import {withStore} from '../store'
export class Landing extends Component {
  componentDidMount() {
    const { store } = this.props
    store.set({ name: '', age: undefined })
  }

  handleSubmit = () => {
    return true
  }
  handleNameChange = event => {
    const { store } = this.props    
    store.set({ name: event.target.value })
  }
  handleAgeChange = event => {
    const { store } = this.props
    store.set({ age: event.target.value })
  }

  render() {
    return (
      <div className="landing">
        <div className="landing-title">
          Hello!!!
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
              // value={this.state.name}
              onChange={this.handleNameChange}
              placeholder="enter your name"
            />
          </label>
          <label>
            And my age is
            <input
              type="text"
              className="text-input"
              // value={this.state.age}
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
export default withStore(Landing)
