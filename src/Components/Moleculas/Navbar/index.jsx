import React, {useState} from 'react';
import MyNavLink from "../../Atoms/MyNavLink";
import Router, {useRouter} from "next/router";
import {useContextSelector} from "use-context-selector";
import {ModalContext} from "../../../Context/ModalContext";
import ModalTypes from "../../../Constants/ModalTypes";
import {HomeSvg, ProfileSvg, Saved, WriteSvg, SearchSvg} from "../../../Svgs";
import AuthContext from "../../../Context/AuthContext";
import UserPopup from "./UserPopup";
import GlobalContext from "../../../Context/GlobalContext";

const Navbar = () => {
  const router = Router;
  const {isMobile, isLaptop} = useContextSelector(GlobalContext, v => v.state.device);
  const mDispatch = useContextSelector(ModalContext, v => v.actions.dispatch);
  const isAuth = useContextSelector(AuthContext, v => v.state.isAuth);
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const {pathname} = useRouter();

  // TODO norm kod yozish kerak
  const test = pathname === "/profile";


  const handleUserPopup = () => {
    setIsVisiblePopup(p => !p);
  }

  const openLoginModal = () => {
    mDispatch({type: ModalTypes.LOGIN_FORM});
  }
  const openSearchModal = () => {
    mDispatch({type: ModalTypes.SEARCH});
  }

  return (
    <div className="site-nav">
      <div className="site-logo site-nav__logo" onClick={() => router.push("/")}>
        <div className="site-logo__circle"/>
        <div className="site-logo__circle"/>
        <div className="site-logo__circle"/>
      </div>

      <ul className="site-nav__nav-list">
        <li className="site-nav__nav-item">
          <MyNavLink to="/" className="site-nav__nav-link">
            <HomeSvg className={"site-nav__nav-img"}/>
          </MyNavLink>
        </li>

        {
          !isLaptop
          && <li className="site-nav__nav-item">
              <div
                onClick={openSearchModal}
                className="site-nav__nav-link"
              >
                <SearchSvg className={"site-nav__nav-img"} />
              </div>
            </li>
        }

        {
          !isMobile && (
            <li className="site-nav__nav-item">
              <MyNavLink to="/savedPosts" className="site-nav__nav-link">
                <Saved className={"site-nav__nav-img"}/>
              </MyNavLink>
            </li>
          )
        }

        <li className="site-nav__nav-item site-nav__nav-item--write">
          <MyNavLink to="/writePost" className="site-nav__nav-link">
            <WriteSvg className={"site-nav__nav-img"}/>
          </MyNavLink>
        </li>
        <li className="site-nav__nav-item site-nav__nav-item--profile">
          {
            isAuth
              ? (
                <div className={`site-nav__nav-link ${test && "activeNavLink"}`}>
                  <div onClick={handleUserPopup}>
                    <ProfileSvg className={"site-nav__nav-img"} />
                  </div>
                  {isVisiblePopup && (
                    <UserPopup
                      setIsVisiblePopup={setIsVisiblePopup}
                      className="site-nav__user-popup"
                    />
                  )}
                </div>
              )
              : (
                <div onClick={openLoginModal} className="site-nav__nav-link">
                  <ProfileSvg className={"site-nav__nav-img"}/>
                </div>
              )
          }
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
