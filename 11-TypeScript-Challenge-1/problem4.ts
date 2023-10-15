function caesarCipher(offset: number, input: string): string {
  // your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const len = input.length;
  let result = "";

  for (let i = 0; i < len; i++) {
    if (alphabet.includes(input[i])) {
      const changeAlphabet = (alphabet.indexOf(input[i]) + offset) % 26;
      result += alphabet[changeAlphabet];
    } else {
      result += input[i];
    }
  }

  return result;
}

console.log(caesarCipher(3, "abc")); // def
console.log(caesarCipher(2, "alta")); // cnvc
console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")); // bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz")); // mnopqrstuvwxyzabcdefghijkl

export default caesarCipher;
