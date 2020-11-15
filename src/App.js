import './App.css';
import { Button, Form, FormGroup, Label, Input, Row, Col, FormText } from 'reactstrap';

function App(props) {
  return (

    <div className="App">
      <header className="App-header">
        <div className="container-form">
          <div className="wrap-form">
            <h2>Desafio Cappta</h2>
            <h4>Explorando Marte</h4>

            <Row>
              <Col md={4}>
                  <Label>Tamanho do Mapa</Label>
                  <Input className="input" id="mapa">
                  </Input>
              </Col>
              
              <Col md={4}>
                  <Label for="examplePassword">Posição X</Label>
                  <Input className="input" id="posicaoX"/>
              </Col>

              <Col md={4}>
                  <Label for="examplePassword">Posição Y</Label>
                  <Input className="input" id="posicaoY"/>
              </Col>
            </Row>

            <Row className="espacamento">
              <Col md={6}>
                  <Label>Direção</Label>
                  <Input className="input" id="direcao">
                  </Input>
              </Col>
              
              <Col md={6}>
                  <Label for="examplePassword">Sequencia</Label>
                  <Input className="input" id="sequencia"/>
              </Col>
            </Row>

            <Row className="espacamento button-center">
              <Button outline color="primary" onclick="calc()">Calcular</Button>
            </Row>
          </div>
        </div>      
      </header>
    </div>
  );
}

function calc() {
  
}

export default App;