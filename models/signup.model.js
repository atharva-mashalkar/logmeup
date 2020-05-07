const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signupSchema = new Schema({
	FirstName : String,
	LastName : String,
	DOB : String,
	Email : String,
	Password : String
},{
	timestamps: true,
});

const Signup = mongoose.model('Signup' , signupSchema);

module.exports = Signup;