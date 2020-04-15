import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import backArrow from '../images/back-arrow.png';
import searchIcon from '../images/search-icon.png';

function Navbar({ setSearchTerm }) {
  const { pathname } = useLocation();

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  if (pathname === '/') {
    return (
      <header className='header'>
        <Link to='/'>
          <h2>
            FRIENDLY
            <br />
            ZONE
          </h2>
        </Link>
        <form>
          <label className='search-icon' htmlFor='search'>
            <img src={searchIcon} alt='search icon' />
          </label>
          <input name='search' type='search' onChange={handleSearchInput} />
        </form>
      </header>
    );
  }

  return (
    <header className='details-header'>
      <Link to='/'>
        <img src={backArrow} alt='go back' />
      </Link>
    </header>
  );
}

export default Navbar;
