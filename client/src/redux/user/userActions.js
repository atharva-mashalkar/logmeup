import { CHECK_USER_REQUEST , CHECK_USER_SUCCESS , CHECK_USER_ERROR } from './userTypes';
import axios from 'axios'

export const checkUserRequest = () => {
	return{
		type : CHECK_USER_REQUEST
	}
}

export const checkUserSuccess = (user) => {
	return{
		type : CHECK_USER_SUCCESS,
		payload : user
	}
}

export const checkUserError = (err) => {
	return{
		type : CHECK_USER_ERROR,
		payload : err
	}
}

export const fetchUser = () => {

	return(dispatch) => {
		axios.get('https://logmeup.herokuapp.com/user/new')
			.then(res => {
				const user = res.data
				dispatch(checkUserSuccess(user))
			})
			.catch(err => {
				const errMsg = err.message
				console.log(errMsg);
				dispatch(checkUserError(errMsg))
			})
		}
}