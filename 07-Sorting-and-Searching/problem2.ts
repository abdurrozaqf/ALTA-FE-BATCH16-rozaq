function playingDomino(cards: number[][], deck: number[]): number[] {
  // your code here

  let len = cards.length;
  let sort = cards.sort();

  let hightDeck: any = [];
  if (deck[0] > deck[1]) {
    hightDeck = deck[0];
  } else {
    hightDeck = deck[1];
  }

  let lowDeck: any = [];
  if (deck[0] < deck[1]) {
    lowDeck = deck[0];
  } else {
    lowDeck = deck[1];
  }

  for (let i = 0; i < len; i++) {
    if (sort[i][0] === hightDeck || sort[i][1] === hightDeck) {
      return sort[i];
    }
  }

  for (let j = 0; j < len; j++) {
    if (sort[j][0] === lowDeck || sort[j][1] === lowDeck) {
      return sort[j];
    }
  }

  return [];
}

console.log(
  playingDomino(
    [
      [6, 5],
      [3, 4],
      [2, 1],
      [3, 3],
    ],
    [4, 3]
  )
); // [3, 4]
console.log(
  playingDomino(
    [
      [6, 5],
      [3, 3],
      [3, 4],
      [2, 1],
    ],
    [3, 6]
  )
); // [6 5]
console.log(
  playingDomino(
    [
      [6, 6],
      [2, 4],
      [3, 6],
    ],
    [5, 1]
  )
); // []

export default playingDomino;
