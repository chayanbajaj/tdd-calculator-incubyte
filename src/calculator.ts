function add(numbers: string): number {
  const withoutWhiteSpaces = numbers.replace(/\s+/g, '');
  if(withoutWhiteSpaces === "") return 0;
  else return 1;
}

export { add };
