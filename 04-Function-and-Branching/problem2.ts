function palindrome(word: string): boolean {
  // your code here

  const words = word;

  const reversedWord = words.split('').reverse().join('');

  return words === reversedWord;
}

console.log(palindrome("civic")); // true
console.log(palindrome("katak")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("kupu-kupu")); // false
console.log(palindrome("lion")); // false

export default palindrome;
