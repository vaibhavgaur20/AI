import {combineReducers} from 'redux'
import postReducer from './postReducer'
import loadingReducer from './loadingReducer';
import loginReducer from "./loginReducer"
import loginVerifyErrorReducer from './loginVerifyErrorReducer';
import signupReducer from './signupReducer';



export default combineReducers({
    posts: postReducer,
    progress: loadingReducer,
    login: loginReducer,
    loginVerify: loginVerifyErrorReducer,
    signup: signupReducer
});