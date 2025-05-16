// Following the exercise from The Odin Project:
// https://www.theodinproject.com/lessons/node-path-javascript-testing-practice

import * as exercise from "./functions.js";

test("capitalize(), lowercase word", () => {
  expect(exercise.capitalize("example")).toBe("Example");
});

test("capitalize(), capitalized word", () => {
  expect(exercise.capitalize("Example")).toBe("Example");
});

test("capitalize(), empty string", () => {
  expect(exercise.capitalize("")).toBe("");
});

test("capitalize(), non-letter characters", () => {
  expect(exercise.capitalize("1test")).toBe("1test");
  expect(exercise.capitalize(" test")).toBe(" test");
});

test("capitalize(), null or undefined", () => {
  expect(() => exercise.capitalize(null)).toThrow();
  expect(() => exercise.capitalize(undefined)).toThrow();
});

test("reverseString()", () => {
  expect(exercise.reverseString("example")).toBe("elpmaxe");
  expect(exercise.reverseString("Example")).toBe("elpmaxE");
  expect(exercise.reverseString("1test")).toBe("tset1");
  expect(exercise.reverseString(" test")).toBe("tset ");
});

test("reverseString(), empty string", () => {
  expect(exercise.reverseString("")).toBe("");
});

test("reverseString(), null or undefined", () => {
  expect(() => exercise.reverseString(null)).toThrow();
  expect(() => exercise.reverseString(undefined)).toThrow();
});

test("calculator, basic usage", () => {
  expect(exercise.calculator.add(25, 5)).toBe(30);
  expect(exercise.calculator.subtract(25, 5)).toBe(20);
  expect(exercise.calculator.divide(25, 5)).toBe(5);
  expect(exercise.calculator.multiply(25, 5)).toBe(125);
});

test("calculator, negative numbers", () => {
  expect(exercise.calculator.add(25, -5)).toBe(20);
  expect(exercise.calculator.subtract(25, -5)).toBe(30);
  expect(exercise.calculator.divide(25, -5)).toBe(-5);
  expect(exercise.calculator.multiply(25, -5)).toBe(-125);
  expect(exercise.calculator.add(-25, 5)).toBe(-20);
  expect(exercise.calculator.subtract(-25, 5)).toBe(-30);
  expect(exercise.calculator.divide(-25, 5)).toBe(-5);
  expect(exercise.calculator.multiply(-25, 5)).toBe(-125);
  expect(exercise.calculator.add(-25, -5)).toBe(-30);
  expect(exercise.calculator.subtract(-25, -5)).toBe(-20);
  expect(exercise.calculator.divide(-25, -5)).toBe(5);
  expect(exercise.calculator.multiply(-25, -5)).toBe(125);
});

test("calculator, dividing by 0", () => {
  expect(() => exercise.calculator.divide(25, 0)).toThrow();
});

test("ceasarCypher(), basic usage", () => {
  expect(exercise.ceasarCipher("marcus crassus", 5)).toBe("rfwhzx hwfxxzx");
});

test("ceasarCypher(), letters wrapping", () => {
  expect(exercise.ceasarCipher("xyz", 3)).toBe("abc");
});

test("ceasarCypher(), case preservation", () => {
  expect(exercise.ceasarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("ceasarCypher(), punctuation preservation", () => {
  expect(exercise.ceasarCipher("hello, world!", 3)).toBe("khoor, zruog!");
});

test("ceasarCypher(), negative shift factor", () => {
  expect(exercise.ceasarCipher("rfwhzx hwfxxzx", -5)).toBe("marcus crassus");
});

test("analyzeArray(), basic usage", () => {
  expect(exercise.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(exercise.analyzeArray([-3, -1, -7, -4])).toEqual({
    average: -3.75,
    min: -7,
    max: -1,
    length: 4,
  });
  expect(exercise.analyzeArray([42])).toEqual({
    average: 42,
    min: 42,
    max: 42,
    length: 1,
  });
});

test("analyzeArray(), empty array", () => {
  expect(() => exercise.analyzeArray([])).toThrow();
});

test("analyzeArray(), non-numeric values", () => {
  expect(() => exercise.analyzeArray([1, "a", 3])).toThrow();
});
