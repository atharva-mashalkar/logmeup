const router = require('express').Router();
const Signup = require('../models/signup.model');
const jwt = require('jsonwebtoken');


router.route('/new').get((req, res) => {
	jwt.verify(req.token , 'secretkey' , (err , authData) => {	
		if(err){
			res.sendStatus(403);
		}else{
			console.log('User given access');
			res.json(authData.user);
		}
	});
});

module.exports = router;