import React from 'react';
import MyNavLink from "../../Atoms/MyNavLink";
import Router from "next/router";
import {useContextSelector} from "use-context-selector";
import {ModalContext} from "../../../Context/ModalContext";
import ModalTypes from "../../../Constants/ModalTypes";
import {HomeSvg, ProfileSvg, Saved, WriteSvg} from "../../../Svgs";

const Navbar = () => {
  const router = Router;
  const mDispatch = useContextSelector(ModalContext, v => v.actions.dispatch)
  const isAuth = false;

  const openModal = () => {
    mDispatch({type: ModalTypes.LOGIN_FORM});
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
        {/*<li className="site-nav__nav-item">*/}
        {/*  <MyNavLink to="/search" className="site-nav__nav-link">*/}
        {/*    <HomeSvg className={"site-nav__nav-img"} />*/}
        {/*  </MyNavLink>*/}
        {/*</li>*/}
        <li className="site-nav__nav-item">
          <MyNavLink to="/savedPosts" className="site-nav__nav-link">
            <Saved className={"site-nav__nav-img"}/>
          </MyNavLink>
        </li>
        <li className="site-nav__nav-item site-nav__nav-item--write">
          <MyNavLink to="/writePost" className="site-nav__nav-link">
            <WriteSvg className={"site-nav__nav-img"}/>
          </MyNavLink>
        </li>
        <li className="site-nav__nav-item site-nav__nav-item--profile">
          {
            isAuth
              ? (
                <MyNavLink to="/profile" className="site-nav__nav-link">
                  <ProfileSvg className={"site-nav__nav-img"}/>
                </MyNavLink>
              )
              : (
                <div onClick={openModal} className="site-nav__nav-link">
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
