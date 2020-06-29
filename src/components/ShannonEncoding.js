import React, { Component } from 'react';
import {Node,CharNode} from '../utilities/EncodeTree'
import {Row, Col } from 'react-bootstrap';

class ShannonEncoding extends Component {
    getEncodeString(){
        let input = this.props.input;
        let result = '';
        let headTree = this.getHeadTree(this.alphabet);
        headTree.setCode();
        let map = this.getMapCode();
        for(let i = 0; i < input.length; i++){
            result += map[input[i]];
        }
        console.log(this.alphabet);
        return result;
    }
    getMapCode(){
        let map = {};
        this.alphabet.forEach((a)=>{
            map[a.char] = a.code;
        })
        return map;
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
    getHeadTree(alphabet){
        if(alphabet.length > 1){
            let nodeData = this.divideAlphabet(alphabet);
            let firstNode = this.getHeadTree(nodeData.first);
            let secondNode = this.getHeadTree(nodeData.second);
            return new Node([firstNode,secondNode]);
        }else{
            return alphabet[0]
        }
    }
    divideAlphabet(alphabet){
        let dividedArray ={
            first: [],
            second: []
        };
        let firstValue = 0 , secondValue = 0;
        alphabet.forEach(a => {
            if(firstValue > secondValue){
                secondValue += a.freq
                dividedArray.second.push(a);
            }else{
                firstValue += a.freq
                dividedArray.first.push(a);
            }
        });
        return dividedArray;
    }
    render() { 
        this.alphabet = this.getAlphabet();
        this.encodeString = this.getEncodeString();
        return <div>
        <h4 className='text-center'>Shannon</h4>
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
 
export default ShannonEncoding;