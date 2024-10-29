/* 
Closure in JavaScript is a form of lexical scoping used to preserve variables
 from the outer scope of a function in the inner scope of a function.

 A closure is the combination of a function bundled together (enclosed)
  with references to its surrounding state (the lexical environment). 
  In other words, a closure gives a function access to its outer scope. 
  In JavaScript, closures are created every time a function is created, 
  at function creation time.
*/

function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

/* ouput
PS E:\webdev\js-is-the-new-quest\jsfoundation> node part9_adv\closures.js
5
6
7
8
\\ closures keep track of the variables in the environment
*/
