import React, { useState, useEffect } from "react";
import "./Bookmarked.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Searchbar/Searchbar";
import Recommended from "../../components/Recommended/Recommended";

import movieData from "../../data.json";

function Bookmarked() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredMovies1, setFilteredMovies1] = useState([]);


  useEffect(() => {
    // Filtere die Filme nach der Bedingung !movie.thumbnail.trending
    const filtered = movieData.filter(movie => movie.category === "TV Series" && movie.isBookmarked);
    const filtered1 = movieData.filter(movie => movie.category === "Movie" && movie.isBookmarked);
    setFilteredMovies(filtered);
    setFilteredMovies1(filtered1);
  }, []);

  return (
    <div className="bookmarked-container">
      <Navbar />
      <div className="bookmarked-div">
        <SearchBar />
        <Recommended movies={filteredMovies1} title="Bookmarked Movies"/>
        <Recommended movies={filteredMovies} title="Bookmarked Series"/>
      </div>
    </div>
  );
}

export default Bookmarked;
