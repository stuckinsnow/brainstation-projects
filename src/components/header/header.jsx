import searchIcon from '../../assets/icons/search.svg';
import uploadIcon from '../../assets/icons/upload.svg';
import brainLogo from '../../assets/logo/BrainFlix-logo.svg';
import './Header.scss';

function Header() {

 /* const handleFormSubmit = (event) => {
    event.preventDefault(); 
    console.log(event.target.title.value);
    console.log(event.target.content.value);
  } */

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
        <div className="header-container__uploadbar" >
          <img src={uploadIcon} alt="upload" />
          <span>Upload</span>
        </div>
      </div>
    </header>

  );
}

export default Header;