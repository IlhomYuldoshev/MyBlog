import React from 'react';
import PostPage from "../../src/Pages/PostPage";

const DynamicPostPage = ({postId}) => {
  console.log(postId);
  return (
    <PostPage/>
  );
};

export default DynamicPostPage;


export async function getServerSideProps(props) {
  const {postId} = props.params;
  return {props: {postId}}
}
