/* ES6 Classes

Private Properties:  While JavaScript 
doesn't have native private access 
modifiers, you can use a naming convention 
to denote that a property or method is 
intended to be private by prefixing it 
with an underscore _. This is a convention 
and does not provide true privacy; these 
members can still be accessed from outside 
the class.





*/

class UserCreator{
  
  
  constructor(name, score){
		this.name = name;
		this.score = score;
    // _ denotes private (actually public)
    this._privateProperty = 0;  
	}

  logout() {
    console.log("Logged out!");
  };

  login() {
      console.log("Logged in!");
  };
  // _ denotes private (actually public)
  _privateMethod(){
    console.log("This is a Private Method");
}


}











const user1 = new UserCreator('Will', 3);
const user10 = new PersonClass('Will', 3);

const user2 = new UserCreator('Charlotte', 5);
const user20 = new PersonClass('Charlotte', 5);

UserCreator.prototype.decrement = function () {
  this.score--;
}

UserCreator.prototype.increment = function () {
  this.score++;
}

class PersonClass extends UserCreator {

  constructor(name, score) {
    super(name, score);
  }

  scoreWhoIs() {
    console.log(`scoreWhoIs: ${this.score} is the score.`);
  };

  scoreStatus() {
    console.log(`$scoreStatus: ${this.score} is the score.`);
  };
}



