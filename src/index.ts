async function main() {
  const { add } = await import("./calculator");
  console.log(add("1000,2000,3000,4000"));
}

main();