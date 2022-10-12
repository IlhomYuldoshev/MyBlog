import React from 'react';
import MainLayout from "../../Components/Layouts/MainLayout";
import Sidebar from "../../Components/Moleculas/Sidebar";
import Navbar from "../../Components/Moleculas/Navbar";
import PostCard from "../../Components/Moleculas/PostCard";
import {useQuery} from '@tanstack/react-query';
import PostProvider from "../../Data/Providers/PostProvider";
import {fetch} from "../../../pages";

const HomePageMeta = {title: "Home Page", description: "Home page desc"}

const HomePage = () => {
  const {data} = useQuery(["posts", 1], () => fetch(), {
    staleTime: Infinity
  });

  console.log(data);

  return (
    <MainLayout navbar={<Navbar/>} sidebar={<Sidebar/>} meta={HomePageMeta}>
      {data && data[0].text}
    </MainLayout>
  );
};

export default HomePage;
