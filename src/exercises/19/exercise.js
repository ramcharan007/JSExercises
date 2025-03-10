// Comment below what did you understand from the previous 3 exercises about
// - prototype
/**Prototypes are the mechanism by which JavaScript objects inherit features from one another.
 * Every object in JavaScript has a built-in property, which is called its prototype. 
 * The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 
 * The chain ends when we reach a prototype that has null for its own prototype.
 * When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. 
 * If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.
 */
// - __proto__
/**The property of an object that points to its prototype is not called prototype. 
 * Its name is not standard, but in practice all browsers use __proto__. */
