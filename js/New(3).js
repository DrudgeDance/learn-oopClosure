/* (NEW) Done Properly















*/

function UserCreator(name, score){

  this.name = name;  
  this.score = score;
  this._privateProperty = 0;  

  this.logout = function () {
    console.log("Logged out!");
  };
}

UserCreator.prototype.login = function () {
    console.log("Logged in!");
  };


  


















const user1 = new UserCreator('Will', 3);
const user2 = new UserCreator('Charlotte', 5);







// Add increment method to the prototype of "UserCreator"
user1.decrement = function () {
    this.score--;
};
  
UserCreator.prototype.increment = function () {
  this.score++;
};

UserCreator.prototype.scoreWhoIs = function (){
  console.log(`scoreWhoIs: ${this.score} is the score.`);
};

UserCreator.prototype.scoreStatus = function () {
  console.log(`$scoreStatus: ${this.score} is the score.`);
};