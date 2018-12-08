import React from "react";
import MovieListItem from "./MovieListItem";

const MovieList = ({ profiles, movies, users }) => {
  let movieSet = new Set();
  const likedMoviesList = profiles.reduce((acum, profile) => {
    const movieId = parseInt(profile.favoriteMovieID, 10);
    const userId = parseInt(profile.userID, 10);
    if (!movieSet.has(movieId)) {
      acum.push({
        ...movies[movieId],
        users: [users[userId]]
      });
    } else {
      acum
        .filter(movie => movieId === movie.id)
        .map(movie => {
          return movie.users.push(users[userId]);
        });
    }
    movieSet.add(movieId);
    return acum;
  }, []);

  Object.keys(movies)
    .filter(id => !movieSet.has(parseInt(id, 10)))
    .map(id => likedMoviesList.push(movies[id]));

  return likedMoviesList.map(movie => (
    <MovieListItem key={movie.id}>{movie}</MovieListItem>
  ));
};
export default MovieList;
