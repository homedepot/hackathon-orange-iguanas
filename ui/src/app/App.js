import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from '../login'
import Landing from '../landing'
import WishList from '../wishList'
import WatchAuth from '../auth/WatchAuth'
import EnterWish from '../enterWish'

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
