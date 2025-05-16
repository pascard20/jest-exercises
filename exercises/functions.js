// Following the exercise from The Odin Project:
// https://www.theodinproject.com/lessons/node-path-javascript-testing-practice

export const capitalize = (text) => {
  if (text === "") return text;
  if (!text) throw new Error("Invalid text!");
  const characters = text.split("");
  characters[0] = characters[0].toUpperCase();
  return characters.join("");
};

export const reverseString = (text) => {
  if (text === "") return text;
  if (!text) throw new Error("Invalid text!");
  const characters = text.split("");
  characters.reverse();
  return characters.join("");
};

export const calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    if (y === 0) throw new Error("Division by 0");
    return x / y;
  },
};

export const ceasarCipher = (text, shiftFactor) => {
  if (text === "") return text;
  if (!text) throw new Error("Invalid text!");

  // Handle negative shiftFactor as well
  const normalizedShiftFactor = ((shiftFactor % 26) + 26) % 26;

  const asciiRanges = {
    upperStart: 65,
    upperEnd: 90,
    lowerStart: 97,
    lowerEnd: 122,
  };

  const characters = text.split("");
  const shiftedCharacters = characters.map((char) => {
    const ascii = char.charCodeAt(0);

    const isUpperCase = ascii >= asciiRanges.upperStart && ascii <= asciiRanges.upperEnd;
    const isLowerCase = ascii >= asciiRanges.lowerStart && ascii <= asciiRanges.lowerEnd;

    let shiftedAscii = ascii;
    if (isUpperCase || isLowerCase) {
      let lower, upper;
      if (isUpperCase) {
        lower = asciiRanges.upperStart;
        upper = asciiRanges.upperEnd;
      } else {
        lower = asciiRanges.lowerStart;
        upper = asciiRanges.lowerEnd;
      }
      shiftedAscii = ((ascii + normalizedShiftFactor - lower) % (upper - lower + 1)) + lower;
    }

    return String.fromCharCode(shiftedAscii);
  });

  return shiftedCharacters.join("");
};

export const analyzeArray = (array) => {
  if (array.length === 0) throw new Error("Empty array!");
  array.forEach((item) => {
    if (isNaN(item)) throw new Error("Invalid array!");
  });
  const length = array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const average =
    array.reduce((acc, item) => {
      return acc + item;
    }, 0) / length;
  return {
    average,
    min,
    max,
    length,
  };
};
