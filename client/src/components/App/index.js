import React from 'react';
import './styles.css';
import { useRoutes } from 'hookrouter';


import Home from '../../views/home'
import Collection from '../../views/collection'

import { Container } from '@material-ui/core'

const routes = {
  '/': () => <Home/>,
  '/collection/:name': ({ name }) => <Collection name={name} />
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
