import React, { useEffect, useState } from 'react';
import Home from './views/Home';
import Movie from './views/Movie';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenre] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    const baseUrl = 'https://wookie.codesubmit.io/movies';
    const url = searchTerm.length > 2 ? `${baseUrl}?q=${searchTerm}` : baseUrl;
    fetch(url, {
      headers: {
        Authorization: 'Bearer Wookie2019',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const genres = [];
        const moviesByGenre = data.movies.reduce((acc, movie) => {
          movie.genres.map((genre) => {
            if (acc[genre]) {
              return acc[genre].push(movie);
            } else {
              genres.push(genre);
              return (acc[genre] = [movie]);
            }
          });
          return acc;
        }, {});

        setMovies(moviesByGenre);
        setGenre(genres);
        setIsFetching(false);
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  return (
    <Router>
      <Navbar setSearchTerm={setSearchTerm} />

      <Switch>
        <Route
          exact
          path='/'
          render={(props) => (
            <Home
              {...props}
              genres={genres}
              movies={movies}
              isFetching={isFetching}
            />
          )}
        />
        <Route
          path='/movie/:genre/:id'
          render={(props) => {
            const { genre } = props.match.params;
            return <Movie {...props} movies={movies[genre]} />;
          }}
        />
      </Switch>

      <footer>
        Built with{' '}
        <span role='img' aria-label='love'>
          ♥️
        </span>{' '}
        by <a href='https://twitter.com/kingisaac95'>@kingisaac95</a>
      </footer>
    </Router>
  );
}

export default App;
