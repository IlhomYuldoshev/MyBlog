import React from 'react';
import FollowBtn from "../../Atoms/FollowBtn";
import MyLink from "../../Atoms/MyLink";

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="user-card__img-wrapper">
        <img src="/react-logo.svg" alt=""/>
      </div>
      <div className="user-card__text-wrapper">
        <MyLink to="#userProfile" className="user-card__name">
          Test User
        </MyLink>
        <p className="user-card__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam dicta enim ipsa odio veritatis voluptates! Aliquam blanditiis ipsum iste repudiandae voluptate. Ad autem commodi cupiditate harum iusto labore neque perferendis quibusdam sapiente.
        </p>
      </div>
      <div>
        <FollowBtn className="user-card__flw-btn"/>
      </div>
    </div>
  );
};

export default UserCard;
