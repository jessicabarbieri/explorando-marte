import './App.css';
import { Button, Form, FormGroup, Label, Input, Row, Col, FormText } from 'reactstrap';
import React, { useState } from 'react';

const initialValue = {
  alturaMapa: 0,
  larguraMapa: 0,
  posicaoX: 0,
  posicaoY: 0,
  direcao: '',
  sequencia: '',

}

function App(props) {

  const [values, setValues] = useState(initialValue);

  function onChange(ev) {
    const {name, value} = ev.target;
    setValues({ ...values, [name]: value});

  }

  function onSubmit(ev) {
    ev.preventDefault();
    console.log(values)
    calcular(values)
  }

  return (

    <div className="App">
      <header className="App-header">

        <Form onSubmit={onSubmit} id="form">
          <div className="container-form">
            <div className="wrap-form">       
              <h4 className="espacamento">Explorando Marte</h4>
              <Row className="espacamento align-center">
                <Col md={3}>
                    <Label>Largura do Mapa</Label>
                    <Input className="input" name="alturaMapa" id="alturaMapa" onChange={onChange} />
                </Col>

                <Col md={3}>
                    <Label>Altura do Mapa</Label>
                    <Input className="input" name="larguraMapa" id="larguraMapa" onChange={onChange} />
                </Col>


                <Col md={3}>
                    <Label for="examplePassword">Posição X</Label>
                    <Input className="input" name="posicaoX" id="posicaoX" onChange={onChange} />
                </Col>

                <Col md={3}>
                    <Label for="examplePassword">Posição Y</Label>
                    <Input className="input" name="posicaoY" id="posicaoY" onChange={onChange} />
                </Col>
              </Row>

              <Row className="espacamento align-center">
              <Col md={4}>
                    <Label>Direção</Label>
                    <Input className="input" name="direcao" id="direcao" onChange={onChange} />
                </Col>
                
                <Col md={4}>
                    <Label for="examplePassword">Sequencia</Label>
                    <Input className="input" name="sequencia" id="sequencia" onChange={onChange} />
                </Col>
              </Row>

              <Row className="espacamento align-center">
                <Button outline color="primary" type="submit" onClick={onSubmit}>Calcular</Button>
              </Row>

              <Row className="espacamento align-center" id="resultado" name="resultado">
              
              </Row>
        
            </div>
          </div>
        </Form>  
      </header>
    </div>
  );
}




function calcular(values) {

  values.posicaoX = parseInt(values.posicaoX);
  values.posicaoY = parseInt(values.posicaoY);

  //validaCampos(values);
  //executaMovimentos(values)
}



export default App;