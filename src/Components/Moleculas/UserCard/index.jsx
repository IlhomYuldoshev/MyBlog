import React, {useState} from 'react';
import FollowBtn from "../../Atoms/FollowBtn";
import MyLink from "../../Atoms/MyLink";

const UserCard = () => {
  const [random, setRandom] = useState(Math.floor(Math.random() * 50));

  return (
    <div className="user-card">
      <div className="user-card__img-wrapper">
        <img
          src={`https://picsum.photos/200/200/?random=${random}`}
          alt=""
        />
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
