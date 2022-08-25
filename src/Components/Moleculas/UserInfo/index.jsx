import React from 'react';
import MyLink from "../../Atoms/MyLink";
import FollowBtn from "../../Atoms/FollowBtn";

const UserInfo = () => {

  return (
    <div className="user-info">
      <img
        className="user-info__avatar"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="Avatar of user"
      />
      <MyLink to="#userPage" className="user-info__name">
        Ilhom Yuldoshev
      </MyLink>
      <div className="user-info__followers">
        42 followers
      </div>
      <p className="user-info__extra-info">
        Frontend web developer
      </p>
      <br/>
      <FollowBtn/>
    </div>
  );
};

export default UserInfo;
