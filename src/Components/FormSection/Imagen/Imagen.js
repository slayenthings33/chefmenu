import React, { Component } from 'react';
import './Imagen.css';
import Form from 'react-bootstrap/Form';

class Imagen extends Component {
  constructor(props){
    super(props);
    this.state = {};
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
      <div className="formElementContainer" id="imageFormContainer">
        <Form>
          <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Example file input" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Imagen;