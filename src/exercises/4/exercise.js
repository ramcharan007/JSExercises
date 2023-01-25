// Complete the below function. Print welcome greetings to a person.
//  - Use string template literal
//  - Comment its uses.

function greeting(firstName, lastName) {
  let welcomeGreeting;
  welcomeGreeting=`Welcome Mr.${firstName} ${lastName}`
  console.log(welcomeGreeting);
}
greeting('Ram','Charan')