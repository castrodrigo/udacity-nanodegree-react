import React from "react";
import MovieListItemFan from "./MovieListItemFan";

const MovieListItem = ({ children }) => {
  const movie = children;
  return (
    <div key={movie.id}>
      <h2>{movie.name}</h2>
      {movie.users && movie.users.length > 0 ? (
        <React.Fragment>
          <p>Liked By:</p>
          <ul>
            {movie.users.map((user, key) => (
              <MovieListItemFan key={key} user={user} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>None of the current users liked this movie</p>
      )}
    </div>
  );
};

export default MovieListItem;
