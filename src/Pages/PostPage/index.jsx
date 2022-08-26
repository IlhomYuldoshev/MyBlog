import React from 'react';
import MainLayout from "../../Components/Layouts/MainLayout";
import Navbar from "../../Components/Moleculas/Navbar";
import Sidebar from "../../Components/Moleculas/Sidebar";
import Post from "../../Components/Moleculas/Post";

const PostPageMeta = {title: "Post Page", description: "Post page desc"};

const PostPage = () => {
  return (
    <MainLayout navbar={<Navbar/>} sidebar={<Sidebar/>} meta={PostPageMeta}>
      <Post/>
    </MainLayout>
  );
};

export default PostPage;
