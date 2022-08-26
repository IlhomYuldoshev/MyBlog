import React, {useState} from 'react';
import PostCard from "../PostCard";
import UserCard from "../UserCard";

const SearchNavList = [
  {
    name: "Posts",
    path: "posts"
  },
  {
    name: "Accounts",
    path: "accounts"
  }
];

const SearchResults = ({searchText, searchResults}) => {
  const [searchPage, setSearchPage] = useState("posts");

  const handleSearchNav = (page) => {
    setSearchPage(page);
  }

  return (
    <div className="search-results">
      <h2 className="search-results__title">
        <span>Results for</span> {searchText}
      </h2>

      <ul className="search-results__nav-list">
        {
          SearchNavList.map(({name, path}) => (
            <li
              onClick={() => handleSearchNav(path)}
              className={`search-results__nav-item ${path === searchPage ? "search-results__nav-item--active" : ""}`}
              key={path}
            >
              {name}
            </li>
          ))
        }
      </ul>

      {
        searchPage === "posts" && searchResults.posts.slice(0, 12).map(({body, id}) => (
          <PostCard key={id}/>
        ))
      }
      {
        searchPage === "accounts" && searchResults.posts.slice(0, 7).map(({title, id}) => (
          <UserCard key={id}/>
        ))
      }
    </div>
  );
};

export default SearchResults;
