function frog(jumps: number[]): number {
  // your code here

  const len = jumps.length;
  let tempJump: number[] = [];
  tempJump[0] = 0;
  tempJump[1] = Math.abs(jumps[1] - jumps[0]);
  for (let i = 2; i < len; i++) {
    const difference1 = Math.abs(jumps[i] - jumps[i - 1]) + tempJump[i - 1];
    const difference2 = Math.abs(jumps[i] - jumps[i - 2]) + tempJump[i - 2];
    tempJump[i] = Math.min(difference1, difference2);
  }
  return tempJump[len - 1];
}

console.log(frog([10, 30, 40, 20])); // 30
console.log(frog([30, 10, 60, 10, 60, 50])); // 40

export default frog;
