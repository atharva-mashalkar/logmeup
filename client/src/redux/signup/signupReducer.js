import { ADD_FIRSTNAME, ADD_LASTNAME, ADD_DOB, ADD_EMAIL, ADD_PASSWORD } from './signupTypes';

const initialState = {
	FirstName : '',
	LastName : '',
	DOB : null,
	Email : '',
	Password : '',
}

const signupReducer = (state = initialState , action) => {
	switch(action.type){
		case ADD_FIRSTNAME :
			return {
				...state,
				FirstName : action.payload
			}
		case ADD_LASTNAME :
			return {
				...state,
				LastName : action.payload
			}
		case ADD_DOB :
			return {
				...state,
				DOB : action.payload
			}
		case ADD_EMAIL :
			return {
				...state,
				Email : action.payload
			}
		case ADD_PASSWORD :
			return {
				...state,
				Password : action.payload
			}
		default : return state
	}
}

export default signupReducer;