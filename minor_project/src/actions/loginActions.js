import { LOGIN, LOGOUT, LOGOUT_FAIL, LOADING, LOGIN_FAILED, LOGIN_MESSAGE_RESET, SIGNUP, SIGNUP_FAILED, SIGNUP_MESSAGE_RESET, LOGIN_VERIFY } from './types.js';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const server = 'http://159.65.157.59/'

//http://159.65.157.59/
//http://localhost:3000/spkct/

export const loginMessageReset = () => dispatch => {
  dispatch({
    type : LOGIN_MESSAGE_RESET,
    payload: false
  })
}

export const signUpMessageReset = () => dispatch => {
  dispatch({
    type : SIGNUP_MESSAGE_RESET,
    payload: false
  })
}

export const authLogin = (email, password) => (dispatch, getState) => {

  axios({
        url: `${server}userlogin/`,
        method: 'post',
        data: JSON.stringify({ email: email,
                password: password
              }),
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
      }).then(data => {
        switch(data.status){
          case 200:
            dispatch({
              type:LOGIN,
              payload: data.data
            })
            dispatch({
                type: LOADING
            })
            break;
          case 202:
            dispatch({
              type: LOGIN_VERIFY,
              payload: data.data
            })
            dispatch({
              type: LOADING
            })
            break;
          case 204:
              dispatch({
                type: LOGIN_FAILED,
                payload: "User does not exist."
              })
              dispatch({
                type:LOADING
              })
              break;
            default:
        }
      })

      .then(() => {})
    .catch(err => {
        if (err.response) {
            switch(err.response.status){
                case 401: {
                    dispatch({
                        type: LOGIN_FAILED,
                        payload: "Invalid credentials. Check your email and password."
                    })
                     dispatch({
                      type: LOADING
                    })
                    break;
                }
                case 403: {
                    dispatch({
                        type: LOGIN_FAILED,
                        payload: "Something went wrong. Login Failed."
                    })
                     dispatch({
                      type: LOADING
                    })
                    break;
                }
                case 500: {
                    dispatch({
                        type: LOGIN_FAILED,
                        payload: "Oops! Something went wrong. Please try again later."
                    })
                    dispatch({
                     type: LOADING
                   })
                    break;
                }
                default: {
                    dispatch({
                        type: LOGIN_FAILED,
                        payload: "Something went wrong. Please try again later."
                    })
                    dispatch({
                     type: LOADING
                   })
                    break;
                }
            }}else if (err.request) {
              // client never received a response, or request never left
              console.log(err);
            } else {
              // anything else
              console.log(err);
            }
        }
    )
}

export const authLogout = () => dispatch => {
  axios({
        url: `${server}userlogout/`,
        method: 'post',
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
      }).then(data => dispatch({
        type: LOGOUT,
        payload: data
      })).catch(data => dispatch({
        type: LOGOUT_FAIL,
        payload: data}))
}

export const authSignup = (firstName, lastName, username, email, password) => dispatch => {
    const userData = {
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password
    }

    axios({
        url: `${server}userregister/`,
        method:'post',
        data: JSON.stringify(userData),
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                }
    }).then(data => dispatch({
        type: SIGNUP,
        payload: data.data
    })).then(() => dispatch({
        type: LOADING
    })).catch(err => {
            if (err.response) {
                switch(err.response.status){
                    case 400: {
                        dispatch({
                            type: SIGNUP_FAILED,
                            payload: err.response.data.message
                        })
                         dispatch({
                          type: LOADING
                        })
                        break;
                    }
                    case 403: {
                        dispatch({
                            type: SIGNUP_FAILED,
                            payload: "Something went wrong. Signup Failed."
                        })
                         dispatch({
                          type: LOADING
                        })
                        break;
                    }
                    case 409: {
                      dispatch({
                          type: SIGNUP_FAILED,
                          payload: err.response.data.message
                      })
                       dispatch({
                        type: LOADING
                      })
                      break;
                  }
                    case 500: {
                        dispatch({
                            type: SIGNUP_FAILED,
                            payload: "Oops! Something went wrong. Please try again later."
                        })
                        dispatch({
                         type: LOADING
                       })
                        break;
                    }
                    default: {
                        dispatch({
                            type: SIGNUP_FAILED,
                            payload: "Something went wrong. Please try again later."
                        })
                        dispatch({
                         type: LOADING
                       })
                        break;
                    }
                }}else if (err.request) {
                  // client never received a response, or request never left
                  console.log(err);
                } else {
                  // anything else
                  console.log(err);
                }
            }
        )
}
