import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginIcon: 'images/login.png'
    };
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="bannerContainer" id="loginContainer">
        <label htmlFor="">Login</label>
        <img id="loginIcon" src={this.state.loginIcon} alt=""/>
      </div>
    );
  }
}

export default Login;