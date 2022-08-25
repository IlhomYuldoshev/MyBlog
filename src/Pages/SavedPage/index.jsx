import React from 'react';
import MainLayout from "../../Components/Layouts/MainLayout";
import Sidebar from "../../Components/Moleculas/Sidebar";
import Navbar from "../../Components/Moleculas/Navbar";
import UserCard from "../../Components/Moleculas/UserCard";

const SavedPageMeta = {title: "Saved Posts Page", description: "Saved page desc"}

const SavedPage = () => {
  return (
    <MainLayout navbar={<Navbar/>} sidebar={<Sidebar/>} meta={SavedPageMeta}>
      Saved page - Lorem ipsum dolor sit amet.

      <UserCard/>
      <UserCard/>
      <UserCard/>
    </MainLayout>
  );
};

export default SavedPage;
