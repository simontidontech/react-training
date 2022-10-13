import { useEffect, useState } from 'react';
import './App.css';
import { baseUrl } from './common/constants';
import axios from 'axios';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PostBook from './components/PostBook';

function App() {
  return (
    <div className="App">
      <NavBar heading="React Training" />
      <SearchBar />
      <hr />
      <PostBook />
    </div>
  );
}

export default App;
