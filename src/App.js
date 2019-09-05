import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import store from './store/store';
import Index from './Component/index';

const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route exact path='/' component={ Index } />
        </Switch>
      </Router>
    </Provider>
  )
};

export default App
