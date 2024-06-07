function add(numbers: string): number {
  let delimeter = ",";
  const withoutWhiteSpaces = numbers.replace(/[^\S\n]+/g, "");
  let finalString = withoutWhiteSpaces;
  if (finalString.startsWith("//")) {
    const indexOfNewLine = finalString.indexOf("\n");
    if (indexOfNewLine !== -1) {
      delimeter = finalString.substring(2, indexOfNewLine);
      finalString = finalString.substring(indexOfNewLine + 1);
    }
  }
  finalString = finalString.replace(/\n/g, delimeter);
  let stringArray: string[] = finalString.split(delimeter);
  let integerArray: number[] = stringArray.map(Number);
  if (finalString === "") return 0;
  else if (integerArray.length === 1) return integerArray[0];
  else return integerArray.reduce((acc, curr) => acc + curr, 0);
}

export { add };
