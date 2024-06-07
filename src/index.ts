async function main() {
  const { add } = await import("./calculator");
  console.log(add(""));
}

main();