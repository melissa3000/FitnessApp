import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
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
				<MuiThemeProvider>
					<div>
					<AppBar title="Register"/>

						<TextField 
						hintText="Enter your username"
						floatingLabelText="Username"
						onChange = {(event, newValue) =>
						this.setState({username:newValue})}
					/>
					<br/>
					<TextField 
						hintText="Enter your email"
						type="email"
						floatingLabelText="Email"
						onChange = {(event, newValue) =>
						this.setState({email:newValue})}
					/>
					<br/>
					<TextField 
					hintText="Enter your password"
					type="password"
					floatingLabelText="Password"
					onChange = {(event, newValue) =>
					this.setState({password:newValue})}
					/>
					<br/>
					<Button variant="contained" label="Register" color="primary" primary={true} style={style} onClick={(event) => this.handleClick(event)}>
					Register
				</Button>
					</div>
				</MuiThemeProvider>
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