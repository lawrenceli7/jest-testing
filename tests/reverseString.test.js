import { reverseString } from "../src/reverseString";

test("reverseString function exists", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
});
