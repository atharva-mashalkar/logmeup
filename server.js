const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const signuproutes = require('./routes/signuproutes');
const loginroutes = require('./routes/loginroutes');
const userroutes = require('./routes/userroutes');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://Atharva:SAM@signup-login-amp2r.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri , {useNewUrlParser : true , useCreateIndex: true , useUnifiedTopology: true });
mongoose.set('useFindAndModify',false);

const connection = mongoose.connection;
connection.once('open'  , () => {
	console.log('MongoDB database connection established successfully');
});

//JWT Middleware
app.use('/user', function (req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
  	const bearer = bearerHeader.split(' ');
  	const bearerToken = bearer[1];
  	req.token = bearerToken;
  	next();
  }else{
  	res.sendStatus(403);
  }
});

app.use('/signup' , signuproutes);
app.use('/login' , loginroutes);
app.use('/user' , userroutes);

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));
	app.get('*' , (req , res) => {
		res.sendFile(path.join(__dirname , 'client' , 'build' , 'index.html'));
	});
}

app.listen(port , () => {
	console.log(`Server is running on port : ${port}`);
});