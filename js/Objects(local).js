/*  userFunctionStore is a Local Object Literal
No need to use Object.create())
Cannot use the protoype chain here.













*/
















function userCreator(name, score) {
  const userFunctionStore = {
    name: name,
    score: score,
    login: function () {
      console.log("Logged in!");
    },
    logout: function () {
      console.log("Logged out!");
    },
    decrement: function () {
      this.score--;
    },
    increment: function () {
      this.score++;
    },
  };
  return userFunctionStore;
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Charlotte", 5);








user1.decrement = function () {
  userFunctionStore.score--;
};

user1.increment = function () {
  userFunctionStore.score++;
};

user1.scoreWhoIs = function(){
  console.log(`scoreWhoIs: 
       ${this.score} is the score.`);
};

user1.scoreStatus = function () {
  console.log(`$scoreStatus: 
       ${this.score} is the score.`);
};


