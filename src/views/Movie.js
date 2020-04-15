import React from 'react';
import { useParams } from 'react-router-dom';

function Movie({ movies }) {
  let { id } = useParams();

  const RenderMovieDetails = ({ movies }) => {
    const movie = movies.find((movie) => movie.id === id);
    // there's inconsistency in data type of directors
    const formatDirector = (value) => {
      if (typeof value === 'string') {
        return value;
      }
      return value.join(', ');
    };

    return (
      <section>
        {movie && (
          <section className='movie-detail'>
            <article
              style={{
                backgroundImage: `url(${movie.backdrop})`,
              }}
            ></article>
            <section className='movie-detail-panel'>
              <section className='movie-image'>
                <img src={movie.poster} alt={`${movie.title} poster`} />
              </section>
              <section>
                <h1 className='title'>{movie.title}</h1>
                <p>Length: {movie.length}</p>
                <p>Director(s): {formatDirector(movie.director)}</p>
                <p className='overview'>{movie.overview}</p>
              </section>
            </section>
          </section>
        )}
      </section>
    );
  };

  RenderMovieDetails.defaultProps = {
    movies: [],
  };

  return (
    <section>
      {movies !== undefined ? (
        <RenderMovieDetails movies={movies} />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

Movie.defaultProps = {
  movies: [],
};

export default Movie;
