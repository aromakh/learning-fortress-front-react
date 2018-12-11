import React, { Component}  from 'react';
import { Switch, Route } from 'react-router-dom'
import CreateBrick from './pages/createBrick';
import BricksPage from './pages/bricks';

const Main = () => (
  <main>
    <Switch>
    <Route exact path='/' component={BricksPage}/>
    <Route exact path='/bricks' component={BricksPage}/>
    <Route exact path='/create-brick' component={CreateBrick}/>
    </Switch>
  </main>
)

export default Main;