import SearchForm from "./searchform";

function Header() {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.content.value);
  }

    return (
        <header className="App-header">
            <div className="Header-container">
                <div></div>

                <SearchForm handleFormSubmit={handleFormSubmit}/>
                <div></div>
                <div></div>
            </div>
        </header>
    );
}

export default Header;