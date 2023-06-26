import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

function Header() { 

  return (
    <div className='head'>
      <Link id="head-logo" to={"/"}>Portfolio</Link>
      <nav>
        <ul className='navbar-container'>
          <li className='navbar-container__item'>
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li className='navbar-container__item'>
            <NavLink to="/photogallery/" activeclassname="active">
              Gallery
            </NavLink>
          </li>
          <li className='navbar-container__item'>
            <NavLink to="/admin" activeclassname="active">
              Admin
            </NavLink>
          </li>
          <li className='navbar-container__item'>
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
