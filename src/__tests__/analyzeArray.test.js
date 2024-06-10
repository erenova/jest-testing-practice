import analyzeArray from "../modules/analyzeArray";

describe("analyzeArray function", () => {
  test("should find average, min, max and length values of an array correctly - Example one", () => {
    const value = [1, 8, 3, 4, 2, 6];
    const expected = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };

    expect(analyzeArray(value)).toEqual(expected);
  });

  test("should find average, min, max and length values of an array correctly - Example two", () => {
    const value = [5, 10, 15, 20, 25, 30, 35, 40];
    const expected = {
      average: 22.5,
      min: 5,
      max: 40,
      length: 8,
    };

    expect(analyzeArray(value)).toEqual(expected);
  });

  test("should return correct values for an empty array", () => {
    const value = [];
    const expected = {
      average: null,
      min: null,
      max: null,
      length: 0,
    };

    expect(analyzeArray(value)).toEqual(expected);
  });

  test("should return correct values for an array with one element", () => {
    const value = [7];
    const expected = {
      average: 7,
      min: 7,
      max: 7,
      length: 1,
    };

    expect(analyzeArray(value)).toEqual(expected);
  });

  test("should return correct values for an array with identical elements", () => {
    const value = [5, 5, 5, 5, 5];
    const expected = {
      average: 5,
      min: 5,
      max: 5,
      length: 5,
    };

    expect(analyzeArray(value)).toEqual(expected);
  });
});
