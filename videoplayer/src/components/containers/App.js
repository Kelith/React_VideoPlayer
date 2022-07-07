import React from 'react';
import Player from './Player';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GloablStyle from '../styles/GlobalStyle';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Player/>} />
      <Route exact path="/:activeVideo" element={<Player/>} />
    </Routes>
    <GloablStyle />
  </BrowserRouter>
)

export default App;