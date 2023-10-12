function jajanBoba(uang: number, callback: (uang: number) => void): void {
  // your code here

  const priceBoba = 5000;

  setTimeout(() => {
    console.log(`kamu jajan boba dengan harga Rp.${priceBoba}`);
    uang -= priceBoba;
    callback(uang);
    console.log(`sisa uang kamu Rp.${uang}`);
  }, 5000);
}

function jajanSeblak(uang: number): void {
  // your code here

  const priceSeblak = 8000;
  if (uang >= priceSeblak) {
    setTimeout(() => {
      console.log(`kamu jajan seblak dengan harga Rp.${priceSeblak}`);
      uang -= priceSeblak;
      console.log(`sisa uang kamu Rp.${uang}`);
    }, 9000);
  } else {
    setTimeout(() => {
      console.log("Maaf uang kamu belum cukup untuk membeli Seblak");
      console.log(`sisa uang kamu Rp.${uang}`);
    }, 2000);
  }
}

jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);
