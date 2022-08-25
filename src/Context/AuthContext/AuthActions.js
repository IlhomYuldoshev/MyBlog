import AuthProvider from "../../Data/Providers/AuthProvider";
import {AuthTypes} from "./Provider";
import {API_URL} from "../../Services/http";
import axios from "axios";

const AuthActions = {
  login(email, password) {
    return async (dispatch) => {
      try {
        const response = await AuthProvider.login(email, password);
        console.log(1111,response);
        localStorage.setItem("token", response.data.accessToken);

        dispatch({type: AuthTypes.LOGIN, payload: response.data?.user});
      } catch (err) {
        // TODO ---------- ERROR TOASTIFY ---------------------------------------
        console.log(err?.response?.data?.message);
      }
    }
  },

  registration(email, password) {
    return async (dispatch) => {
      try {
        const response = await AuthProvider.registration(email, password);
        localStorage.setItem("token", response.data.accessToken);
        dispatch({type: AuthTypes.LOGIN, payload: response.data?.user});
      } catch (err) {
        // TODO ---------- ERROR TOASTIFY ---------------------------------------
        console.log(err?.response?.data?.message);
      }
    }
  },

  logout() {
    return async (dispatch) => {
      try {
        const response = await AuthProvider.logout();
        localStorage.removeItem("token");
        dispatch({type: AuthTypes.LOGOUT});
      } catch (err) {
        // @ts-ignore
        console.log(err?.response?.data?.message);
      }
    }
  },

  checkAuth() {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
        localStorage.setItem("token", response.data.accessToken);
        dispatch({type: AuthTypes.LOGIN, payload: response.data?.user});
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export default AuthActions;
