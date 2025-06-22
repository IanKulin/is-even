function isEven(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    return false; // treat non-integers and non-numbers as odd
  }
  return num % 2 === 0;
}

export { isEven };
