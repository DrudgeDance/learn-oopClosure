/*  (NEW) userFunctionStore is a Constructor functio

use: UserCreator.prototype = Object.create(userFunctionStore.prototype);













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

function UserCreator(name, score) {


    this.name = name;
    this.score = score;


}



UserCreator.prototype = Object.create(userFunctionStore.prototype);










const user1 = new UserCreator("Will", 3);
const user2 = new UserCreator("Charlotte", 5);







// Add decrement method directly to userFunctionStore object
user1.decrement = function () {
    this.score--;
};
// Add increment method to the prototype of "UserCreator"
userFunctionStore.prototype.increment = function () {
    this.score++;
};

UserCreator.prototype.scoreWhoIs = function (){
    console.log(`scoreWhoIs: ${this.score} is the score.`);
};

UserCreator.prototype.scoreStatus = function () {
    console.log(`$scoreStatus: ${this.score} is the score.`);
};



