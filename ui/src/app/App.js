import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from '../login/Login'
import Landing from '../landing/Landing'
import WishList from '../wishList/WishList'
import WatchAuth from '../auth/WatchAuth'

function App() {
  return (
    <Router>
      <WatchAuth>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/wish-list" component={WishList} />
          <Route exact path="/enter-wish" component={EnterWish}/>
        </Switch>
      </WatchAuth>
    </Router>
  )
}

export default App
