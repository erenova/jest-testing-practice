import calculator from "../modules/calculator";

describe("Calculator - add function", () => {
  test("should sum two numbers correctly", () => {
    const valueOne = 24;
    const valueTwo = 38;
    const expected = 62;

    expect(calculator.add(valueOne, valueTwo)).toBe(expected);
  });

  test("should throw error when any input is not a number", () => {
    const valueOne = 22;
    const valueTwo = "35";
    expect(() => {
      calculator.add(valueOne, valueTwo);
    }).toThrow(TypeError);
  });
});

describe("Calculator - subtract function", () => {
  test("should subtract second number from first number", () => {
    const valueOne = 50;
    const valueTwo = 25;
    const expected = 25;

    expect(calculator.subtract(valueOne, valueTwo)).toBe(expected);
  });

  test("should throw error when any input is not a number", () => {
    const valueOne = "22";
    const valueTwo = "35";
    expect(() => {
      calculator.subtract(valueOne, valueTwo);
    }).toThrow(TypeError);
  });
});

describe("Calculator - divide function", () => {
  test("should divide first number by second number", () => {
    const valueOne = 50;
    const valueTwo = 5;
    const expected = 10;

    expect(calculator.divide(valueOne, valueTwo)).toBe(expected);
  });

  test("should throw error when any input is not a number", () => {
    const valueOne = "212";
    const valueTwo = 5;
    expect(() => {
      calculator.divide(valueOne, valueTwo);
    }).toThrow(TypeError);
  });

  test("should throw error when dividing by zero", () => {
    const valueOne = 50;
    const valueTwo = 0;
    expect(() => {
      calculator.divide(valueOne, valueTwo);
    }).toThrow(Error);
  });
});

describe("Calculator - multiply function", () => {
  test("should multiply two numbers correctly", () => {
    const valueOne = 50;
    const valueTwo = 5;
    const expected = 250;

    expect(calculator.multiply(valueOne, valueTwo)).toBe(expected);
  });

  test("should throw error when any input is not a number", () => {
    const valueOne = undefined;
    const valueTwo = {};
    expect(() => {
      calculator.multiply(valueOne, valueTwo);
    }).toThrow(TypeError);
  });
});
