import React, {useReducer} from 'react';
import ModalContext from "./Context";
import ModalType from "../../Constants/ModalTypes";
import ModalTypes from "../../Constants/ModalTypes";

export const initialState = {
  isOpen: false,
  type: "",
}


const ModalProvider = ({children}) => {
  const [value, dispatch] = useReducer(modalReducer, initialState)

  return (
    <ModalContext.Provider value={{
      value,
      actions: {
        dispatch
      },
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

// ------------ REDUCER -------------
function modalReducer (state, action) {
  switch (action.type) {
    case ModalTypes.LOGIN_FORM: {
      return {
        ...state,
        isOpen: true,
        modalType: ModalTypes.LOGIN_FORM
      }
    }
    case ModalTypes.REGISTRATION_FORM: {
      return {
        ...state,
        isOpen: true,
        modalType: ModalTypes.REGISTRATION_FORM
      }
    }
    case ModalTypes.SEARCH: {
      return {
        ...state,
        isOpen: true,
        modalType: ModalTypes.SEARCH
      }
    }
    case "CLOSE": {
      return {
        ...state,
        isOpen: false
      }
    }
    default: {
      return state
    }
  }
}
