import React from 'react';
import './styles.css';
import { useRoutes } from 'hookrouter';


import Home from '../../views/home'
import Trip from '../../views/trip'

import { Container } from '@material-ui/core'

const routes = {
  '/': () => <Home/>,
  '/trip/:name': ({ name }) => <Trip name={name} />
}

function App() {
  const routeResult = useRoutes(routes);
  return (
    <Container>
      {routeResult}
    </Container>
  );
}

export default App;
