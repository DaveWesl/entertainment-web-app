import React, { useState, useEffect } from 'react';
import "./Recommended.css";
import RecommendedItem from "../RecommendedItem/RecommendedItem";

import movieData from "../../data.json";

const Recommended = () => {
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
      <h1 className="recommendedItem-h1">Recommended for you</h1>
      <div className="recommended-container">
        {movies.map((movie, index) =>
          // Überprüfe, ob der Film/Serie als "trending" markiert ist
          movie && !movie.thumbnail.trending ? (
            <RecommendedItem
              key={index}
              movie={movie} // Zugriff auf das regular Objekt von thumbnail
              isBookmarkedProp={movie.isBookmarked}
              onBookmarkClick={() => handleBookmarkClick(index)}
            />
          ) : null
        )}
      </div>
    </>
  );
};

export default Recommended;
