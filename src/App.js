import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Bookmarked from './pages/Bookmarked/Bookmarked';


function App() {

  return (
    <Router basename="/">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

