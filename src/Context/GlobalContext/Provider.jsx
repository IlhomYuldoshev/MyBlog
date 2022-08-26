import React from 'react';
import GlobalContext from "./Context";
import useWindowWidth from "../../Hooks/useWindowWidth";

const GlobalContextProvider = ({children}) => {
  const [width] = useWindowWidth();

  const device = {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 992,
    isLaptop: width >= 992
  };

  return (
    <GlobalContext.Provider value={{
      state: {
        clientWidth: width,
        device,
      },
      actions: {

      }
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
