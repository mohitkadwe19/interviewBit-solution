class Stack {

  // Array is used to implement stack 
  constructor() {
    this.items = [];
  }

  // push function 
  push(element) {
    // push element leto the list items 
    this.items.push(element);
  }
  // pop function 
  pop() {

    if (this.items.length == 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // isEmpty function 
  empty() {
    // return true if stack is empty 
    return this.items.length == 0;
  }

  // top function 
  top() {
    return this.items[this.items.length - 1];
  }

}

function isOp(c) {
  return (c == '+' || c == '-' || c == '*' || c == '/');
}


function braces(A) {


  let st = new Stack();

  for (let i = 0; i < A.length; i++) {
    if (A[i] == '(' || isOp(A[i])) {
      st.push(A[i]);
    }
    else if (A[i] == ')') {
      if (st.top() == '(') {
        return 1;
      }
      while (isOp(st.top())) {
        st.pop();
      }
      st.pop();
    }
  }
  return 0;

}

let A = "((a+b))";
console.log(braces(A));