import React, { useState } from "react";
import "./TrendingItem.css";

const TrendingItem = ({ movie, isBookmarkedProp, onBookmarkClick }) => {
  const { title, thumbnail, year, category, rating } = movie;
  const largeThumbnail = thumbnail?.regular?.large; // Using optional chaining to handle undefined properties
  const [isBookmarked, setIsBookmarked] = useState(isBookmarkedProp);

  const backgroundImageStyle = {
    backgroundImage: `url(${largeThumbnail})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    onBookmarkClick(); // Aufruf der übergebenen Funktion
    console.log('Bookmark Clicked!');
  };

  return (
    <div className="trendingitem-container">
      <div
        className="trendingitem-item-cart"
        style={backgroundImageStyle}
        onClick={handleBookmarkClick}
      >
        <div className="trendingitem-bookmark-container">
          {isBookmarked ? (
            <svg
              className="trendingitem-bookmark-full"
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                fill="#FFF"
              />
            </svg>
          ) : (
            <svg
              className="trendingitem-bookmark-empty"
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                stroke="#FFF"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          )}
        </div>
        <div className="trendingitem-description">
          <div className="trendingitem-category">
            <p className="trendingitem-p">{year}</p>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                fill="#FFF"
                opacity=".75"
              />
            </svg>
            <p className="trendingitem-p">{category}</p>
            <p className="trendingitem-p">{rating}</p>
          </div>
          <h2 className="trendingitem-h2">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default TrendingItem;
