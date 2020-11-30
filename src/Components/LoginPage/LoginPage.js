import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <input type="text" value="usuario" className="loginInput"/><br/>
        <input type="text" value="contrasena" className="loginInput"/>
        {/* <p>https://codepen.io/frytyler/pen/EGdtg</p> */}
      </div>
    );
  }
}

export default LoginPage;