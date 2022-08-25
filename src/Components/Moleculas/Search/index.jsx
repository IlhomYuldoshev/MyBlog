import React, {useState} from 'react';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleClearSearch = () => {
    setSearchValue("");
  }

  return (
    <div className="search-input-wrapper">
      <input
        className="base-input base-input--search"
        value={searchValue}
        onChange={handleChange}
        type="search"
        placeholder="Search"
      />
      {
        searchValue && (
          <div
            onClick={handleClearSearch}
            className="search-input-wrapper__clear-input"
          />
        )
      }
    </div>
  );
};

export default SearchInput;
