import React, { useEffect, useState } from "react";
import "./MovieList.scss";
import { useGetMoviesQuery } from "../../services/movieApi";
import { MovieCard } from "../../components";

const MovieList = ({ searchTerm }) => {
  const [moviesList, setMoviesList] = useState([]);
  const { data: movies, isLoading } = useGetMoviesQuery(searchTerm);

  useEffect(() => {
    const filteredData = movies?.results.filter(
      (movie) => movie.titleType === "movie"
    );
    setMoviesList(filteredData);

    console.log(filteredData);
  }, [searchTerm]);

  if (isLoading) return "Loading...";
  return (
    <div className="movie-list">
      {moviesList?.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
