let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.Fruits[0]} was selected`);
})
  .then(() => {
    return order(0000, () => {
      console.log("production was started");
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("Fruits are choped");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("Start th machine");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`ice cream was kept on the ${stocks.holder[0]}`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`add ${stocks.toppings[0]} as toppings`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("Your ice cream is ready");
    });
  })
  .catch(() => {
    console.log("customer was rejected");
  })

  .finally(() => {
    console.log("day ended so the shop is closed");
  });
