import React from "react";
import "./Trending.css";
import TrendingItem from "../TrendingItem/TrendingItem";

const Trending = ({ movies, handleBookmarkClick }) => {
  const handleBookmark = (index) => {
    handleBookmarkClick(index); // Rufe die handleBookmarkClick-Funktion aus den Props auf
  };

  return (
    <>
      <h1 className="trendingitem-h1">Trending</h1>
      <div className="trending-container">
        {movies.map((movie) =>
          // Überprüfe, ob der Film/Serie als "trending" markiert ist
          movie.thumbnail.trending ? (
            <TrendingItem
              key={movie.title}
              movie={movie}
              isBookmarkedProp={movie.isBookmarked}
              onBookmarkClick={() => handleBookmark(movie.title)}
            />
          ) : null
        )}
      </div>
    </>
  );
};

export default Trending;
