import React, { Component } from 'react';
import './Imagen.css';
import Form from 'react-bootstrap/Form';

class Imagen extends Component {
  constructor(props){
    super(props);
    this.state = {
      uploadMessage: 'Subir fichero',
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
      <div className="formElementContainer" id="imageFormContainer">
        <form>
          <label>
            <p className="formLabel">{this.state.uploadMessage}</p>
            <input id='imageSubmitBtn' type="submit" name="name" />
            <p id='uploadStatus'>Ningún archivo seleccionado</p>
          </label>
        </form>
      </div>
    );
  }
}

export default Imagen;

{/* <Form>
  <Form.Group>
  <Form.File id='imageForm' label="Selecciona fichero" custom='true' />
  </Form.Group>
</Form> */}