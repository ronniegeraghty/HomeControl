import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import fire from './config/Fire';

//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	componentDidMount() {
		this.authListener();
	}

	authListener() {
		fire.auth().onAuthStateChanged((user) => {
			//console.log(user);
			if (user) {
				this.setState({ user });
				//localStorage.setItem('user', user.uid);
			} else {
				this.setState({ user: null });
				//localStorage.removeItem('user');
			}
		});
	}

	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Switch>
					<Redirect exact path="/" to="/Home" />
					<Route path="/Home" component={Home} />
					<Route path="/Dashboard" component={Dashboard} />
				</Switch>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;

/* {this.state.user ? <Home /> : <Login />}
				{console.log('USER:')}
				{console.log(this.state.user)} */
