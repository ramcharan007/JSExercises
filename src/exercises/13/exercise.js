// Complete the function "getFullName", "checkVoteEligiblity" in the below object

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,
  getFullName: function () {return this.firstName+' '+this.lastName;},
  checkVoteEligiblity: function () { if(this.age>18){
                                        console.log(`${this.getFullName()} is eligible to vote`);
                                                    }
                                      else{
                                        console.log(`${this.getFullName()} is not eligible to vote`);
                                          }},
};


