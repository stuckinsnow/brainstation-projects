import { Link } from 'react-router-dom';
import searchIcon from '../../assets/icons/search.svg';
import uploadIcon from '../../assets/icons/upload.svg';
import brainLogo from '../../assets/logo/BrainFlix-logo.svg';
import './Header.scss';

function Header() {

  return (
    <header className="header">

      <Link to="/" className="brainlogo"><img src={brainLogo} alt="" /></Link>

      <div className="header-container">
        <div className="header-container__searchbar" >
          <form className="header-container__searchform">
            <img src={searchIcon} alt="search" />
            <input
              type="search"
              placeholder="Search">
            </input>
          </form>
        </div>
        <div className="header-container__avatar">
        </div>
        <Link className="lnk" to="/upload"><button className="btn" >
          <img src={uploadIcon} alt="upload" />
          <span>Upload</span>
        </button></Link>
      </div>
    </header>

  );
}

export default Header;