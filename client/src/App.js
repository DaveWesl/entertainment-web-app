import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Bookmarked from "./pages/Bookmarked/Bookmarked";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import movieData from "./data.json";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Beim Laden der Komponente, überprüfe den localStorage und setze den Zustand entsprechend
    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    if (storedMovies && storedMovies.length > 0) {
      setMovies(storedMovies);
    } else {
      setMovies(movieData);
    }
  }, []);

  const handleBookmarkClick = (title) => {
    const updatedMovies = movies.map((movie) =>
      movie.title === title
        ? { ...movie, isBookmarked: !movie.isBookmarked }
        : movie
    );
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };

  return (
    <Router basename="/">
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home movies={movies} handleBookmarkClick={handleBookmarkClick} />
            }
          />
          <Route
            path="/movies"
            element={
              <Movies
                movies={movies}
                handleBookmarkClick={handleBookmarkClick}
              />
            }
          />
          <Route
            path="/series"
            element={
              <Series
                movies={movies}
                handleBookmarkClick={handleBookmarkClick}
              />
            }
          />
          <Route
            path="/bookmarked"
            element={
              <Bookmarked
                movies={movies}
                handleBookmarkClick={handleBookmarkClick}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
