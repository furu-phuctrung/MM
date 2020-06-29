export class Node{
    constructor([node1,node2]){
        this.freq = node1.freq + node2.freq;
        this.left = node1;
        this.right = node2;
    }

    setCode(code = ''){
        this.left.setCode(code + '0');
        this.right.setCode(code + '1');
    }
}
export class CharNode{
    constructor(char, freq){
        this.char = char;
        this.freq = freq;
    }
    setCode(code){
        this.code = code;
    }
}