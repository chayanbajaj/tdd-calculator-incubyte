function add(numbers: string): number {
  const withoutWhiteSpaces = numbers.replace(/\s+/g, "");
  let stringArray: string[] = withoutWhiteSpaces.split(",");
  let integerArray: number[] = stringArray.map(Number);
  if (withoutWhiteSpaces === "") return 0;
  else if (integerArray.length === 1) return integerArray[0];
  else return integerArray[0] + integerArray[1];
}

export { add };
