import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <Link to="/">Portfolio</Link>
      <Link to="/">LinkedIn URL can go here</Link>

      {/* This can point to the sql database, if there's time to implement it. */}

    </footer>
  )
}

export default Footer;
