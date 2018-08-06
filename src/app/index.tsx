import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { App as TodoApp } from './components/App';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Route path='/' component={TodoApp} />
  </Switch>
));
