import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Loginscreen from './Loginscreen'
// injectTapEventPlugin();
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      loginPage: [],
      uploadScreen: []
    }
  }
  componentWillMount() {
    let loginPage = [];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({ loginPage:loginPage })
  }

  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        // {this.state.uploadScreen}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default App;

