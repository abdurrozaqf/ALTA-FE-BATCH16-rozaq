function meanMedian(numbers: number[]): string {
  // your code here
  const sortedNumbers = numbers.sort((a, b) => a - b);

  const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;

  let median: number;
  if (sortedNumbers.length % 2 === 0) {
    const midleNumbers1 = sortedNumbers[sortedNumbers.length / 2 - 1];
    const midleNumbers2 = sortedNumbers[sortedNumbers.length / 2];
    median = (midleNumbers1 + midleNumbers2) / 2;
  } else {
    median = sortedNumbers[Math.floor(sortedNumbers.length / 2)];
  }
  return `${mean.toString()} ${median.toString()}`;
}

console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30

export default meanMedian;
