import './App.css';
import { Button, Form, Label, Input, Row, Col } from 'reactstrap';
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
    //console.log(values)
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

              <Row className="espacamento align-center" id="resultado" name="resultado"></Row>
        
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

  validaCampos(values);
  //executaMovimentos(values)
}

function validaCampos(values) {

  var alturaMapa = document.getElementById('alturaMapa').value;
  var larguraMapa = document.getElementById('larguraMapa').value; 
  var direcao = document.getElementById('direcao').value; 
  var sequencia = document.getElementById('sequencia').value; 
  var posicaoX = document.getElementById('posicaoX').value; 
  var posicaoY = document.getElementById('posicaoY').value; 

  if (alturaMapa == '' || larguraMapa == '' || direcao == '' 
      || sequencia == '' || posicaoX == '' || posicaoY == '') {
        alert("Preencha todos os campos!");
  }

  if((direcao != 'N') || (direcao != 'S') || (direcao != 'E') || (direcao != 'W')) {
    alert("Informe uma direção válida! As letras possíveis são N, S, E, e W.");
  }
  
  for (var i = 0; i < sequencia.length; i++) {
    if ((!sequencia[i] == "M") && (sequencia[i] == "L") && (sequencia[i] == "R")) {
      alert("Informe uma sequencia válida! As letras possíveis são L, R e M.");
    }
  }

  executaMovimentos(values);

}

function executaMovimentos(values) {

  for (var i = 0; i < values.sequencia.length; i++) {
    
      if (values.sequencia[i] == 'M')
          moverParaFrente(values);
      
      else if (values.sequencia[i] == 'L')
          virar90GrausEsquerda(values);
     
      else if (values.sequencia[i] == 'R')
          virar90GrausDireita(values);

  }

  limparCampos();
  
  var element = document.getElementById('resultado');
  element.innerHTML = '<b> Resultado: '+ values.posicaoX + ', ' + values.posicaoY + ', ' + values.direcao +'</b>'
    
}

function limiteMapa(posicaoX, posicaoY, larguraMapa, alturaMapa) {
  if ((posicaoX >= 0 && posicaoX <= larguraMapa) && (posicaoY >= 0 && posicaoY <= alturaMapa)) {
    return true;
  }
  
  else {
    alert("A posição excede o tamanho limite do mapa!");
    return false;
  }
}

function moverParaFrente(values) {

  if(values.direcao == "N") {
    if (limiteMapa(values.posicaoX, values.posicaoY+1, values.larguraMapa, values.alturaMapa)) {
          values.posicaoY += 1;
        }
  }
    
  else if (values.direcao == "S") {
    if (limiteMapa(values.posicaoX, values.posicaoY-1, values.larguraMapa, values.alturaMapa)) {
      values.posicaoY -= 1;
    }
  }

  else if (values.direcao == "E") {
    if (limiteMapa(values.posicaoX+1, values.posicaoY, values.larguraMapa, values.alturaMapa)) {
      values.posicaoX += 1;
    }
  }

  else if (values.direcao == "W") {
    if (limiteMapa(values.posicaoX-1, values.posicaoY, values.larguraMapa, values.alturaMapa)) {
      values.posicaoX -= 1;
    }
  }
}

function virar90GrausEsquerda(values) {
  
  switch (values.direcao) {
      case 'N': values.direcao = 'W';
          break;

      case 'S': values.direcao = 'E';
          break;

      case 'E': values.direcao = 'N';
          break;

      case 'W': values.direcao = 'S';
          break;
  }
}

function virar90GrausDireita(values) {
  
  switch (values.direcao) {
      case 'N': values.direcao = 'E';
          break;

      case 'S': values.direcao = 'W';
          break;

      case 'E': values.direcao = 'S';
          break;

      case 'W': values.direcao = 'N';
          break;
  }
}

function limparCampos() {

  document.getElementById('alturaMapa').value='';
  document.getElementById('larguraMapa').value=''; 
  document.getElementById('direcao').value=''; 
  document.getElementById('sequencia').value=''; 
  document.getElementById('posicaoX').value=''; 
  document.getElementById('posicaoY').value=''; 
  
}

export default App;