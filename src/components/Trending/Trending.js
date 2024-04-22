import React from "react";
import './Trending.css';
import TrendingItem from "../TrendingItem/TrendingItem";

const Trending = () => {

  return (
    <div className="trending-container">
        <h1 className="trendingitem-h1">Trending</h1>
        
        <TrendingItem />

    </div>
  );
};

export default Trending;
