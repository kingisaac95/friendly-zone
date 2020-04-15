import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === '/' && (
        <footer>
          Built with{' '}
          <span role='img' aria-label='love'>
            ♥️
          </span>{' '}
          by <a href='https://twitter.com/kingisaac95'>@kingisaac95</a>
        </footer>
      )}
    </>
  );
}

export default Footer;
