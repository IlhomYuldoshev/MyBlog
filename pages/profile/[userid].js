import React from 'react';
import MyLink from "../../src/Components/Atoms/MyLink";

// TODO
const UserProfileHomePage = ({userid}) => {
  return (
    <div style={{padding: 30}}>
      <h2>Settings page</h2>
      <h3>Userid: {userid}</h3>
      <MyLink to="/">Home</MyLink>
    </div>
  );
};

export default UserProfileHomePage;


export function getServerSideProps(props) {
  const {userid} = props.params
  return {props: {userid}}
}
