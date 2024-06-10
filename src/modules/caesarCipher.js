export default function caesarCipher(text, shift) {
  const shiftValue = shift % 26;
  return text
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(((charCode - 65 + shiftValue) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(((charCode - 97 + shiftValue) % 26) + 97);
      }
      return char;
    })
    .join("");
}
