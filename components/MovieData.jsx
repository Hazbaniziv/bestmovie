import React from "react";
import RateMovie from "./RateMovie";
import { useMoviesContext } from "../contextApi";
import { useParams } from "react-router-dom";
import "../App.css";

export default function MovieData() {
  const { movies, setMovies } = useMoviesContext();
  const { name } = useParams();
  const currentMovie = movies.find((movie) => movie.movieName === name);
  const onRateClick = (num) => {
    const restMovies = movies.filter((movie) => currentMovie.id != movie.id);
    setMovies([
      ...restMovies,
      { ...currentMovie, rates: [...currentMovie.rates, num] },
    ]);
  };
  const avrageFunc = () => {
    if (currentMovie.rates.length == 0) {
      return "No Rates for movie";
    }
    let sum = 0;
    for (let i = 0; i < currentMovie.rates.length; i++) {
      sum = currentMovie.rates[i] + sum;
    }
    return sum / currentMovie.rates.length;
  };
  return (
    <div id="movieDetails">
      <p>Movie name: {currentMovie.movieName}</p>
      <img id="movieImage"
        src={currentMovie.moviePic}
        style={{ height: "200px", width: "150px" }}
      />
      <p>Description: {currentMovie.description}</p>
      <p>Avrage: {avrageFunc()}</p>
      <RateMovie onRateClick={onRateClick} />
    </div>
  );
}
