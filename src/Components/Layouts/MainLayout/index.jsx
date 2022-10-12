import React from 'react';
import Head from "next/head";

const MainLayout = ({meta, navbar, sidebar, children}) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
        <meta name="description" content={meta.description}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="main-layout">
        <div className="myContainer main-layout__container">
          <div className="main-layout__left-sidebar">
            {navbar}
          </div>
          <div className="main-layout__center">
            {children}
          </div>
          <div className="main-layout__right-sidebar">
            <div className="right-sidebar__inner">
              {sidebar}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
