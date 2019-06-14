import React, { Component } from 'react'

export default class Landing extends Component {
  state = { 
    name: "",
    age: 1
  };

  handleSubmit () => {
    return true
  }

  render() {
    return (
      <div className="landing"> 
        <div className="landing-title">Hello</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            My Name is:
            <input type="text" value={this.state.name}/>
          </label>
          <label>
            and my age is
            <input type="text" value={this.state.age}/>
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
