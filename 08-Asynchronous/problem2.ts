const clothes = {
  item: "clothes",
  price: 15000,
  time: 3000,
};

const pants = {
  item: "pants",
  price: 25000,
  time: 7000,
};

const hat = {
  item: "hat",
  price: 22000,
  time: 2000,
};

const shoes = {
  item: "shoes",
  price: 46000,
  time: 10000,
};

interface ObjItem {
  item: string;
  price: number;
  time: number;
}

function buyApparel(
  money: number,
  objItem: ObjItem,
  callback: (money: number) => void
) {
  setTimeout(() => {
    money -= objItem.price;
    callback(money);
  }, objItem.time);
}

let money = 150000;

buyApparel(money, clothes, (money1) => {
  console.log("saya membawa uang sebesar", money);
  console.log("saya ingin membeli Baju dengan harga", clothes.price);
  console.log(
    `dan waktu yang dibutuhkan adalah ${clothes.time / 1000} detik \n`
  );
  money -= clothes.price;

  buyApparel(money, pants, (money2) => {
    console.log("saya membawa uang sebesar", money1);
    console.log("saya ingin membeli celana dengan harga", pants.price);
    console.log(
      `dan waktu yang dibutuhkan adalah ${pants.time / 1000} detik\n`
    );
    money -= pants.price;

    buyApparel(money, hat, (money3) => {
      console.log("saya membawa uang sebesar", money2);
      console.log("saya ingin membeli topi dengan harga", hat.price);
      console.log(
        `dan waktu yang dibutuhkan adalah ${hat.time / 1000} detik\n`
      );
      money -= hat.price;

      buyApparel(money, shoes, (money4) => {
        console.log("saya membawa uang sebesar", money3);
        console.log("saya ingin membeli Sepatu dengan harga", shoes.price);
        console.log(
          `dan waktu yang dibutuhkan adalah ${shoes.time / 1000} detik\n`
        );
        money -= shoes.price;
        console.log("sisa kembaliannya adalah Rp.", money4);
      });
    });
  });
});
