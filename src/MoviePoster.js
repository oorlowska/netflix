import React, { useState, useEffect } from "react";
import "./MoviePoster.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function MoviePoster({ movie, isLarge }) {
  const [trailerNewUrl, setTrailerNewUrl] = useState("");
  const [isLiked, setIsLiked] = useState(() => getLocalStorage(movie.id));

  const heartIconStyle = {
    color: isLiked ? "red" : "white",
  };

  const handleClick = (movie) => {
    if (trailerNewUrl) {
      setTrailerNewUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerNewUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  function getLocalStorage(movieId) {
    const likedMovie = localStorage.getItem(`isLiked-${movieId}`);
    return likedMovie !== null ? JSON.parse(likedMovie) : false;
  }

  useEffect(() => {
    localStorage.setItem(`isLiked-${movie.id}`, JSON.stringify(isLiked));
  }, [isLiked, movie.id]);

  return (
    <div className={`row__posterDiv`}>
      <p className="heart__icon" onClick={handleLikeClick}>
        <FontAwesomeIcon
          icon={isLiked ? faHeartSolid : faHeartRegular}
          style={heartIconStyle}
        />
      </p>
      <img
        key={movie.id}
        onClick={() => handleClick(movie)}
        className={`row__poster ${isLarge && "row__posterLarge"}`}
        src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
      />
    </div>
  );
}

export default MoviePoster;
