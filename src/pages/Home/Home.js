import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Searchbar/Searchbar";
import Trending from "../../components/Trending/Trending";
import Recommended from "../../components/Recommended/Recommended";


function Home({ movies, handleBookmarkClick }) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Filtere die Filme nach der Bedingung !movie.thumbnail.trending
    const filtered = movies.filter(movie => !movie.thumbnail.trending);
    setFilteredMovies(filtered);
  }, [movies]);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-div">
        <SearchBar />
        <Trending movies={movies} handleBookmarkClick={handleBookmarkClick}/>
        <Recommended movies={filteredMovies} handleBookmarkClick={handleBookmarkClick} title="Recommended for you"/>
      </div>
      
    </div>
  );
}

export default Home;
