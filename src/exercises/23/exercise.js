// What does a call to the noDelayPrint() do.
// Is 'this' inside print function referrring to an instance of Printer - Yes
// Is the correct sheet printed?-No
//  Comment your understanding
//  Provide a fix.

class Printer {
  constructor() {
    this.index = 0;
  }

  print() {
    console.log(`Printing sheet number ${this.index}`);
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(() =>{
      this.print();
      this.index++;}
    , 0); // 0 milli-sec delay
    
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(() => {
      this.print();
      this.index++;
    }, 1000); //1 sec dely
    
  }
}
let P1=new Printer();

P1.noDelayPrint();
P1.noDelayPrint();

