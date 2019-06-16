import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from '../login'
import Landing from '../landing'
import WishList from '../WishList'
import WatchAuth from '../auth/WatchAuth'
import EnterWish from '../enterwish'
import history from '../history'
import {createStore} from '../store'


export const App = () => {
  return (
    <Router history={history}>
      <WatchAuth>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/wish-list" component={WishList} />
          <Route path="/enter-wish" component={EnterWish}/>
        </Switch>
      </WatchAuth>
    </Router>
  )
}

export default createStore(App)
