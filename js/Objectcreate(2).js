/* userFunctionStore is a Constructor Function
Need to use Object.create and attach to userFunctionStore.prototype 

Prototype is typically used with constructor
functions to create object with shared properties
and methods.

Here, we define userFunctionStore as a constructor 
function and use the prototype property correctly.







*/ 

function userFunctionStore() {
    // Constructor function 
    // DOES NOT RETURN ANYTHING

  this.logout = function () {
    console.log("Logged out!");
  };
}

userFunctionStore.prototype.login = function () {
  console.log("Logged in!");
};
  


function userCreator(name, score) {
  // NO object return by Constructor Function
  // userFunctionStore
  const newUser = Object.create(userFunctionStore.prototype);
  
  newUser.name = name;
  newUser.score = score || 0;  // Initialize score
                               //   with a default 
 return newUser;               //   value 
 
}









const user1 = userCreator("Will", 3);
const user2 = userCreator("Charlotte", 5);
  







user1.decrement = function () {
  this.score--;
};
  
userFunctionStore.prototype.increment = function () {
  this.score++;
};
  
userCreator.prototype.scoreWhoIs = function (){
    console.log(`scoreWhoIs: ${this.score} is the score.`);
};

userCreator.prototype.scoreStatus = function () {
  console.log(`$scoreStatus: ${this.score} is the score.`);
};

