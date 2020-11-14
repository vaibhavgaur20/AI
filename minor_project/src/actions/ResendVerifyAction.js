import { RESEND_VER, RESEND_VER_FAIL, LOADING } from './types';
import axios from 'axios';

const server = 'http://159.65.157.59/'

//http://159.65.157.59/
//http://localhost:3000/spkct/

export const resendVerification = (email) => (dispatch) => {
    axios({
          url: `${server}resendver/`,
          method: 'post',
          data: JSON.stringify({ email: email }),
          headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                }
        }).then(res => {
                switch(res.status){
                    case 200:
                        dispatch({
                          type: RESEND_VER,
                          payload: "Email Verification Resent."
                        })
                        dispatch({
                          type: LOADING
                        })
                        break;
                    default:
                        dispatch({
                          type: RESEND_VER,
                          payload: "Email Verification Resent."
                        })
                        dispatch({
                          type: LOADING
                        })
                }
        }).catch(err => {
            dispatch({
                type: RESEND_VER_FAIL
            })
            dispatch({
              type: LOADING
            })
            console.log(err)
        })
}
