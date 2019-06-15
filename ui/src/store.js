import React, { Component, createContext } from 'react'
import {pick} from 'lodash'
const { Provider, Consumer } = createContext()
const createStore = WrappedComponent => {
  return class extends Component {
    state = {
      get: keySubset => {
        return pick(this.state,keySubset)
      },
      set: (moreState) => {
        const state = {
          ...this.state,
          ...moreState
        }
        this.setState(state)
      },
      remove: key => {
        const state = this.state
        delete state[key]
        this.setState(state)
      }
    }
    render() {
      return (
        <Provider value={this.state}>
          <WrappedComponent  />
        </Provider>
      )
    }
  }
}

const withStore = WrappedComponent => {
  return class extends Component {
    render() {
      return <Consumer>
        {context => <WrappedComponent store={context}/>}
      </Consumer>
    }
  }
}

export {createStore, withStore}
