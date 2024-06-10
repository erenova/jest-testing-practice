import reverseString from "../modules/reverseString";

describe("ReverseString function - string manipulation tests", () => {
  test("should reverse a single word", () => {
    const value = "eren";
    const expected = "nere";
    expect(reverseString(value)).toBe(expected);
  });

  test("should reverse a complete sentence", () => {
    const value = "Today is a hot day in the middle of summer";
    const expected = "remmus fo elddim eht ni yad toh a si yadoT";
    expect(reverseString(value)).toBe(expected);
  });
  test("should return empty string when input is empty", () => {
    const value = "";
    const expected = "";
    expect(reverseString(value)).toBe(expected);
  });

  test("should reverse special characters correctly", () => {
    const value = "ab@-*";
    const expected = "*-@ba";
    expect(reverseString(value)).toBe(expected);
  });

  test("should throw error when input is not a string", () => {
    const value = 12345;
    expect(() => reverseString(value)).toThrow(TypeError);
  });
});
