import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { REACT_APP_MOVIE_API_KEY } = process.env;

const movieApiHeaders = {
  "x-rapidapi-host": "imdb8.p.rapidapi.com",
  "x-rapidapi-key": REACT_APP_MOVIE_API_KEY,
};

const baseUrl = "https://imdb8.p.rapidapi.com/title";

const createRequest = (url) => ({ url, headers: movieApiHeaders });

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (movie) => createRequest(`/find?q=${movie}`),
    }),
  }),
});

export const { useGetMoviesQuery } = movieApi;
