function isPangram(texts: string): boolean {
  // your code here

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = true;
  for (let i = 0; i < alphabet.length; i++) {
    const isPangrams = texts.indexOf(alphabet[i]) !== -1;
    result = isPangrams;
  }
  return result;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Public junk dwarves hug my beloved pillow")); // false
console.log(
  isPangram("Jim quickly realized that the beautiful gowns are expensive")
); //true
console.log(isPangram("Back in June we delivered oxygen equipment")); // false

export default isPangram;
