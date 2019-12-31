import React from 'react';
import './App.css';


import {Container} from '@material-ui/core'

import ThumbnailGrid from '../ThumbnailGrid'

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <div style={{height:'150px'}}>My Travel PhotoBlog</div>
        </header>
        <main className='grid-wrapper'>
          <ThumbnailGrid/>
        </main>
      </div>
    </Container>
  );
}

export default App;
