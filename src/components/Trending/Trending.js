import React, { useState, useEffect } from 'react';
import "./Trending.css";
import TrendingItem from "../TrendingItem/TrendingItem";

import movieData from "../../data.json";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    // Beim Laden der Komponente, überprüfe den localStorage und setze den Zustand entsprechend
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    if (storedMovies) {
      setMovies(storedMovies);
    } else {
      setMovies(movieData);
    }
  }, []);

  const handleBookmarkClick = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].isBookmarked = !updatedMovies[index].isBookmarked;
    setMovies(updatedMovies);
    // Speichere die aktualisierten Daten im localStorage
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  };

  return (
    <>
      <h1 className="trendingitem-h1">Trending</h1>
      <div className="trending-container">
        {movies.map((movie, index) =>
          // Überprüfe, ob der Film/Serie als "trending" markiert ist
          movie.thumbnail.trending ? (
            <TrendingItem
              key={index}
              movie={movie}
              isBookmarkedProp={movie.isBookmarked}
              onBookmarkClick={() => handleBookmarkClick(index)}
            />
          ) : null
        )}
      </div>
    </>
  );
};

export default Trending;
