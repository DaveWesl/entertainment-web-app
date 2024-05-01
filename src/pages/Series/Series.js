import React, { useState, useEffect } from "react";
import "./Series.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Searchbar/Searchbar";
import Recommended from "../../components/Recommended/Recommended";

import movieData from "../../data.json";

function Series() {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Filtere die Filme nach der Bedingung !movie.thumbnail.trending
    const filtered = movieData.filter(movie => movie.category === "TV Series");
    setFilteredMovies(filtered);
  }, []);

  return (
    <div className="series-container">
      <Navbar />
      <div className="series-div">
        <SearchBar />
        <Recommended movies={filteredMovies} title="Series"/>
      </div>
    </div>
  );
}

export default Series;
