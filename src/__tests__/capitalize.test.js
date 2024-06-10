import capitalize from "../modules/capitalize";

describe("Capitalize function - string manipulation tests", () => {
  test("should capitalize the first character of a single word string", () => {
    const value = "erenova";
    const expected = "Erenova";
    expect(capitalize(value)).toBe(expected);
  });

  test("should not change already capitalized string", () => {
    const value = "Abcd";
    const expected = "Abcd";
    expect(capitalize(value)).toBe(expected);
  });

  test("should handle an empty string", () => {
    const value = "";
    const expected = "";
    expect(capitalize(value)).toBe(expected);
  });

  test("should capitalize a single character string", () => {
    const value = "c";
    const expected = "C";
    expect(capitalize(value)).toBe(expected);
  });

  test("should handle strings with special characters", () => {
    const value = "hello!";
    const expected = "Hello!";
    expect(capitalize(value)).toBe(expected);
  });

  test("should handle strings with numbers", () => {
    const value = "123abc";
    const expected = "123abc";
    expect(capitalize(value)).toBe(expected);
  });
});
