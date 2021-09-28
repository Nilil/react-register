import React from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';

import {Registration} from './pages/Registration';
import {Assistant} from './pages/Assistant';
import {Error} from './pages/Error';
import {Main} from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/assistant" component={Assistant}/>
        <Route exact path='/registration' component= {Registration} />
        <Route path='/404' component= {Error} />
        <Route path='/' component = {Main} />

        <Redirect from='*' to='/404'/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
