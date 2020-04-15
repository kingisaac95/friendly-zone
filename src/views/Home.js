import React from 'react';
import { Link } from 'react-router-dom';

function Home({ genres, movies, isFetching }) {
  const message = isFetching ? 'Loading...' : 'No movies found!';
  if (genres.length < 1) {
    return (
      <section className='movie-section centered'>
        <h2>{message}</h2>
      </section>
    );
  }
  return (
    <section>
      {genres.map((genre, key) => (
        <section className='movie-section' key={`movie-genre-${key}`}>
          <h2>{genre}</h2>
          <section className='movie-row'>
            {movies[genre] !== undefined &&
              movies[genre].map((movie, key) => (
                <Link
                  key={`movie-item-${key}`}
                  to={`/movie/${genre}/${movie.id}`}
                >
                  <article className='movie-item'>
                    <img src={movie.poster} alt={movie.description} />
                  </article>
                </Link>
              ))}
          </section>
        </section>
      ))}
    </section>
  );
}

Home.defaultProps = {
  movies: {},
  genres: [],
};

export default Home;
