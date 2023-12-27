/* ES12 Classes

Class Instance Field initializers
  Allows you to define initial values
  for class instance fields directly 
  within the class body, similar to 
  how you can define properties in a 
  constructor.

#Private Methods/Properties
  Allows you to declare class members
  as private, making them inaccessible
  fromoutside the class.  Feature enahnces
  encapsulation and data hiding within
  classes.

*/

class UserCreator{
  count = 0; // Class Instance Field Initializer
  #counter = 0; // # denotes private 
  constructor(name, score){
		this.name = name;
		this.score = score;
    // #denotes private
    this.#privateProperty = private;  
  }

  logout() {
    console.log("Logged out!");
  };

  login() {
      console.log("Logged in!");
  };
  // # denotes private
  #privateMethod(){
      console.log("This is a Private Method");
  }


}











const user1 = userCreator('Will', 3);
const user2 = userCreator('Charlotte', 5);


class PersonClass extends UserCreator {

  constructor(name, score) {
    super(name, score);
  }

  decrement(){
	  this.score--;
	}

	increment(){
	  this.score++;
	}

  scoreWhoIs = function (){
    console.log(`scoreWhoIs: ${this.score} is the score.`);
  };

  scoreStatus() {
    console.log(`$scoreStatus: ${this.score} is the score.`);
  };
}
