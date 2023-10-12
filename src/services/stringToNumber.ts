export const getNumbers = (inputString: string): number => {
  let numbersOnly = "";

  for (let i = 0; i < inputString.length; i++) {
    const character = inputString[i];
    if (!isNaN(parseInt(character))) {
      numbersOnly += character;
    }
  }

  if (numbersOnly) {
    return parseInt(numbersOnly, 10);
  }

  return 0;
};
