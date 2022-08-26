import React, {useState} from 'react';
import SearchInput from "../../Search";
import {useRouter} from "next/router";
import {useContextSelector} from "use-context-selector";
import {ModalContext} from "../../../../Context/ModalContext";

const SearchForm = () => {
  const mDispatch = useContextSelector(ModalContext, v => v.actions.dispatch);
  const [searchValue, setSearchValue] = useState(null);
  const router = useRouter();

  const onSubmit = () => {
    if (searchValue.trim()) {
      router.push(`/search/${searchValue}`).then(() => {
        mDispatch({type: "CLOSE"});
      })
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
