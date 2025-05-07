class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.top) {
      return null;
    }
    if(this.top === this.bottom) {
      this.bottom = null;
    }
    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
// console.log(myStack.push('google'));
// console.log(myStack.push('udemy'));
// console.log(myStack.push('discord'));
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('discord');
// myStack.pop();
// myStack.pop();
// console.log(myStack.pop());

class StackArray {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value){
    this.array.push(value);
    return this;
  }

  pop(){
    this.array.pop();
    return this;
  }
}

const myStackArray = new StackArray();
// console.log(myStackArray.peek());
myStackArray.push('google');
myStackArray.push('udemy');
myStackArray.push('discord')
// console.log(myStackArray.push('discord'));
console.log(myStackArray.pop());
console.log(myStackArray.pop());
console.log(myStackArray.pop());