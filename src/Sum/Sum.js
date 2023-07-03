export default class Sum {
  numberOne;

  numberTwo;

  sum(numberOne, numberTwo) {
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
    const result = this.numberOne + this.numberTwo;
    return result;
  }
}
