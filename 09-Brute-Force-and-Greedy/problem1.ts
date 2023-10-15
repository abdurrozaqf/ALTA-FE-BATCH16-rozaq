function simpleEquations(a: number, b: number, c: number): string {
  // your code here

  let result: string = "";
  for (let x = 1; x <= a; x++) {
    for (let y = 1; y <= a; y++) {
      for (let z = 1; z <= a; z++) {
        if (x + y + z === a && x * y * z === b && x * x + y * y + z * z === c) {
          return `${x} ${y} ${z}`;
        } else {
          result = "no solution";
        }
      }
    }
  }
  return result;
}

console.log(simpleEquations(1, 2, 3)); // no solution
console.log(simpleEquations(6, 6, 14)); // 1 2 3

export default simpleEquations;
