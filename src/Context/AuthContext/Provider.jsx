import React, {useCallback, useEffect, useReducer} from 'react';
import AuthContext from "./Context";
import AuthActions from "./AuthActions";

export const AuthTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
}

export const initialState = {
  isAuth: false,
  user: null,
  isLoading: false
}

const AuthProvider = ({children}) => {
  const [state, reducerDispatch] = useReducer(authReducer, initialState);
  const dispatch = useCallback(authDispatch(reducerDispatch), []);

  useEffect(() => {
    dispatch(AuthActions.checkAuth());
  }, [])

  return (
    <AuthContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


// -------------- REDUCER -------------------------------------------
function authReducer(state, action) {
  switch (action.type) {
    case AuthTypes.LOGIN: {
      return {
        ...state,
        user: action.payload,
        isAuth: true
      };
    }
    case AuthTypes.LOGOUT: {
      return {
        ...state,
        user: null,
        isAuth: false
      };
    }
    default: {
      return state;
    }
  }
}



// -------------------- TIPA REDUX THUNK ----------------
function authDispatch(dispatch) {
  return function (objOrFunc) {
    if (objOrFunc instanceof Function) {
      objOrFunc(dispatch);
    }
    dispatch(objOrFunc);
  }
}
