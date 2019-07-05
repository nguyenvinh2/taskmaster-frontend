import React, {Fragment} from 'react';
import { Route } from 'react-router';
import { Home } from './components/home.js';
import './style.css';

function App() {
  return (
    <Fragment>
      <Route exact path='/' component={Home} />
    </Fragment>
  );
}

export default App;
