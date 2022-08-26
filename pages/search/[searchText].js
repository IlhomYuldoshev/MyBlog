import React from 'react';
import axios from "axios";
import SearchResultPage from "../../src/Pages/SearchResultPage";

const SearchResultsPage = ({searchText, searchResults}) => {
  console.log("searchResults", searchResults);
  return (
    <SearchResultPage searchResults={searchResults} searchText={searchText}/>
  );
};

export default SearchResultsPage;


export async function getServerSideProps(props) {
  const {searchText} = props.params

  const {data: posts} = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const {data: accounts} = await axios.get("https://jsonplaceholder.typicode.com/users");

  return {
    props:
      {
        searchResults: {
          posts,
          accounts
        },
        searchText
      }
  }
}
