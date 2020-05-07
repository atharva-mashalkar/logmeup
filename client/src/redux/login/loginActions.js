import { CHECK_EMAIL, CHECK_PASSWORD } from './loginTypes';
import axios from 'axios';
import setAuthorizationToken from '../auth';

export const checkEmail = (email) => {
	return {
		type : CHECK_EMAIL,
		payload : email
	}
}

export const checkPassword = (password) => {
	return {
		type : CHECK_PASSWORD,
		payload : password
	}
}


export const checkUser = (Email , Password) => {
	const login = {
		 Email , Password
	}
	axios.post('http://localhost:5000/login/find' , login)
		.then(res => {
			const token = res.data.token;
				localStorage.setItem('jwtToken' , token);
			if(res.data.user === null){
				  window.location = '/login'
			}else{
				setAuthorizationToken(token);
				window.location = '/newuser' 
			}
		})
		.catch(err => {
			 window.location = '/login'
			console.log(err)
		});

}
