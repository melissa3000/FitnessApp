import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
// import UploadScreen from './UploadScreen';
import Button from '@material-ui/core/Button';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}
	render() {
		return (
			<div>
				<MuiThemeProvider>
					<div>
					<AppBar title="Login"/>

						<TextField
						hintText="Enter your username"
						floatingLabelText="Username"
						onChange = {(event, newValue) =>
						this.setState({username:newValue})}
						/>
						<br/>
						<TextField
						type="password"
						hintText="Enter your password"
						floatingLabelText="Password"
						onChange = {(event, newValue) =>
						this.setState({password:newValue})}
						/>
						<br/>
						<Button variant="contained" label="Submit" color="primary" primary={true} style={style} onClick={(event) => this.handleClick(event)}>
							Submit
						</Button>
					</div>
				</MuiThemeProvider>
			</div>
		);
	}

	handleClick(event) {
		let apiBaseUrl = "http://localhost:5000/express-backend";
		let self = this;
		let payload={
			"email":this.state.username,
			"password": this.state.password
		}
		axios.post(apiBaseUrl+'login', payload)
		.then(function(response) {
			console.log(response);
			if (response.data.code === 200) {
				console.log("Login successful");
				// let uploadScreen = [];
				// uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
				// self.props.appContext.setState({loginPage:[], uploadScreen:uploadScreen})
			}
			else if (response.data.code === 204) {
				console.log("Username and password do not match");
				alert("username and password do not match")
			}
			else {
				console.log("Username does not exist");
				alert("Username does not exist")
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


export default Login;