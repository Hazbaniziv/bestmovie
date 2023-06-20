import React, { useContext, useState } from "react";
import ShawshankRedemption from "./moviePic/TheShawshankRedemption.jpg";
import TheGodfather from "./moviePic/TheGodfather.jpg";
import TheDarkKnight from "./moviePic/TheDarkKnight.jpg";
import TweleveAngryMen from "./moviePic/TweleveAngryMen.jpg";
import SchindlersList from "./moviePic/SchindlersList.jpg";
import { Movie } from "./Movie";

const Context = React.createContext();

export const Provider = ({ children }) => {
  const [movies, setMovies] = useState([
    new Movie(
      "1",
      "The Shawshank Redemption",
      "Two imprisoned men bond over a number of years,finding solace and eventual redemption through acts of common decency.",
      ShawshankRedemption
    ),
    new Movie(
      "2",
      "The Godfather",
      "The aging patriarch of a Mafia family transfers control of his illegal empire to his youngest son, unaware that the youngest son has been chosen by the leaders of the other Mafia families to succeed him.",
      TheGodfather
    ),
    new Movie(
      "3",
      "The Dark Knight",
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      TheDarkKnight
    ),
    new Movie(
      "4",
      "Tweleve Angry Men",
      "A jury in New York City is tasked with deciding the guilt or innocence of a young man accused of murdering his father.",
      TweleveAngryMen
    ),
    new Movie(
      "5",
      "Schindler's List",
      "In Poland during World War II, Oskar Schindler, a German businessman, becomes involved in the business of war profiteering.",
      SchindlersList
    ),
  ]);
  const value = {
    movies: movies,
    setMovies: setMovies,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const useMoviesContext = () => {
  return useContext(Context);
};
