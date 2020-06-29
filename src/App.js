import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, InputGroup, Button,Card} from 'react-bootstrap';
import HuffmanEncoding from './components/HuffmanEncoding'
import ShannonEncoding from './components/ShannonEncoding'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      input: 'Hello',
      encodeResult: <div className='text-center'>Choose compression !!!</div>,
      isHuffman: false,
      isShannon: false
    }
  }
  showHuffmanResult(){
    if(this.state.input.length < 2){
      alert('Too short string');
    }else{
      this.setState({encodeResult:<HuffmanEncoding input={this.state.input} />})
    }
  }
  showShannoResult(){
    if(this.state.input.length < 2){
      alert('Too short string');
    }else{
      this.setState
      this.setState({encodeResult:<ShannonEncoding input={this.state.input} />})
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
            onChange={(e) => {this.setState({input: e.target.value})}}
          />
          <InputGroup.Append>
            <Button active={true} variant="outline-primary" onClick={(e)=>{this.showHuffmanResult()}}>Huffman</Button>
            <Button variant="outline-primary"onClick={(e)=>{this.showShannoResult()}}>Shannon</Button>
          </InputGroup.Append>
        </InputGroup>
        <Card>
          <Card.Body>{this.state.encodeResult}</Card.Body>
        </Card>
      </Container>
    );
  }
}

export default App;
