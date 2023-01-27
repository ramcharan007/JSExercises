// Complete the below function. Print welcome greetings to a person.
//  - Use string template literal
//  - Comment its uses.
/** String template uses are:
 * Multiline String : Template literals allows multiline strings
 * Quotes Inside Strings : With template literals, you can use both single and double quotes inside a string
 * Interpolation : Template literals provide an easy way to interpolate variables and expressions into strings
 * Variable Substitutions : Template literals allow variables in strings
 * Expression Substitution : Template literals allow expressions in strings
 */
function greeting(firstName, lastName) {
  let welcomeGreeting;
  welcomeGreeting=`Welcome Mr.${firstName} ${lastName}`;
  console.log(welcomeGreeting);
}
