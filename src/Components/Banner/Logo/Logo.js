import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo:"/images/lucyGoo.jpg",
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
      <div className="bannerContainer" id="logoContainer">
        <img id="logo" src={this.state.logo} alt=""/>
      </div>
    );
  }
}

export default Logo;