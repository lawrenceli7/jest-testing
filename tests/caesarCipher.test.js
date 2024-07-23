import { caesarCipher } from "../src/caesarCipher";

test("shifts characters correctly", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("xyz", 1)).toBe("yza");
  expect(caesarCipher("Hello World!", 3)).toBe("Khoor Zruog!");
});

test("preserves case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("handles negative shifts", () => {
  expect(caesarCipher("abc", -1)).toBe("zab");
});
