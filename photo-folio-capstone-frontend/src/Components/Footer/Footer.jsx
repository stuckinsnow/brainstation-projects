import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <Link to="/pp/">Portfolio</Link>
    </footer>
  )
}

export default Footer;
