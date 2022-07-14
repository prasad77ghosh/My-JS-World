// Here we are  going learn Async behaviour of js with the help of an example Icecream creation

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruitName, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[0]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("Production was started");
    setTimeout(() => {
      console.log("Fruits was chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log("Machine was started");
          setTimeout(() => {
            console.log(
              `We put all fruit juice in side thr ${stocks.holder[0]}`
            );
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} added`);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

order(0, production);
