import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: ''
		}
	}
	render() {
		return (
			<div>

					<div>

						<input type="text"
						hintText="Enter your username"
						floatingLabelText="Username"
						onChange = {(event, newValue) =>
						this.setState({username:newValue})}
					/>
					<br/>
					<input 
						hintText="Enter your email"
						type="email"
						floatingLabelText="Email"
						onChange = {(event, newValue) =>
						this.setState({email:newValue})}
					/>
					<br/>
					<input 
					hintText="Enter your password"
					type="password"
					floatingLabelText="Password"
					onChange = {(event, newValue) =>
					this.setState({password:newValue})}
					/>
					<br/>
					<button label="Submit" primary={true} style={style}
					onClick={(event) => this.handleClick(event)}/>
					</div>
	
			</div>
		);
	}

	handleClick(event) {
		let apiBaseUrl = "http://localhost:5000/express-backend";
		let self = this;
		let payload = {
			"username": this.state.username,
			"password": this.state.password,
			"email": this.state.email
		}
	axios.post(apiBaseUrl+'/register', payload)
		.then(function(response) {
			if (response.data.code === 200) {
				console.log("registration successful");
				let loginscreen = [];
				loginscreen.push(<Login parentContext={this}/>);
				let loginmessage = "User not registered. Please register."
				self.props.parentContext.setState({ loginscreen:loginscreen, 
					loginmessage:loginmessage,
				buttonLabel: "Register",
			isLogin: true
				});
			}
		})
		.catch(function(error) {
			console.log(error);
		});
	}
}

const style = {
	margin: 15,
};

export default Register;