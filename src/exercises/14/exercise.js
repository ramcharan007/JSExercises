// Get the full name of the new employee. See how you can execute the function "getFullName" on newEmployee object.
// - Comment your findings
/** Here we can use call() method to call the getFullName method with newEmployee.
 * With call(), an object can use a method belonging to another object.**/

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,
  getFullName: function () {
    //Copy the solution from the exercise before this.
    return this.firstName+' '+this.lastName;
  },
};

const newEmployee = {
  firstName: "New",
  lastName: "Employee",
};
console.log(employee.getFullName.call(newEmployee));
