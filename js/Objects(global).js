/*  Global Object Literal















*/

const userFunctionStore = {
    logout: function () {
        console.log("Logged out!");
    }

};





userFunctionStore.login = function () {
        console.log("Logged in!");
},

function userCreator(name, score) {
  const user = Object.create(userFunctionStore);
  userFunctionStore.name = name;
  userFunctionStore.score = score;

  return userFunctionStore;
}













const user1 = userCreator("Will", 3);
const user2 = userCreator("Charlotte", 5);








user1.decrement = function () {
  this.score--;
};

userFunctionStore.increment = function () {
  userFunctionStore.score++;
};

userCreator.prototype.scoreWhoIs = function(){
    console.log(`scoreWhoIs: ${this.score} is the score.`);
}

userCreator.prototype.scoreStatus = function () {
  console.log(`$scoreStatus: ${this.score} is the score.`);
};
