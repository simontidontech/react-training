import { useEffect, useState } from 'react';
import './App.css';
import { baseUrl } from './common/constants';
import axios from 'axios';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <NavBar heading="React Training" />
      <SearchBar />
    </div>
  );
}

export default App;
