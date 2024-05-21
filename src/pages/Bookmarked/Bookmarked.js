import React, { useState, useEffect } from "react";
import "./Bookmarked.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Searchbar/Searchbar";
import Recommended from "../../components/Recommended/Recommended";

function Bookmarked({ movies, handleBookmarkClick }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredMovies1, setFilteredMovies1] = useState([]);


  useEffect(() => {
    // Filtere die Filme nach der Bedingung !movie.thumbnail.trending
    const filtered = movies.filter(movie => movie.category === "TV Series" && movie.isBookmarked);
    const filtered1 = movies.filter(movie => movie.category === "Movie" && movie.isBookmarked);
    setFilteredMovies(filtered);
    setFilteredMovies1(filtered1);
  }, [movies]);
  

  return (
    <div className="bookmarked-container">
      <Navbar />
      <div className="bookmarked-div">
        <SearchBar />
        <Recommended movies={filteredMovies1} handleBookmarkClick={handleBookmarkClick} title="Bookmarked Movies"/>
        <Recommended movies={filteredMovies} handleBookmarkClick={handleBookmarkClick} title="Bookmarked Series"/>
      </div>
    </div>
  );
}

export default Bookmarked;
