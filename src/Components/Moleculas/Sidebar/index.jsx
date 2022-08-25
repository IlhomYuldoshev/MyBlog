import React from 'react';
import Button from "../../Atoms/Button";
import {useContextSelector} from "use-context-selector";
import {ModalContext} from "../../../Context/ModalContext";
import SearchInput from "../Search";
import ModalTypes from "../../../Constants/ModalTypes";
import AuthContext from "../../../Context/AuthContext";
import UserInfo from "../UserInfo";

const Sidebar = () => {
  const mDispatch = useContextSelector(ModalContext, v => v.actions.dispatch);
  const isAuth = useContextSelector(AuthContext, v => v.state.isAuth);

  const openModal = () => {
    mDispatch({type: ModalTypes.LOGIN_FORM})
  }

  return (
    <div className="sidebar">
      <SearchInput/>
      <br/>
      <br/>
      {
        isAuth
        ? <UserInfo/>
        : <Button onClick={openModal} className="cta-btn">
            Login
          </Button>
      }
    </div>
  );
};

export default Sidebar;
