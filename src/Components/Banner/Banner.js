import React, { Component } from 'react';
import './Banner.css';
import Logo from './Logo/Logo'
import Login from './Login/Login'

class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {

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
      <div className="bannerContainer">
        <Logo/>
        <Login/>
      </div>
    );
  }
}

export default Banner;