import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='head hidden'>
      <Link id="head-logo" to={"/"}>Portfolio</Link>
      <nav>
        <ul className='navbar-container'>
          <li className='navbar-container__item'>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className='navbar-container__item'>
            <NavLink exact to="/photogallery/" activeClassName="active">
              Gallery
            </NavLink>
          </li>
          <li className='navbar-container__item'>
            <NavLink exact to="/admin" activeClassName="active">
              Admin
            </NavLink>
          </li>
          <li className='navbar-container__item'>
            <NavLink exact to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;