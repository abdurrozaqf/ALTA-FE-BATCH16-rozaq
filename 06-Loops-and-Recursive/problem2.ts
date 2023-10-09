function primeX(number: number): number {
  // your code here

  let primeNumber = [];
  let index = 2;

  while (primeNumber.length < number) {
    if (checkPrimeNumber(index)) {
      primeNumber.push(index);
    }
    index++;
  }

  return primeNumber[number - 1];
}

function checkPrimeNumber(number: number): boolean {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71

export default primeX;
