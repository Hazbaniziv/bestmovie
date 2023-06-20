import React from "react";
import { useMoviesContext } from "../contextApi";
import "../App.css";

export default function TopThreeMovies() {
  const { movies } = useMoviesContext();

  const avrageCheck = (rating) => {
    let sum;
    for (let i = 0; i < rating; i++) {
      sum += rating[i];
    }
    return sum / rating.length;
  };
  movies
    .map((movie) => {
      return { ...movie, avg: avrageCheck(movie.rates) };
    })
    .sort();
  return (
    <div id="topThree">
      <button>1ST:<br/>{movies[4].movieName}</button>
      <button>2ND:<br/>{movies[3].movieName}</button>
      <button>3RD:<br/>{movies[2].movieName}</button>
    </div>
  );
}
