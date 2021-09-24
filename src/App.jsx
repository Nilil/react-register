import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Registration} from './pages/Registration';
import {Error} from './pages/Error';
import {Main} from './pages/Main'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/registration' component= {Registration} />
        <Route path='/error' component= {Error} />
        <Route path='/' component = {Main} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
