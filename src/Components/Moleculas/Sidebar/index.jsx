import React, {useState} from 'react';
import Button from "../../Atoms/Button";
import {useContextSelector} from "use-context-selector";
import {ModalContext} from "../../../Context/ModalContext";
import SearchInput from "../Search";
import ModalTypes from "../../../Constants/ModalTypes";
import AuthContext from "../../../Context/AuthContext";
import UserInfo from "../UserInfo";
import {useRouter} from "next/router";

const Sidebar = () => {
  const mDispatch = useContextSelector(ModalContext, v => v.actions.dispatch);
  const isAuth = useContextSelector(AuthContext, v => v.state.isAuth);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const openModal = () => {
    mDispatch({type: ModalTypes.LOGIN_FORM});
  }

  const onSubmitSearch = () => {
    if(searchValue.trim()) {
      router.push(`/search/${searchValue}`).then(() => {
        mDispatch({type: "CLOSE"});
      })
    }
  }

  return (
    <div className="sidebar">
      <SearchInput
        onSubmit={onSubmitSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
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
