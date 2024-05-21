import React, { useState, useEffect } from "react";
import "./Movies.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Searchbar/Searchbar";
import Recommended from "../../components/Recommended/Recommended";

function Movies({ movies, handleBookmarkClick }) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Filtere die Filme nach der Bedingung !movie.thumbnail.trending
    const filtered = movies.filter(movie => movie.category === "Movie");
    setFilteredMovies(filtered);
  }, [movies]);

  return (
    <div className="movies-container">
      <Navbar />
      <div className="movies-div">
        <SearchBar />
        <Recommended movies={filteredMovies} handleBookmarkClick={handleBookmarkClick} title="Movies"/>
      </div>
    </div>
  );
}

export default Movies;
