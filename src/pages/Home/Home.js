import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Searchbar/Searchbar";
import Trending from "../../components/Trending/Trending";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-div">
        <SearchBar />
        <Trending/>
      </div>
    </div>
  );
}

export default Home;
