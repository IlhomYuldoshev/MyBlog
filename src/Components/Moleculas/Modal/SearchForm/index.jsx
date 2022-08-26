import React, {useState} from 'react';
import SearchInput from "../../Search";
import {useRouter} from "next/router";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState(null);
  const router = useRouter();

  const onSubmit = () => {
    if(searchValue.trim()) {
      router.push(searchValue);
    }
  }

  const searchTextHandler = (text) => {
    setSearchValue(text);
  }

  return (
    <div className="search-form">
      <SearchInput
        onSubmit={onSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <br/>
      <h3 className="search-form__title">Recent searches</h3>

      <ul className="search-form__list">
        {
          ["react", "redux", "test test"].map((text, idx) => (
            <li key={idx} className="search-form__item">
              <span
                onClick={() => searchTextHandler(text)}
                className="search-form__item-text"
              >
                {text}
              </span>
              <span className="search-form__item-remove">X</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default SearchForm;
