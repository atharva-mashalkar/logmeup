import { ADD_FIRSTNAME, ADD_LASTNAME, ADD_DOB, ADD_EMAIL, ADD_PASSWORD } from './signupTypes';
import axios from 'axios'


export const addFirstName = (firstName) => {
	return {
		type : ADD_FIRSTNAME,
		payload : firstName
	}
}

export const addLastName = (lastName) => {
	return {
		type : ADD_LASTNAME,
		payload : lastName
	}
}

export const addDOB = (DOB) => {
	return {
		type : ADD_DOB,
		payload : DOB
	}
}

export const addEmail = (email) => {
	return {
		type : ADD_EMAIL,
		payload : email
	}
}

export const addPassword = (password) => {
	return {
		type : ADD_PASSWORD,
		payload : password
	}
}

export const signup = (FirstName , LastName , DOB , Email , Password) => {
	const newSignup = {
		FirstName , LastName , DOB , Email , Password
	}
	console.log(FirstName , LastName ,  DOB , Email , Password);
	axios.post('https://logmeup.herokuapp.com/signup/add' , newSignup)
			.then(res => console.log("Data saved: " + res.data))
			.catch(err => console.log(err));
}

