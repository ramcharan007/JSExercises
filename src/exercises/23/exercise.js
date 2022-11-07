// Why does a call to the delayPrint() do.
// - Comment your understanding
// - Provide a fix.

class Printer {
  constructor(index) {
    this.index = 0;
  }

  print() {
    console.log(`Printing sheet number ${this.index}`);
    this.index++;
  }
  delayPrint() {
    setTimeout(this.print, 1000);
  }
}
