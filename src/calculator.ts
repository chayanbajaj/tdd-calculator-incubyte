function add(numbers: string): number {
  const withoutWhiteSpaces = numbers.replace(/[^\S\n]+/g, "");
  const finalString = withoutWhiteSpaces.replace(/\n/g, ',');
  let stringArray: string[] = finalString.split(",");
  console.log('stringArray', stringArray);
  let integerArray: number[] = stringArray.map(Number);
  if (finalString === "") return 0;
  else if (integerArray.length === 1) return integerArray[0];
  else return integerArray.reduce((acc, curr) => acc + curr, 0);
}

export { add };
