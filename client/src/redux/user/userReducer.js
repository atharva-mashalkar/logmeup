import { CHECK_USER_REQUEST , CHECK_USER_SUCCESS , CHECK_USER_ERROR } from './userTypes';

const initialState = {
	Loading: true,
	FirstName : '',
	LastName : '',
	Email : '',
	ErrMsg : ''
}

const loginReducer = (state = initialState , action) => {
	switch(action.type){
		case CHECK_USER_REQUEST:
			return{
				...state
			}
		case CHECK_USER_SUCCESS :
			return{
				...state,
				Loading: false,
				FirstName : action.payload.FirstName,
				LastName : action.payload.LastName,
				Email : action.payload.Email
			}
		case CHECK_USER_ERROR :
			return{
				...state,
				Loading: false,
				ErrMsg : action.payload
			} 
		default : return state
	}
}

export default loginReducer;