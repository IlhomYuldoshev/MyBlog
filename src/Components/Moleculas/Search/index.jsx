import React, {useEffect, useState} from 'react';
import {SearchSvg} from "../../../Svgs";

const SearchInput = ({searchValue, setSearchValue, onSubmit}) => {
  const onSubmitHandle = (e) => {
    e.preventDefault();
    onSubmit();
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleClearSearch = () => {
    setSearchValue("");
  }

  return (
    <form onSubmit={onSubmitHandle} className="search-input-wrapper-form">
      <input
        className="base-input base-input--search"
        value={searchValue}
        onChange={handleChange}
        type="search"
        placeholder="Search"
      />
      {
        searchValue && (
          <>
            <SearchSvg
              onClick={onSubmitHandle}
              className="search-input-wrapper-form__search-svg"
            />
            <div
              onClick={handleClearSearch}
              className="search-input-wrapper-form__clear-input"
            />
          </>
        )
      }
    </form>
  );
};

export default SearchInput;
