import React from 'react';
import './App.css';
import { Router } from '@reach/router'

import Home from '../../views/home'
import Trip from '../../views/trip'

import {Container} from '@material-ui/core'


function App() {
  return (
    <Container>
      <Router>
        <Home path='/' />
        <Trip path='/trip' />
      </Router>
    </Container>
  );
}

export default App;
