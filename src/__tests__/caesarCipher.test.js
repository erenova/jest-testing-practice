import caesarCipher from "../modules/caesarCipher";

describe("caesarCipher function", () => {
  test("should shift 1 character when second parameter is 1", () => {
    const text = "XYZ";
    const shift = 2;
    const expected = "ZAB";
    expect(caesarCipher(text, shift)).toBe(expected);
  });

  test("should handle lowercase characters", () => {
    const text = "xyz";
    const shift = 2;
    const expected = "zab";
    expect(caesarCipher(text, shift)).toBe(expected);
  });

  test("should handle mix of upper and lower case characters", () => {
    const text = "XyZ";
    const shift = 2;
    const expected = "ZaB";
    expect(caesarCipher(text, shift)).toBe(expected);
  });
  test("should return empty string when input is empty", () => {
    const text = "";
    const shift = 2;
    const expected = "";
    expect(caesarCipher(text, shift)).toBe(expected);
  });
  test("should handle text with non-letter characters", () => {
    const text = "X Y Z!";
    const shift = 2;
    const expected = "Z A B!";
    expect(caesarCipher(text, shift)).toBe(expected);
  });
  test("should return the same string when shift is 26", () => {
    const text = "ABC";
    const shift = 26;
    const expected = "ABC";
    expect(caesarCipher(text, shift)).toBe(expected);
  });
});
