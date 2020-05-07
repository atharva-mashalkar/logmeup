import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Login from './components/LoginForm'
import Signup from './components/SignupForm'
import Home from './components/Home'
import User from './components/User'
import setAuthorizationToken from './redux/auth';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

setAuthorizationToken(localStorage.jwtToken);

function App() {
  return (
	  <Provider store = {store}>
	    <Router>
	      <div className="App">
	        <Navbar/>
	        <Route path = '/' exact component = {Home} />
	        <Route path = '/contact'  component = {Contact} />
	        <div style = {{marginTop : '4rem'}}>	  
	          <Route path = '/login'  component = {Login} /> 
	        </div>
	        <div style = {{marginTop : '4rem'}}>        
	          <Route path = '/signup'  component = {Signup} />
	        </div>
	        <Route path = '/newuser'  component = {User} />
	      </div>
	    </Router>
	  </Provider>
  );
}

export default App;
