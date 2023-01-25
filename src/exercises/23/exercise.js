// What does a call to the noDelayPrint() do.
// Is 'this' inside print function referrring to an instance of Printer
// Is the correct sheet printed?
//  Comment your understanding
//  Provide a fix.

class Printer {
  constructor() {
    this.index = 1;
  }

  print() {
    console.log(`Printing sheet number ${this.index}`);
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print, 0); // 0 milli-sec delay
    this.index++;
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print, 1000); //1 sec dely
    this.index++;
  }
}
let P1=new Printer();
P1.noDelayPrint();
