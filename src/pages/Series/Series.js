import React, { useState, useEffect } from "react";
import "./Series.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Searchbar/Searchbar";
import Recommended from "../../components/Recommended/Recommended";

function Series({ movies, handleBookmarkClick }) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Filtere die Filme nach der Bedingung !movie.thumbnail.trending
    const filtered = movies.filter(movie => movie.category === "TV Series");
    setFilteredMovies(filtered);
  }, [movies]);

  return (
    <div className="series-container">
      <Navbar />
      <div className="series-div">
        <SearchBar />
        <Recommended movies={filteredMovies} handleBookmarkClick={handleBookmarkClick} title="Series"/>
      </div>
    </div>
  );
}

export default Series;
