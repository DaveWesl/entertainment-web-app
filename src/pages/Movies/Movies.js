import React from "react";
import "./Movies.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Searchbar/Searchbar";
import Trending from "../../components/Trending/Trending";
import Recommended from "../../components/Recommended/Recommended";

function Movies() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-div">
        <SearchBar />
        <Trending/>
        <Recommended/>
      </div>
    </div>
  );
}

export default Movies;
