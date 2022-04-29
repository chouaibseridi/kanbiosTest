const SearchBar = (props) => {
    let searchValue = "";

    const getInputValue = (event) => {
        searchValue =  event.target.value.toLowerCase();
        if(searchValue==="") handleSearch();
        return searchValue;
    }

    const handleSearch = () => {
        let result = [];
        result = props.data.filter(e => e.firstname.toLowerCase().search(searchValue) !== -1
            || e.lastname.toLowerCase().search(searchValue) !== -1);
        
        props.setSearchValue(searchValue);
        props.setFilteredData(result);
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Find an employee..." onChange={(event) =>getInputValue(event)}/>
            <button onClick={handleSearch}>Rechercher</button>
        </div>
    )
}

export default SearchBar;