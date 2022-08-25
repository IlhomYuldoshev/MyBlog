import React, {useRef} from 'react';
import MyLink from "../../../Atoms/MyLink";
import useClickOutside from "../../../../Hooks/UseClickOutside";
import {useContextSelector} from "use-context-selector";
import AuthContext from "../../../../Context/AuthContext";
import AuthActions from "../../../../Context/AuthContext/AuthActions";

const UserPopup = ({className, setIsVisiblePopup}) => {
  const popupRef = useRef(null);
  const authDispatch = useContextSelector(AuthContext, v => v.dispatch);

  const handleLogout = () => {
    authDispatch(AuthActions.logout());
  }

  useClickOutside(popupRef, () => {
    setIsVisiblePopup(false);
  });

  return (
    <div ref={popupRef} className={`user-popup ${className ? className : ""}`}>
      <div className="user-popup__inner">
        <ul className="user-popup__list">
          <li className="user-popup__item">
            <MyLink className="user-popup__link" to="/profile">
              Profile
            </MyLink>
          </li>
          <li className="user-popup__item">
            <MyLink className="user-popup__link" to="/profile/settings">
              Settings
            </MyLink>
          </li>
          <li className="user-popup__item">
            <div onClick={handleLogout} className="user-popup__link">
              Logout
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserPopup;
