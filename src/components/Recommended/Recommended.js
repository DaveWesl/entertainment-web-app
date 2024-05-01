import React, { useState, useEffect } from "react";
import "./Recommended.css";
import RecommendedItem from "../RecommendedItem/RecommendedItem";

import movieData from "../../data.json";

const Recommended = ({ movies, title }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Beim Laden der Komponente, überprüfe den localStorage und setze den Zustand entsprechend
    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    if (storedMovies) {
      setFilteredMovies(storedMovies);
    } else {
      setFilteredMovies(movies || movieData); // Fallback zu movieData, wenn movies nicht vorhanden ist
    }
  }, [movies]); // Überwache die Änderungen von movies, um den Effekt bei Bedarf neu auszuführen

  const handleBookmarkClick = (index) => {
    const updatedMovies = [...filteredMovies];
    updatedMovies[index].isBookmarked = !updatedMovies[index].isBookmarked;
    setFilteredMovies(updatedMovies);
    // Speichere die aktualisierten Daten im localStorage
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };

  return (
    <>
      <h1 className="recommendedItem-h1">{title}</h1>
      <div className="recommended-container">
        {movies.map((movie, index) => (
          <RecommendedItem
            key={index}
            movie={movie}
            isBookmarkedProp={movie.isBookmarked}
            onBookmarkClick={() => handleBookmarkClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Recommended;
