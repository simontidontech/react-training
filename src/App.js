import './App.css';

import NavBar from './components/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <NavBar heading={location.pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App;
