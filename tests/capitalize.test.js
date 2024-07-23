import { capitalize } from "../src/capitalize";

test("capitalizes the first character of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
  expect(capitalize("")).toBe("");
  expect(capitalize("a")).toBe("A");
});
