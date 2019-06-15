import React, { Component  } from "react";
import './EnterWish.css';
import axios from 'axios';
import Image from '../Image';
import Pulse from 'react-reveal/Pulse'
import {withStore} from '../store'
export class EnterWish extends Component {
  state = {
    hometown: undefined,
    illness: undefined,
    myWish: undefined
  }

  handleSubmit = () => {
    const {name, age} = this.props.store.get(['name', 'age'])
    const {hometown, illness, wish, wishDetails} = this.state
    const child = {name, age, hometown,illness, wish, wishDetails }
   
    axios.post(`https://xyz.com/wish`, child)
      .then(res => {
        console.log('Child wish is updated');
      })

  }

  handleHometownChange = (event) => {
    this.setState({hometown: event.target.value});
  }
  
  handleIllnessChange = (event) => {
    this.setState({illness: event.target.value});
  }

  handleWishChange = (event) => {
    this.setState({wish: event.target.value});
  }

  handleWishDetailsChange = (event) => {
    this.setState({wishDetails: event.target.value});
  }

  render(){
    const name="kid"
    
    return (
        <div className="my-wish">  
        <form className="enter-wish"  onSubmit={this.handleSubmit}>  
          <label>
            {`${name}'s hometown is..`}
            <input type="text" value={this.state.hometown} onChange={this.handleHometownChange}/>
          </label><br/>
          <label>
            {`${name}'s illness..`}
            <input type="text" value={this.state.illness} onChange={this.handleIllnessChange}/>
          </label>
          <br/>
          <label>
            {`${name}'s wish is..`}
            <input type="text" value={this.state.myWish} onChange={this.handleWishChange}/>
          </label>
          <br/>
          <label>
            <div> 
              {`Tell us more about ${name}'s wish..`} 
            </div>
            <textarea rows="6" cols="50" value={this.state.wishDetails} onChange={this.handleWishDetailsChange} />  
          </label>
          <div> 
          <input type="submit" value="Submit" />
          </div>
        </form>

        <Pulse forever={true}><Image className="galaxy-enter-wish" src="logoGalaxy"/></Pulse>
      </div>
    )
  }
}
export default withStore(EnterWish)
