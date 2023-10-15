function playWithAsterik(n: number): void | any {
  // your code here

  let result = "";
  for (let index = 1; index <= n; index++) {
    for (let j = 1; j <= n - index; j++) {
      result += " ";
    }
    for (let k = 1; k <= index; k++) {
      result += "* ";
    }

    result += "\n";
  }
  return result;
}

console.log(playWithAsterik(5));

export default playWithAsterik;
