import searchIcon from '../../assets/icons/search.svg';
import uploadIcon from '../../assets/icons/upload.svg';
import brainLogo from '../../assets/logo/BrainFlix-logo.svg';
import './Header.scss';

function Header() {

  return (
    <header className="header">

      <div className="brainlogo"><img src={brainLogo} alt="" /></div>

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
        <button className="btn" >
          <img src={uploadIcon} alt="upload" />
          <span>Upload</span>
        </button>
      </div>
    </header>

  );
}

export default Header;