// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
import axios from 'axios';
// import UploadScreen from './UploadScreen';


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

					<div>

						<input type="text"
						hintText="Enter your username"
						floatingLabelText="Username"
						onChange = {(event, newValue) =>
						this.setState({username:newValue})}
						/>
						<br/>
						<input
						type="password"
						hintText="Enter your password"
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