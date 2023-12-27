/* Closure - Closed Over Variable Envorionment


The inner function "closes over" or encapsulates 
the variables and their environment from the 
outer function.

A closure is a function that has access to 
variables from its outer (enclosing) scope 
even after that outer scope has finished 
executing. The term "closure" itself is 
derived from the idea that the function 
"closes over" or "encloses" the variables 
it captures from its surrounding context.

In JavaScript:

Functional Scope:  In JavaScript, each 
function creates its own scope. Variables 
declared within a function are local to 
that function and are not accessible 
outside of it.


Lexical Scope:  JavaScript uses lexical 
(or static) scoping, which means that a 
function can access variables from its 
outer (enclosing) functions. This access 
is determined by the function's position 
in the source code.

*/

function closureOuter(name, score){
  function inner(){
    return console.log(`${name}, ${score}, 
        ${counter++}, ${counter2++}`)
    };

  let counter = 0;
  let counter2 = 10;
  const increment;
  const login;   







    return inner;
}

const closureTest = closureOuter("Will", 3); 

closureTest();
closureTest();
closureTest();
closureTest();




