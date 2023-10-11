function maximumBuyProduct(money: number, productPrice: number[]): number { //numebr
  // your code here

  let sort = productPrice.sort((a, b) => a - b);
  let len = productPrice.length;
  let result = [];


  for (let i = 0; i < len; i++) {
    if (sort[i] <= money) {
      result.push(sort[i]);
    }

    let totalProducPrice = result.reduce((a, b) => a + b, 0);
    if (totalProducPrice > money) {
      result.pop();
    }
  }

  return result.length;

}

console.log(maximumBuyProduct(50000, [25000, 25000, 10000, 14000])); // 3
console.log(maximumBuyProduct(30000, [15000, 10000, 12000, 5000, 3000])); // 4
console.log(maximumBuyProduct(10000, [2000, 3000, 1000, 2000, 10000])); // 4
console.log(maximumBuyProduct(4000, [7500, 3000, 2500, 2000])); // 1
console.log(maximumBuyProduct(0, [10000, 30000])); // 0

export default maximumBuyProduct;
