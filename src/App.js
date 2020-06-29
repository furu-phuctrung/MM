import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, InputGroup, Button, Row, Col } from 'react-bootstrap';
import HuffmanEncoding from './components/HuffmanEncoding'
import ShannonEncoding from './components/ShannonEncoding'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      input: 'Hello'
    }
  }
  render() {
    return (
      <Container>
        <h2 className='text-center'>Input</h2>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Input"
            value={this.state.input}
            onChange={(e) => { console.log(this.state); this.setState({input: e.target.value})}}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Compression</Button>
          </InputGroup.Append>
        </InputGroup>
        <Row>
          <Col>
            <h4 className='text-center'>Huffman</h4>
            <HuffmanEncoding input={'Hello'} />
          </Col>
          <Col>
            <h4 className='text-center'>Shannon</h4>
            <ShannonEncoding input={this.state.input} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
