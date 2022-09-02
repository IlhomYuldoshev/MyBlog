import React from 'react';
import MainLayout from "../../Components/Layouts/MainLayout";
import Sidebar from "../../Components/Moleculas/Sidebar";
import Navbar from "../../Components/Moleculas/Navbar";
import PostBuilder from "../../Components/Moleculas/PostBuilder";

const WritePageMeta = {title: "Write Post Page", description: "Write page desc"}

const WritePage = () => {
  return (
    <MainLayout navbar={<Navbar/>} sidebar={<Sidebar/>} meta={WritePageMeta}>
      <PostBuilder/>
    </MainLayout>
  );
};

export default WritePage;
