const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin kopi tidak bisa digunakan");
  }
};

const makeCoffee = () => {
  return new Promise(executorFunction)
    // .then((r) => {
    //   console.log(r);
    // })
    // .catch((e) => {
    //   console.log("catch");
    //   console.log(e);
    // });
};
const coffeePromise = makeCoffee();
console.log(coffeePromise);

/* output
Promise { 'Kopi berhasil dibuat' }
*/
