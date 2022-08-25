import React, {useState} from 'react';
import UserPosts from "./UserPosts";
import AboutMe from "./AboutMe";

const UserProfileNav = [
  {
    name: "Home",
    path: "profile/home"
  },
  {
    name: "Bookmarks",
    path: "profile/bookmarks"
  },
  {
    name: "About",
    path: "profile/about"
  },
]

const UserProfile = () => {
  let Component;
  const [page, setPage] = useState("profile/home");

  switch (page) {
    case "profile/home": {
      Component = <UserPosts/>;
      break;
    }
    case "profile/bookmarks": {
      Component = <h3>User Bookmarks page</h3>;
      break;
    }
    case "profile/about": {
      Component = <AboutMe/>;
      break;
    }
    default: {
      Component = <div/>;
    }
  }


  const handleUserPage = (pageId) => {
    setPage(pageId);
  }

  return (
    <div className="user-profile">
      <div className="user-profile__header">
        <h2 className="user-profile__name">
          Ilhom Yuldoshev
        </h2>
      </div>
      <div className="user-profile__body">
        <ul className="user-profile__nav-list">
          {
            UserProfileNav.map(({name, path}, idx) => (
              <li
                key={idx}
                className={`user-profile__nav-item ${path === page ? "user-profile__nav-item--active" : ""}`}
              >
                <span
                  onClick={() => handleUserPage(path)}
                  className="user-profile__nav-link"
                >
                  {name}
                </span>
              </li>
            ))
          }
        </ul>
      </div>
      {Component}
    </div>
  );
};

export default UserProfile;
