import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from '../login'
import Landing from '../landing'
import WishList from '../WishList'
import WatchAuth from '../auth/WatchAuth'
import EnterWish from '../enterwish'
import history from '../history';

function App() {
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

export default App
