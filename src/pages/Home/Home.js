import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Searchbar/Searchbar";
import Trending from "../../components/Trending/Trending";
import Recommended from "../../components/Recommended/Recommended";

import movieData from "../../data.json";

function Home() {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Filtere die Filme nach der Bedingung !movie.thumbnail.trending
    const filtered = movieData.filter(movie => !movie.thumbnail.trending);
    setFilteredMovies(filtered);
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-div">
        <SearchBar />
        <Trending />
        <Recommended movies={filteredMovies} title="Recommended for you"/>
      </div>
      
    </div>
  );
}

export default Home;
