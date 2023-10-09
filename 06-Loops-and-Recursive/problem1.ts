function exponentiation(x: number, n: number): number | string {
  // your code here

  if (n < 0) {
    return 'wrong input';
  } else if (n === 0) {
    return 1;
  } else {
    let result: any = exponentiation(x, n - 1);
    return x * result;
  }
}

console.log(exponentiation(2, 3)); // 8
console.log(exponentiation(2, 12)); // 4096
console.log(exponentiation(7, 2)); // 49
console.log(exponentiation(9, 3)); // 729
console.log(exponentiation(22, 5)); // 5153632
console.log(exponentiation(1996, 0)); // 1
console.log(exponentiation(4213, -3)); // “wrong input”

export default exponentiation;
