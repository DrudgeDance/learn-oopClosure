/*  userFunctionStore is a Global Object Literal.
Need to use Object.create())

userFunctionStore is an object literal and not a 
constructor function.  Therefore, you cannot use 
the 'prototype' property with it.










*/

const userFunctionStore = {
    logout: function () {
        console.log("Logged out!");
    },

};



userFunctionStore.login = function () {
    console.log("Logged in!");
};



function userCreator(name, score) {
  // YES to object return
  // userFunctionStore is an object literal
  const newUser = Object.create(userFunctionStore); 

  newUser.name = name;
  newUser.score = score;
  
  newUser.decrement = function () {
    this.score--;
  };
  
  return newUser;
};






const user1 = userCreator("Will", 3);
const user2 = userCreator("Charlotte", 5);












userFunctionStore.increment = function () {
  this.score++;
};

userCreator.prototype.scoreWhoIs = function (){
    console.log(`scoreWhoIs: ${this.score} is the score.`)
};

userCreator.prototype.scoreStatus = function () {
  console.log(`scoreStatus: ${this.score} is the score.`);
};



