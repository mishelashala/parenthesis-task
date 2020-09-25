function isBalanced(str) {
  const stack = [];

  const parentesisStack = str.split('');

  for(let i =0; i< parentesisStack.length; i++) {
    if(parentesisStack[i] === '(' || parentesisStack[i] === '[' || parentesisStack[i] === '{'){
      stack.push(parentesisStack[i]);
    }

    if(parentesisStack[i] === ')' || parentesisStack[i] === ']'  || parentesisStack[i] === '}'){
      if(!stack.length)  return false;

      console.log({parentesisStack, stack})
      if((parentesisStack[i] === ')' && stack[stack.length -1] === '(') ||
          (parentesisStack[i] === ']' && stack[stack.length -1] === '[')  ||
          (parentesisStack[i] === '}' && stack[stack.length -1] === '{')) {
        stack.pop();
      } else {
        console.log(parentesisStack[i], stack[stack.length])
        return false;
      }
    }
  }
  console.log({parentesisStack, stack})
  return !stack.length ;
}

module.exports = {
  isBalanced
}
