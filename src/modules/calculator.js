const calculator = {
  add(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number")
      throw new TypeError("parameter's should be number type");
    return numOne + numTwo;
  },
  subtract(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number")
      throw new TypeError("parameter's should be number type");
    return numOne - numTwo;
  },
  divide(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number")
      throw new TypeError("parameter's should be number type");
    if (numTwo === 0) throw new Error("Cannot divide by zero");
    return numOne / numTwo;
  },
  multiply(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number")
      throw new TypeError("parameter's should be number type");
    return numOne * numTwo;
  },
};

export default calculator;
