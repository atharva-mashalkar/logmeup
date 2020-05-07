const router = require('express').Router();
const Signup = require('../models/signup.model');


router.route('/add').post((req, res) => {
	const { FirstName , LastName ,  DOB , Email , Password } = req.body;
	const newSignup = new Signup({FirstName , LastName , Email , DOB , Password});

	newSignup.save()
		.then(() => {
			console.log('User added to database');
			res.json('User added!')
		})
		.catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;