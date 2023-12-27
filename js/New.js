/*  (NEW) userFunctionStore is an object literal

use: UserCreator.prototype = userFunctionStore; 

Attach UserCreator to userFunctionStore prototype
Instances created with "UserCreator" will inherit 
methods from "userFunctionStore""









*/

const userFunctionStore = {
    logout: function () {
        console.log("Logged out!");
    },
    login: function () {
        console.log("Logged in!");
    }
};





function UserCreator(name, score) {


    this.name = name;
    this.score = score;


}



UserCreator.prototype = userFunctionStore; 










const user1 = new UserCreator("Will", 3);
const user2 = new UserCreator("Charlotte", 5);








user1.decrement = function () {
  this.score--;
};

userFunctionStore.increment = function () {
  this.score++;
};

UserCreator.prototype.scoreWhoIs = function (){
  console.log(`scoreWhoIs: ${this.score} is the score.`);
};

UserCreator.prototype.scoreStatus = function () {
  console.log(`scoreStatus: ${this.score} is the score.`);
};


