import React from 'react';
import {Node,CharNode} from '../utilities/EncodeTree'
import {Row, Col } from 'react-bootstrap';

export default class HuffmanEncoding extends React.Component{
    getEncodeString(){
        let input = this.props.input;
        let result = '';
        this.setAlphabetCode();
        let map = this.getMapCode();
        for(let i = 0; i < input.length; i++){
            result += map[input[i]];
        }
        return result;
    }

    getAlphabet(){
        const statisticalCharTable = {};
        const alphabet = [];
        let input = this.props.input;
        for(let i = 0; i < input.length; i++){
            if(statisticalCharTable[input[i]]){
                statisticalCharTable[input[i]]++;
            }else{
                statisticalCharTable[input[i]] = 1;
            }
        }
        for(let key in statisticalCharTable){
            alphabet.push(new CharNode(key,statisticalCharTable[key]));
        }
        return alphabet;
    }
    getMapCode(){
        let map = {};
        this.alphabet.forEach((a)=>{
            map[a.char] = a.code;
        })
        return map;
    }

    setAlphabetCode(){
        let alphabet = [...this.alphabet.sort((a,b)=>b.freq - a.freq)];
        while(alphabet.length > 1){
            alphabet.push(new Node([alphabet.pop(),alphabet.pop()]));
            alphabet = alphabet.sort((a,b)=>b.freq - a.freq);
        }
        alphabet[0].setCode();
    }

    render(){
        this.alphabet = this.getAlphabet();
        this.encodeString = this.getEncodeString();
        return <div>
        <h4 className='text-center'>Huffman</h4>
        <div>Compress Rate: {this.encodeString.length/(this.props.input.length*8)}</div>
        <h4>{this.encodeString}</h4>
            {this.alphabet.map(a=><Row key={a.char}>
                <Col>
                    Key: {a.char}
                </Col>
                <Col>
                    Code: {a.code}
                </Col>
            </Row>)}
        </div>;
    }
}