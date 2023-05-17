import searchIcon from '../../assets/icons/search.svg';

function SearchForm(props) {
    const searchHandler = () => {

        console.log(props.search);
    }

    return (

        


        <div className="searchbar" >

            <form className="searchform">
                <img src={searchIcon} alt="search" />

                <input
                    type="search"
                    placeholder="Search">
                </input>
            </form>

            {/* 



            <form
                className="searchbar__form"
                id=""
            >
                <label className="" htmlFor="search"></label>
                <input
                    id="searchInput"
                    className=""
                    placeholder="Search" 
                />
            </form> */}
        </div>
    );
}

export default SearchForm;