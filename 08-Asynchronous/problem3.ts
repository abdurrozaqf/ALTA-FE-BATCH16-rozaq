function lottery(num: number): Promise<string> {
  // your code here

  return new Promise<string>((resolve, reject) => {
    console.log("undian lotre dimulai...");
    console.log("sedang mengundi nomor anda...");
    let rate = +(Math.random() * 1000).toFixed();

    setTimeout(() => {
      if (num === rate) {
        resolve("selamat anda mendapatkan hadiah utama berupa mobil");
      } else {
        reject("maaf anda kurang beruntung");
      }
    }, 2000);
  });
}

lottery(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("undian lotre telah berakhir…"));
