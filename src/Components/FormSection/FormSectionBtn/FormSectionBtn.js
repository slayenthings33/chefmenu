import React, { Component } from 'react';
import './FormSectionBtn.css';
import AddDishBtn from './AddDishBtn/AddDishBtn'
import GenerateQRBtn from './GenerateQRBtn/GenerateQRBtn';
class FormSectionBtn extends Component {
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
      <div id='formBtnRow'>
        <AddDishBtn/>
        <GenerateQRBtn/>
      </div>
    );
  }
}

export default FormSectionBtn;