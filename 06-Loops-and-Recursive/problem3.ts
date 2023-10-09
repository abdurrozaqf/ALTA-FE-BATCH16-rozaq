function primaSegiEmpat(wide: number, high: number, start: number): void {
  // your code here

  let currentNumber = start + 1;
  let totalPrimes = 0;

  for (let i = 0; i < high; i++) {
    let row = '';
    for (let j = 0; j < wide; j++) {
      while (!checkPrimeNumber(currentNumber)) {
        currentNumber++;
      }
      row += `${currentNumber} `;
      totalPrimes += currentNumber;
      currentNumber++;
    }
    console.log(row.trim());
  }
  console.log(totalPrimes);

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

primaSegiEmpat(2, 3, 13);
/*
17 19
23 29
31 37
156
*/
primaSegiEmpat(5, 2, 1);
/*
2  3  5  7 11
13 17 19 23 29
129
*/

export default primaSegiEmpat;
