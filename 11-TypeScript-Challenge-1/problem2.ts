function ubahHuruf(sentence: string): string {
  // your code here

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const len = sentence.length;
  const addAlphabet = 10;

  let result = "";
  for (let i = 0; i < len; i++) {
    if (alphabet.includes(sentence[i])) {
      const changeAlphabet = (alphabet.indexOf(sentence[i]) + addAlphabet) % 26;
      result += alphabet[changeAlphabet];
    } else {
      result += sentence[i];
    }
  }
  return result;
}

console.log(ubahHuruf("SEPULSA OKE")); // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA")); // SXNYXOCSK
console.log(ubahHuruf("GOLANG")); // QYVKXQ
console.log(ubahHuruf("PROGRAMMER")); // ZBYQBKWWOB

export default ubahHuruf;
