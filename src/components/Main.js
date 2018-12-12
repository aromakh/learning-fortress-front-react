import React  from 'react';
import { Switch, Route } from 'react-router-dom'

import BricksPage from './pages/bricks';
import CreateBrickPage from './pages/createBrick';
import EditBrickPage from './pages/editBrick';
import CreateQuestionPage from './pages/createQuestion';

const Main = () => (
  <main>
    <Switch>
    <Route exact path='/' component={BricksPage}/>
    <Route exact path='/brick' component={BricksPage}/>
    <Route exact path='/create-brick' component={CreateBrickPage}/>
    <Route exact path='/brick/:brickId' component={EditBrickPage}/>
    <Route exact path='/brick/:brickId/question' component={CreateQuestionPage}/>
    </Switch>
  </main>
)

export default Main;