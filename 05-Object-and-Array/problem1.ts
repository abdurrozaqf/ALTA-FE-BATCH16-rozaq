function compareString(a: string, b: string): string {
  // your code here

  let sameWord = '';

  for (let i = 0; i < a.length; i++) {
    for (let end = i + 1; end <= a.length; end++) {
      let sliceWord = a.slice(i, end);

      if (b.includes(sliceWord) && sliceWord.length > sameWord.length) {
        sameWord = sliceWord;
      }
    }
  }

  return sameWord;
}

console.log(compareString("AKA", "AKASHI")); // AKA
console.log(compareString("KANGAROO", "KANG")); // KANG
console.log(compareString("KI", "KIJANG")); // KI
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA")); // ILA

export default compareString;
