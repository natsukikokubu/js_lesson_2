// ここにコードを書きながら確認しましょう！
function nameFn(name) {
  return `Gizumo ${name}`;
}
console.log(nameFn("taro"));

function argFn(arg = "Hello") {
  console.log(arg);
}
argFn();

function totalPrice(price, tax = 1.1) {
  return price * tax;
}
console.log(totalPrice(1000, 1.1));
console.log(totalPrice(1000));

// function argFn(arg = "Hello") {
//   console.log(arg);
// }
// argFn(undefined);

// 練習問題
// 問題 1
function discountRateCalc(price, rate = 0.05) {
  return price * (1 - rate);
}
console.log(discountRateCalc(4500));
console.log(discountRateCalc(6000, 0.2));
