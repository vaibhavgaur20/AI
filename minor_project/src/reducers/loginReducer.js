import { LOGIN, LOGIN_FAILED, LOGOUT, LOGOUT_FAIL, LOGIN_MESSAGE_RESET } from '../actions/types'

const initialState = {
  isLoggedIn: false,
  userDetails: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userDetails: action.payload,
        loginMessage: false,
        isLoggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        userDetails: "",
        loginMessage: action.payload,
        isLoggedIn: false,
      };
    case LOGIN_MESSAGE_RESET:
      return {
        ...state,
        loginMessage: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userDetails: "",
      };
    case LOGOUT_FAIL:
        return{
            ...state,
            isLoggedIn: true
        }
    default:
      return state;
  }
}
