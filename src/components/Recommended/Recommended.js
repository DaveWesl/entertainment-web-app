import React from "react";
import "./Recommended.css";
import RecommendedItem from "../RecommendedItem/RecommendedItem";

const Recommended = ({ movies, title, handleBookmarkClick }) => {
  const handleBookmark = (index) => {
    handleBookmarkClick(index); // Rufe die handleBookmarkClick-Funktion aus den Props auf
  };

  return (
    <>
      <h1 className="recommendedItem-h1">{title}</h1>
      <div className="recommended-container">
        {movies.map((movie) => (
          <RecommendedItem
            key={movie.title}
            movie={movie}
            isBookmarkedProp={movie.isBookmarked}
            onBookmarkClick={() => handleBookmark(movie.title)}
          />
        ))}
      </div>
    </>
  );
};

export default Recommended;
