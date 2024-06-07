async function main() {
  const { add } = await import("./calculator");
  console.log(add("//;\n1;2"));
}

main();