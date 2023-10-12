export const getNumbers = (inputString: string): number => {
  // Remove non-numeric characters
  const numbersOnly = inputString.replace(/\D/g, "");

  // Try to parse the numeric string as an integer
  const parsedNumber = parseInt(numbersOnly, 10);

  // Check if the parsed number is a valid integer
  if (!isNaN(parsedNumber)) {
    return parsedNumber;
  }

  return 0; // Return a default value 0
};
