import React from 'react';
import MainLayout from "../../Components/Layouts/MainLayout";
import Navbar from "../../Components/Moleculas/Navbar";
import Sidebar from "../../Components/Moleculas/Sidebar";
import SearchResults from "../../Components/Moleculas/SearchResults";

const SearchResultPageMeta = {title: "Search results Post Page", description: "Search results page desc"};

const SearchResultPage = ({searchText, searchResults}) => {
  return (
    <MainLayout navbar={<Navbar/>} sidebar={<Sidebar/>} meta={SearchResultPageMeta}>
      <SearchResults searchText={searchText} searchResults={searchResults}/>
    </MainLayout>
  );
};

export default SearchResultPage;
