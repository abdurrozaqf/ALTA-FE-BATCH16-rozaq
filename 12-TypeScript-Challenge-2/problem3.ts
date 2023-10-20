function makeDiamond(char: string): void {
  // your code here

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let indexAlphabet = alphabet.indexOf(char);

  let result: string[] = [];
  for (let i = 0; i <= indexAlphabet; i++) {
    let dot = "•".repeat(indexAlphabet - i) + alphabet[i];
    if (i > 0) {
      dot += "•".repeat(2 * i - 1);
      dot += alphabet[i];
    }
    dot += "•".repeat(indexAlphabet - i);
    result.push(dot);
  }
  for (let i = indexAlphabet - 1; i >= 0; i--) {
    result.push(result[i]);
  }

  console.log(result.join("\n") + "\n");
}

makeDiamond("C");
makeDiamond("E");

export default makeDiamond;
