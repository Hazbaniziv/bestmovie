import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useMoviesContext } from "../contextApi";

export default function Menu() {
  const { movies } = useMoviesContext();

  const [currentMovie, setCurrentMovie] = useState();
  const onMovieSelect = (movie) => {
    setCurrentMovie(movie);
  };

  return (
    <div id="movieList">
      {movies.map((val, i) => {
        return (
          <Link key={val.id} to={`/${val.movieName}`}>
            <button 
              onClick={() => {
                onMovieSelect(i);
              }}
            >
              {val.movieName}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
