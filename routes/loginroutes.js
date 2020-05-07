const router = require('express').Router();
const Signup = require('../models/signup.model');
const jwt = require('jsonwebtoken');


router.route('/find').post((req, res) => {
	Signup.findOne({Email : req.body.Email , Password : req.body.Password},(err,user) => {
		if(err){
			 res.status(400).json('Error:' + err)
		}else{
			jwt.sign({user}, 'secretkey' , { expiresIn : '10h'} , (err , token) => {
				console.log('JWT token generated and passed in the Client server')
				res.json({
					token,
					user
				});
			});
			
		}
	})
});


module.exports = router;