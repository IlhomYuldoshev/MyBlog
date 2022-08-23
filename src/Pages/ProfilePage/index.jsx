import React from 'react';
import MainLayout from "../../Components/Layouts/MainLayout";
import Sidebar from "../../Components/Moleculas/Sidebar";
import Navbar from "../../Components/Moleculas/Navbar";

const ProfilePageMeta = {title: "Profile Page", description: "Profile page desc"}

const ProfilePage = () => {
  return (
    <MainLayout navbar={<Navbar/>} sidebar={<Sidebar/>} meta={ProfilePageMeta}>
      Profile page - Lorem ipsum dolor sit amet.
    </MainLayout>
  );
};

export default ProfilePage;
