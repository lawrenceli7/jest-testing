export function caesarCipher(str, shift) {
  const shiftChar = (char) => {
    const isUpperCase = char >= "A" && char <= "Z";
    const isLowerCase = char >= "a" && char <= "z";

    if (!isUpperCase && !isLowerCase) {
      return char;
    }

    const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
    const charCode = char.charCodeAt(0) - base;
    const newCharCode = (charCode + shift) % 26;

    return String.fromCharCode(
      base + (newCharCode < 0 ? 26 + newCharCode : newCharCode)
    );
  };

  return str.split("").map(shiftChar).join("");
}
