import React, { Component } from 'react'
import ImageButton from '../image/ImageButton'

export default class Landing extends Component {
  state = {
    name: '',
    age: 1
  }

  handleSubmit = () => {
    return true
  }
  handleNameChange = () => {
  
  }
  handleAgeChange = () => {
  
  }

  render() {
    return (
      <div className="landing">
        <div className="landing-title">Hello</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            My Name is:
            <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
          </label>
          <label>
            and my age is
            <input type="text" value={this.state.age} onChange={this.handleAgeChange}/>
            years old!
          </label>
        </form>
        <div className="wish-to">I wish to:</div>
        <ImageButton src='goSomewhere' txt="GO Somewhere" />
        <ImageButton src='meetSomeone' txt="MEET Someone"/>
        <ImageButton src='beSomeone' txt="BE Someone"/>
        <ImageButton src='seeSomething' txt="SEE Something"/>
      </div>
    )
  }
}
