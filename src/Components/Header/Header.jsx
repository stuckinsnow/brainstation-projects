import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to={"/"}>Logo</Link>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/photogallery/" activeClassName="active">
              Gallery
            </NavLink>
          </li>
          <li>
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