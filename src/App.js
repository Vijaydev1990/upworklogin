import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signin from '../src/screens/signin';
import Signup from '../src/screens/signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Signin}></Route>
        <Route exact path='/login' component={Signin}></Route>
        <Route exact path='/signup' component={Signup}></Route>
      </Switch>
    </Router>
  );
}

export default App;
