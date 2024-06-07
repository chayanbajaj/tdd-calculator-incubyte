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
  const stringArray: string[] = finalString.split(delimeter);
  const integerArray: number[] = stringArray.map(Number);
  if (checkForNegativeNumbers(integerArray) !== "No negative numbers found") {
    throw new Error(checkForNegativeNumbers(integerArray));
  }
  if (finalString === "") return 0;
  else if (integerArray.length === 1) return integerArray[0];
  else return integerArray.reduce((acc, curr) => acc + curr, 0);
}

function checkForNegativeNumbers(arr: number[]): string {
  let negativesFound = false;
  let negativeNumbers: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativesFound = true;
      negativeNumbers.push(arr[i]);
    }
  }

  let output: string;
  if (negativesFound) {
    output = "negative numbers not allowed ";
    negativeNumbers.forEach((num) => (output += num + ","));
  } else {
    output = "No negative numbers found";
  }

  return output;
}

export { add };
