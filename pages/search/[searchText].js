import React from 'react';
import MyLink from "../../src/Components/Atoms/MyLink";

const SearchResultsPage = () => {
  return (
    <div>
      <MyLink to="/">
        Home
      </MyLink>
    </div>
  );
};

export default SearchResultsPage;

export function getServerSideProps(props) {
  const {searchText} = props.params
  return {props: {searchText}}
}
