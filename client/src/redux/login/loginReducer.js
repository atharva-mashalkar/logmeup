import { CHECK_EMAIL, CHECK_PASSWORD } from './loginTypes';

const initialState = {
	Email : '',
	Password : '',
}

const loginReducer = (state = initialState , action) => {
	switch(action.type){
		case CHECK_EMAIL :
			return {
				...state,
				Email : action.payload
			}
		case CHECK_PASSWORD :
			return {
				...state,
				Password : action.payload
			} 
		default : return state
	}
}

export default loginReducer;