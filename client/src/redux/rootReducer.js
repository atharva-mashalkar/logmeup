import { combineReducers } from 'redux'
import signupReducer from './signup/signupReducer'
import loginReducer from './login/loginReducer'
import userReducer from './user/userReducer'


const rootReducer = combineReducers({
	signup : signupReducer,
	login : loginReducer,
	user : userReducer
});

export default rootReducer