import React, {useState} from 'react';
import MyLink from "../../Atoms/MyLink";
import {AddBookmark} from "../../../Svgs";

const PostCard = () => {
  const [isFavourite, setState] = useState(Math.random() > 0.5);
  const [random, setRandom] = useState(Math.floor(Math.random() * 50));

  const handleAddFavourite = () => {
    setState(p => !p);
  }

  return (
    <div className="post-card">
      {/* -------------- HEADER -------------- */}
      <div className="post-card__header">
        <img
          className="post-card__user-img"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Name"
        />
        <MyLink className="post-card__name-link" to="/">
          Name
        </MyLink>
        <div className="post-card__time">
          28 february
        </div>
      </div>
      {/* -------------- BODY -------------- */}
      <div className="post-card__body">
        <div className="post-card__text-content">
          <MyLink to="/" className="post-card__title">
            You don't know Javascript yet.
          </MyLink>
          <p className="post-card__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem earum error harum nulla rerum? Delectus impedit maiores optio?
          </p>
        </div>
        <div className="post-card__img-wrapper">
          <img
            src={`https://picsum.photos/400/200/?random=${random}`}
            alt="post image"
          />
        </div>
      </div>
      {/* -------------- FOOTER -------------- */}
      <div className="post-card__footer">
        <div className="post-card__additional-info">
          <div className="post-card__category">
            React
          </div>
        </div>
        <ul className="post-card__actions-list">
          <li
            className="post-card__actions-item"
            onClick={handleAddFavourite}
            style={{
              color: isFavourite ? "rgba(102,102,102,0.5)" : "#222",
            }}
          >
            <AddBookmark className="post-card__actions-item-icon"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostCard;
