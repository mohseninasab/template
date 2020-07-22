import { authConstants } from "../constants";
import { baseServices } from "../services";
import { progressBarActions } from "./";
import { snackBarActions } from "./";
import { history } from '../helpers'

//##############################################################################
// base actions
//##############################################################################

export const baseActions = {
  login,
  logout,
  whoAmI,
  loginWithToken,
  saveCurrentPath,
  register,

};

//##############################################################################
// login action
//##############################################################################

function login(loginInfo) {

  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.login(loginInfo).then(
      response => {
        localStorage.setItem("token", JSON.stringify(response.token));
        localStorage.setItem("refreshToken", JSON.stringify(response.refreshToken));
        localStorage.setItem("user", JSON.stringify(response.user));

        dispatch(progressBarActions.stop());
        dispatch(success(response.user));

        let route = response.user.role === "admin" ? './admin-dashboard/' : './user-dashboard/';

        history.push(route);
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Connection Error!"));
      }
    );
  };

  function success(payload) {
    return { type: authConstants.USER_LOGIN_SUCCESS, payload };
  }
}

//##############################################################################
// login with token
//##############################################################################

function loginWithToken(action, data) {
  return dispatch => {
    baseServices.loginWithToken().then(
      response => {
        dispatch(action(data));
      },
      error => {
        dispatch(logout());
      }
    );
  };
}

//##############################################################################
// register action
//##############################################################################

function register(data) {
  return dispatch => {
    dispatch(progressBarActions.start());
    baseServices.register(data).then(
      response => {
        history.push('./login');
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarSuccess("در انتظار تایید ادمین"));
      },
      error => {
        dispatch(progressBarActions.stop());
        dispatch(snackBarActions.snackBarError("Error!"));
      }
    );
  };
}


//##############################################################################
// logout function
//##############################################################################

function logout() {
  history.push()
  return dispatch => {
     baseServices.logout().then(
      response => {
        dispatch({ type: authConstants.USER_LOGOUT_SUCCESS});
      },
      error => {
        dispatch({ type: authConstants.USER_LOGOUT_SUCCESS});
      }
    );
  };
}

//##############################################################################
// login action
//##############################################################################

function whoAmI(loginInfo) {
  return dispatch => {
    dispatch({ type: authConstants.GET_USER_INFO_SUCCESS, payload: JSON.parse(localStorage.getItem("user"))})
  };
}

//##############################################################################
// will save the current path
//##############################################################################

function saveCurrentPath(path) {
    return {type: authConstants.SAVE_CURRENT_PATH, payload: path}
}