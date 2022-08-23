import React from 'react';
import MainLayout from "../../Components/Layouts/MainLayout";
import Sidebar from "../../Components/Moleculas/Sidebar";
import Navbar from "../../Components/Moleculas/Navbar";
import PostCard from "../../Components/Moleculas/PostCard";

const HomePageMeta = {title: "Home Page", description: "Home page desc"}

const HomePage = () => {
  return (
    <MainLayout navbar={<Navbar/>} sidebar={<Sidebar/>} meta={HomePageMeta}>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </MainLayout>
  );
};

export default HomePage;
